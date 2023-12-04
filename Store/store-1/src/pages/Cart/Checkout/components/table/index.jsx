import { BsFillTrashFill } from 'react-icons/bs';
import { useCart } from "../../../../../context/cart/CartContext";

export default function TableContainerCheckout() {
    const { cart, incrementQuantity, decrementQuantity, updateQuantity, removeItem } = useCart();
    
      const handleIncrement = (productId) => {
        incrementQuantity(productId);
      };
    
      const handleDecrement = (productId) => {
        decrementQuantity(productId);
      };
    
      const handleRemoveCart = (productId) => {
        removeItem(productId);
      };
    
      const handleQuantityChange = (productId, newQuantity) => {
        updateQuantity(newQuantity, productId);
      };

    return (
        <div className="table-container">
        <table className="w-full bg-gray-200 rounded-md mt-5">
          <thead>
            <tr>
              <th className="p-3 font-bold">Produto</th>
              <th className="p-3 font-bold">Quantidade</th>
              <th className="p-3 font-bold">Preço</th>
              <th className="p-3 font-bold">Ações</th>
            </tr>
          </thead>
          <tbody>
            {cart && cart.length > 0 ? (
              cart.map((product, index) => (
                <tr key={index}>
                  <td className="p-3">
                    <div className="flex items-center">
                      <img src={product.url} alt={product.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                      <div>
                        <h2 className="text-base font-semibold mb-1 lg:text-lg xl:text-base">{product.name}</h2>
                        <p className="text-gray-600">R${product.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center">
                      <button
                        className="quantity-button px-3 py-1 rounded-md"
                        onClick={() => handleDecrement(product.id)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="quantity-input border rounded-md mx-2 p-2 w-16 text-center"
                        value={product.quantity}
                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                      />
                      <button
                        className="quantity-button px-3 py-1 rounded-md"
                        onClick={() => handleIncrement(product.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-3">R${(product.price * product.quantity).toFixed(2)}</td>
                  <td className="p-3">
                    <button className="border-none" onClick={() => handleRemoveCart(product.id)}>
                      <BsFillTrashFill size={25} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-3 font-bold">Nenhum produto disponível</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
}