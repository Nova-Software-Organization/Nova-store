import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export function ModalCartAdd({isOpen, setOpenCartModal}) {

  const handleCloseModal = () => {
    setOpenCartModal(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <>
     <div className="fixed inset-0 p-10 flex items-center justify-center bg-black bg-opacity-50 ">
        <div className="bg-white rounded-lg w-[350px] h-[500px] p-10  flex flex-col">
        <h1 className='text-orange-600 font-bold text-2xl'>Envie sua mensagem!</h1>
          <div className="self-end cursor-pointer" onClick={handleCloseModal}>
            <AiOutlineClose size={24} color='black' />
          </div>
          <div className="flex-grow  rounded-md p-4">
          </div>
          <div className=" flex items-center justify-center ml-5">
            <input
              placeholder="Digite sua mensagem"
              type="text"
              className="outline-none p-3 w-[400px] rounded-md bg-black/25 text-black"
            />
          <button className='outline-none border-none'>
                <IoIosArrowDroprightCircle size={45} className="ml-1 cursor-pointer hover:scale-105 hover:duration-100 " color='black'/>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}