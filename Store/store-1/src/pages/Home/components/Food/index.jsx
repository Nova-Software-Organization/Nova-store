import { useEffect, useState } from 'react';
import { useApiGetLimit } from '../../../../context/get/ProductLimitGetContext';
import CategoriesProducts from './components/Categories';
import Price from './components/Price';
import ProductCurrent from './components/ProductCurrent';

// eslint-disable-next-line react/prop-types
export default function CardProduct ({ title }) {
  const { data, fetchData } = useApiGetLimit();
  const [foods, setFoods] = useState([...data]);

  useEffect(() => {
    if (data.length === 0 ) {
      fetchData();
    }
  }, [ data ]);

  return (
    <>
      <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>{title}</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div>
            <p className='font-bold text-gray-700'>Filtro Por Tipo</p>
            <CategoriesProducts data={foods} setFoods={setFoods}/>
          </div>
          <div>
            <p className='font-bold text-gray-700'>Filtro Por Preço</p>
              <Price data={foods} setFoods={setFoods} />
          </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          <ProductCurrent data={foods} setFoods={setFoods} />
        </div>
      </div>
    </>
  );
}