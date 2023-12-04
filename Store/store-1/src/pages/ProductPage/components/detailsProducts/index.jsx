import React from "react";

export default function DetailsProducts({ product }) {
  if (!product || !product.description) {
    return <div className="bg-black container mx-auto rounded-lg">
           <div className="px-4 py-4 sm:px-6 md:px-8">
             <h1 className="font-bold text-orange-600 text-3xl">Detalhes</h1>
          <div className="mt-4">
             <p className="text-white">Esse produto não possui descrição!!</p>
        </div>
       </div>
      </div>
  }

  return (
    <>
      <div className="bg-black container mx-auto rounded-lg">
        <div className="px-4 py-4 sm:px-6 md:px-8">
          <h1 className="font-bold text-orange-600 text-3xl md:2xl">Detalhes</h1>
          <div className="mt-4">
            <p className="text-white">{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
