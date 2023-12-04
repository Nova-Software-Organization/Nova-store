import { Controller } from "react-hook-form";
import Cart from "../cart";

export default function MethodPayment({ state, control}) {
    return (
        <div className="ml-2">
            <h2 className="text-xl font-bold">Método de Pagamento</h2>
                <div className="mt-2">
                <label className="block text-black text-sm font-bold mb-2" htmlFor="paymentMethod">
                    Selecione o método de pagamento:
                </label>
                <Controller
                    name="paymentMethod"
                    control={control}
                    defaultValue="credit"
                    render={({ field }) => (
                        <select className="w-full border rounded py-2 px-3  outline-orange-600" {...field}>
                            <option value="credit">Cartão de Crédito</option>
                            <option value="debit">Cartão de Débito</option>
                            <option value="cash">Dinheiro</option>
                        </select>
                    )}
                />
            </div>
            <Cart />
        </div>
    );
}
