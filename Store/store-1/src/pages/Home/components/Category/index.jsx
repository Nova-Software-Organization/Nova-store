import { categories } from "../../../../data/data";

export default function Category() {
  return (
    <>
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="text-orange-600 font-bold text-3xl text-center">Itens de menu mais votados</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item,index) => (
            <div key={index} className="bg-gray-100 rounded-lg flex p-4 justify-between items-center">
                <h2 className="font-bold sm:text-xl">{item.name}</h2>
                <img  className="w-14" src={item.image} alt={item.name}/>
            </div>
            ))}
          </div>
      </div>
    </>
  )
}