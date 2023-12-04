import React from 'react';
import { Link } from 'react-router-dom';

export default function ResultSearch({ filteredProducts, showResults }) {
  return (
    <>
      {showResults && (
        <div className="max-h-[200px] overflow-y-auto w-full absolute flex justify-center mt-12" style={{ zIndex: 1 }}>
          <ul className="grid grid-cols-1 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link to={`/produto/${product.id}`} key={product.name}>
                  <li className="bg-white shadow-md p-4 flex">
                    <img src={product.url} alt={product.name} className="rounded-lg h-[150px] object-cover duration-100 hover:scale-105 w-[150px] sm:w-[150px] lg:w-[150px]" />
                    <div className='flex flex-col p-2'>
                      <h2 className="text-xl font-semibold">{product.name}</h2>
                      <p className='flex-col fw-bold '>R$ {product.price}</p>
                      <p className='flex-col'>{product.description}</p>
                    </div>
                  </li>
                </Link>
              ))
            ) : (
              <div className="max-h-[200px] overflow-y-auto w-full absolute flex justify-center mt-12 absolute" style={{ zIndex: 1 }}>
                <p className="bg-black">Nenhum produto encontrado.</p>
              </div>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
