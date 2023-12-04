import { useState } from 'react';
import { BsChatFill } from 'react-icons/bs';

export default function Chat ({ModalChat}) {
const [openChatModal,setOpenChatModal ] = useState(false);
 
const handleChatClick = () => {
    setOpenChatModal(!openChatModal);
};

return (
    <>
      <div className="flex justify-start mb-10 px-4 fixed bottom-0 left-0 xl:hidden lg:hidden md:block">
        <button onClick={handleChatClick} className=" relative rounded-full p-5 px-5 border-none font-bold bg-black text-white">
          <BsChatFill size={23} color='white' />
        </button>
        {openChatModal && (
            <div className="modal" onClick={(event) => event.stopPropagation()}>
                <ModalChat isOpen={openChatModal} setOpenChatModal={setOpenChatModal} />
            </div>
        )}
      </div>
    </>
  );
};
