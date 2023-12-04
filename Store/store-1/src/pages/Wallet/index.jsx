
export default function Wallet () {
  return (
    <>
        {/*Carteira*/}
        <div className="mx-auto flex justify-center h-screen items-center bg-white">
            <div className="bg-orange-600 container h-96 mx-[40px] rounded-lg">
              <div className="">
                <h1 className="px-4 font-bold text-2xl py-5 text-white"> Carteira Digital</h1>
              </div>
              <div className="bg-white rounded-md px-2 py-12 m-8 w-64">
                  <h1 className="text-black font-bold">Dinheiro na carteira</h1>
              </div>
            </div>
        </div>
    </>
  )
}