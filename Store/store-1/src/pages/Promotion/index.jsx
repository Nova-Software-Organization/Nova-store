import { useEffect } from "react";
import { useApiGetLimit } from "../../context/get/ProductLimitGetContext";
import ButtonAddCartMenu from "../Menu/components";

export default function Promotion() {
    const { data, fetchData } = useApiGetLimit();
      
    useEffect(() => {
        if (data.length === 0 ) {
          fetchData();
        }
    }, [data]);
  
    return (
          <>
            <div className="container mx-auto p-4">
              <h1 className="text-3xl font-bold my-4 text-orange-600">Promoções da Semana!!</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                      <img src={item.url} alt={item.name} className="rounded-lg w-full h-[200px] object-cover hover:scale-105 hover:duration-100" />
                      <h2 className="text-xl font-bold">{item.name}</h2>
                      <p className="text-orange-600">{item.description}</p>
                      <p className="text-black font-bold mt-2 line-through"> De R${item.price}</p>
                      <p className="text-black font-bold">Por R${item.dePrice.toFixed(2)}</p>
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