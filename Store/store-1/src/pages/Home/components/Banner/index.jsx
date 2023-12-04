import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Banner() {

  return (
    <>
    <div className='max-w-[1640px] mx-auto p-4 rounded-sm hover:scale-105 duration-200 hidden lg:block xl:block '>
        <div className='max-h-[500px] relative'>
        {/*Overlay*/}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center rounded-lg'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            <span className='text-orange-500'></span>"Com nosso serviço de delivery,</h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            <span className='text-orange-600'>a comida gostosa vai até você.!!"</span>
            </h1>
        </div>
            <img className="rounded-lg w-full max-h-[500px] object-cover" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/"/>
     </div>
    </div>
    </>
  );
};
