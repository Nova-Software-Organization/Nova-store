import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
  return (
    <>
        <div className="flex justify-center items-center bg-orange-600 h-screen" disabled>
            <AiOutlineLoading3Quarters className='animate-spin justify-center mr-2' size={35} color='white'/>
            <div className="flex items-center justify-center">
                <p className="font-bold text-2xl text-white">Carregando...</p>
            </div>
        </div>
    </>
  )
}