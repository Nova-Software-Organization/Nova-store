import { useState } from "react";
import { MdHelp } from "react-icons/md";
import ModalHelp from "../Modals/help/ModalHelp";
import { handleHelpClick } from "../../helpers/NavbarUtilits";

export default function Help({nav, setNav}) {
    const [openHelpModal, setOpenHelpModal ] = useState(false);
    
    return (
        <>
        <li className='font-bold text-lg flex py-4  cursor-pointer hover:scale-105 duration-200'>
            <MdHelp size={25} className='mr-4'/> 
            <a onClick={() => handleHelpClick(nav, setNav, openHelpModal, setOpenHelpModal)}>Ajuda</a>
        </li>

        {openHelpModal && (
            <div className="modal" onClick={(event) => event.stopPropagation()}>
                <ModalHelp isOpen={openHelpModal} setOpenHelpModal={setOpenHelpModal} />
            </div>
        )}
    </>
    );
}