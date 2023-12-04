import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../../context/auth/AuthContext";
import { useCart } from "../../../context/cart/CartContext";
import TableContainerCheckout from "./components/table";

export default function Checkout() {
  const [subtotal, setSubtotal] = useState(0);
  const { cart } = useCart();
  const { state } = useAuth();

  useEffect(() => {
    if (Array.isArray(cart) && cart.length > 0) {
      const newSubtotal = cart.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
      setSubtotal(newSubtotal);
    }
  }, [cart]);

  return (
      <div className="max-w-screen-xl mx-auto mt-20 p-4">
        <h1 className="text-3xl font-bold text-orange-600 mb-5">Sacola de itens</h1>

        <TableContainerCheckout />

        <div className="max-w-screen">
          <div className="mx-auto flex h-[400px] container mt-20 flex-col bg-gray-200 rounded-md">
            <div className="container mx-auto flex mt-auto py-10 px-10 justify-end">
              <div className="flex flex-col">
                <div className="ml-52 flex items-center justify-center">
                  <p className="font-bold text-2xl mb-1">Subtotal</p>
                  <p className="font-bold ml-4">R$ {subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-items-center items-center">
                {state.isAuthenticated && state.email ? (
                  <div>
                        <Link to="/" className="hover:blue-600 font-medium mr-10 hover:scale-105 hover:duration-100">
                            Continuar Comprando
                        </Link>
                        <Link to="/checkout/finalizar">
                            <button className="font-bold px-20 py-2 text-white bg-orange-600 focus:scale-105 hover:bg-green-500 outline-none border-none duration-100 rounded-lg hover:scale-105 hover:duration-100">
                                Continuar
                            </button>
                        </Link>
                    </div>
                  ) : (
                    <Navigate to="/login" replace={true} />
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
