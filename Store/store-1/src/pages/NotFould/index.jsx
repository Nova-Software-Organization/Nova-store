
export default function NotFould () {
  return (
    <>
      <div className="justify-center flex items-center mx-auto px-0 h-screen flex-col bg-orange-600">
        <h1 className="text-white font-bold text-6xl">404</h1>
        <p className="text-white font-bold">Pagina não foi encontrada!!</p> 
        <button className="font-bold bg-black text-white hover:text-orange-500 duration-200  hover:scale-105"> 
          <a href="/">
             Voltar para pagina pricipal
          </a>
        </button>
      </div>
    </>
  )
}