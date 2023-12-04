import { useForm } from 'react-hook-form';
import { createOrder } from '../../../assets/js/cart/order/orderRequest';
import { useAuth } from '../../../context/auth/AuthContext';
import { useCart } from '../../../context/cart/CartContext';
import CustomerInfoPayment from './components/CustomerInfoPayment';
import FinalizeButton from './components/Finalize';
import MethodPayment from './components/MethodPayment';

export default function OrderFinalizeCheckout() {
    const { state } = useAuth();
    const { cart } = useCart();
    const { control, handleSubmit, formState: { errors } } = useForm();

    const createOrderRequest = async (data) => {
        createOrder(state, cart, data);
    }

    return (
        <div className="flex items-center justify-center p-4">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-orange-600 mt-10 mb-2">Finalização do Pedido</h1>
                <form onSubmit={handleSubmit(createOrderRequest)} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                        <CustomerInfoPayment control={control} state={state} />
                    </div>
                    <div className='mb-2'>
                        <MethodPayment control={control} state={state}/>
                    </div>
                    <FinalizeButton />
                </form>
            </div>
        </div>
    );
}
