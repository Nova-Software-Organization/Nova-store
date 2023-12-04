import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/cart/CartContext';
import NotFouldProduct from '../error/product/NotFould';
import DetailsProducts from './components/detailsProducts';
import ButtonAddCart from './components/addCart';
import ButtonCurrent from './components/current';

export default function ProductPage({ ModalCartAdd, data }) {
  const { productId } = useParams();
  const { cartDispatch } = useCart();
  const [openCartModal, setOpenCartModal] = useState(false);
  const product = data.find((item) => item.id === parseInt(productId));
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    cartDispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
    setAddedToCart(true);
  }

  if (product && product.id === parseInt(productId)) {
    return (
      <>
        <div className='mx-auto max-w-4xl w-full h-screen flex flex-col items-center justify-center mt-36 md:mt-42'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <div className='mx-auto sm:mx-0 rounded-md'>
              <img src={product.url} alt={product.name} className='w-full rounded-md lg:p-0 xl:p-0 p-4 md:rounded-md' />
            </div>
            <div className='flex flex-col justify-center p-4'>
              <h2 className='text-3xl font-bold mb-2'>{product.name}</h2>
              <div className='flex items-center mb-1'>
                <div className='flex flex-col'>
                  <p className='text-black text-xl font-bold'>De <span className='text-orange-600'>R$ {product.dePrice.toFixed(2)}</span></p>
                  <p className='text-black text-xl font-bold'>Por <span className='text-orange-600'>R$ {product.price.toFixed(2)}</span></p>
                </div>
                <div className="flex items-center justify-center mt-3 ml-4 mb-3">
                  <button
                    className="quantity-button px-3 py-1 rounded-md"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                    <input
                      type="text"
                      className="quantity-input border  rounded-md mx-2 p-2 w-16 text-center"
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  <button
                    className="quantity-button px-3 py-1 rounded-md"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
              <ButtonCurrent product={product} quantity={quantity} setQuantity={setQuantity} onBuy={addToCart} />
              <ButtonAddCart product={product} quantity={quantity} setQuantity={setQuantity} />
              {openCartModal && (
                <div className="modal" onClick={(event) => event.stopPropagation()}>
                  <ModalCartAdd isOpen={openCartModal} setOpenCartModal={setOpenCartModal} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='py-10 p-3 mt-24 lg:mt-16 md:mt-10 sm:mt-5'>
          <DetailsProducts product={product} />
        </div>
      </>
    );
  } else {
    return <NotFouldProduct data={data} productId={productId} />;
  }
}
