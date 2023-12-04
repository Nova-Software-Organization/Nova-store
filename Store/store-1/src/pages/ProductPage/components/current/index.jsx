import { useNavigate } from 'react-router-dom';

export default function ButtonCurrent({ product, quantity, setQuantity, onBuy }) {
    const navigate = useNavigate();

    const handleBuyClick = () => {
      onBuy(product, quantity);
  
      navigate('/Checkout');
    };

    return (
        <button className='text-white hover:scale-105 font-bold p-4 bg-orange-600 border-none' onClick={handleBuyClick}>Comprar Agora</button>
    );
}