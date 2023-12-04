// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function Price ({ data, setFoods }) {

    // Filter price
  const filterPrice = (price) => {
    const filteredFoods = data.filter((item) => item.price === price);
    setFoods(filteredFoods);
  };

  const top3Prices = Array.from(new Set(data.map((item) => item.price)))
  .sort((a, b) => b - a)
  .slice(0, 3);

  return (
    <>
        {/* Filtro pelo preço */}
        <div className='flex max-w-[390px] w-full '>
            {top3Prices.map((price, index) => (
                <button
                key={index}
                onClick={() => filterPrice(price)}
                className='m-1 border-orange-600 bg-orange-600 text-white border-none hover:bg-black hover-text-white cursor-pointer'
                >
                {price}
                </button>
            ))}
        </div>
    </>
  )
}