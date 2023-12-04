// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useApiGetAll } from '../../context/get/ProducAllGetContext';
import ButtonAddCartMenu from './components';

export default function Menu() {
  const { data, fetchDataAll } = useApiGetAll();

  useEffect(() => {
      if (data.length === 0 ) {
        fetchDataAll();
      }
  }, [data]);

  return (
        <>
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold my-4 text-orange-600">Cardápio de Delivery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                    <img src={item.url} alt={item.name} className="rounded-lg w-full h-[200px] object-cover hover:scale-105 hover:duration-100" />
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-orange-600">{item.description}</p>
                    <p className="text-black font-bold mt-2">R${item.price}</p>
                    <div className='text-orange-600 hover-text-black font-bold'>
                          <ButtonAddCartMenu data={item} />
                      </div>
                  </div>
                ))}
            </div>
          </div>
        </>
  );
}
