

export default function HeadlineCards() {
  return (
    <>
    {/*Cards*/}
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="rounded relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white px-8">
        <p className="font-bold text-2xl px-4 pt-4">Saiu o sol, saiu BOGO</p>
        <p className="px-4">Até 26/08</p>
            <button className="px-6 font-bold cursor-pointer  hover:text-orange-600  border-white bg-white text-black mx-2 absolute bottom-4 p-2 rounded-md">Peça agora</button>
        </div>
        <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-md"
            src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            />
        </div>
        <div className="rounded relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white px-8">
        <p className="font-bold text-2xl px-4 pt-4">Novos Restaurantes</p>
        <p className="px-4">Adicionado diariamente</p>
            <button className="px-6 font-bold cursor-pointer  hover:text-orange-600  border-white bg-white text-black mx-2 absolute bottom-4 p-2 rounded-md">Peça agora</button>
        </div>
        <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-md"
            src="https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            />
        </div>
        <div className="rounded relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white px-8">
        <p className="font-bold text-2xl px-4 pt-4">Entregamos Sobremesas</p>
        <p className="px-4">Deleites saborosos</p>
            <button className="px-6 font-bold cursor-pointer  hover:text-orange-600  border-white bg-white text-black mx-2 absolute bottom-4 p-2 rounded-md">Peça agora</button>
        </div>
        <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-md"
            src="https://images.pexels.com/photos/13743427/pexels-photo-13743427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            />
        </div>
    </div>
    </>
  )
}