// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCurrent({data, setFoods}) {
  return (
    <>
        {data.map((product, index) => (
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 p-2 md:flex md:flex-col'>
            <Link to={`/produto/${product.id}`}>
              <img src={product.url} className='rounded-lg w-full h-[200px] object-cover' alt={product.name} />
            </Link>
            <div>
              <p className='text-orange-600 font-bold m-1'>{product.name}</p>
              <p className='text-black font-bold m-1'>
                <span className='line-through'> De R${product.price.toFixed(2)}</span>
                <br></br>
                <span> Por R$ {product.dePrice.toFixed(2)}</span>
              </p>
            </div>
            <div className='lg:flex xl:flex sm:flex justify-center items-center md:flex flex'>
              <div className='text-orange-600 hover-text-black font-bold'>
                <Link to={`/produto/${product.id}`}>
                  <button>Comprar</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}