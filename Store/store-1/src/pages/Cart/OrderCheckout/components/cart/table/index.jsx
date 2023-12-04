import { useCart } from "../../../../../../context/cart/CartContext";

export default function TableOrder() {
    const { cart } = useCart();

    return (
        <table className="p-5 bg-gray-200 rounded-md w-full">
                <thead>
                    <tr>
                        <th className="p-3 font-bold">Produto</th>
                        <th className="p-3 font-bold">Quantidade</th>
                        <th className="p-3 font-bold">Preço</th>
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
                            <td className="p-3 flex items-center justify-center mt-7">
                                {(product.quantity)}
                            </td>
                            <td className="p-3">
                                R${(product.price * product.quantity).toFixed(2)}
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
    )
}