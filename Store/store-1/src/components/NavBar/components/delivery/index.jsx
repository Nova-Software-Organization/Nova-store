import { useState } from "react";

export default function Delivery() {
    const [isEntrega, setIsEntrega] = useState(true);

    const toggleSide = () => {
        setIsEntrega(!isEntrega);
    };

    return (
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ml-10 mt-1">
            {isEntrega ? (
                <button className="bg-black text-white rounded-full p-2 border-none" id="toggleButton" onClick={toggleSide}>Entrega</button>
            ) : (
                <button className="bg-black text-white rounded-full p-2 border-none" id="toggleButton" onClick={toggleSide}>Retirada</button>
            )}
            <button className="p-2 border-none" id="toggleButton" onClick={toggleSide}>
                {isEntrega ? 'Retirada' : 'Entrega'}
            </button>
        </div>
    )
}