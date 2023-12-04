import React, { useState } from 'react';
import { useCart } from '../../../../context/cart/CartContext';

export default function ButtonAddCart({ product, quantity }) {
  const { cartDispatch } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = () => {
    cartDispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
    setAddedToCart(true);
  }

  return (
    <button
      className={`text-white hover:scale-105 font-bold p-4 bg-black border-none mt-3 ${addedToCart ? 'bg-gray-300' : ''}`}
      onClick={addToCart}
    >
      {addedToCart ? 'Adicionado ao Carrinho' : 'Adicionar ao Carrinho de Compras'}
    </button>
  );
}
