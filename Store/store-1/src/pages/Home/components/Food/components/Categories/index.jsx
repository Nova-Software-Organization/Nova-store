import React from 'react';

export default function CategoriesProducts({ data, setFoods }) {

 // Filter Type
  const filterType = (category) => {
    const filteredFoods = data.filter((item) => item.category === category);
    setFoods(filteredFoods);
  };

  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between'>
          <div className='flex justify-between flex-wrap'>
            {Array.from(new Set(data.map((item) => item.category)).values()).map((category, index) => (
              <button
                key={index}
                onClick={() => filterType(category)}
                className='m-1 border-orange-600 bg-orange-600 text-white border-none hover:bg-black hover-text-white cursor-pointer'
              >
                {category}
              </button>
            ))}
          </div>
        </div>
    </>
  );
}
