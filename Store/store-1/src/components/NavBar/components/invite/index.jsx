import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ModalInviteFriends from "../Modals/invite/ModalInviteFriends";
import { handleInviteClick } from "../../helpers/NavbarUtilits";

export default function Invite({ nav, setNav }) {
    const [openInviteModal, setOpenInviteModal ] = useState(false);

    return (
        <>
            <li className='font-bold text-lg flex py-4  cursor-pointer hover:scale-105 duration-200'>
                <FaUserFriends size={25} className='mr-4'/>
                <NavLink onClick={() => handleInviteClick(nav, setNav, openInviteModal, setOpenInviteModal)}>Convite Amigos</NavLink>
            </li>

            {openInviteModal && (
                <div className="modal" onClick={(event) => event.stopPropagation()}>
                    <ModalInviteFriends isOpen={openInviteModal} setOpenInviteModal={setOpenInviteModal} />
                </div>
            )}
        </>
    );
}