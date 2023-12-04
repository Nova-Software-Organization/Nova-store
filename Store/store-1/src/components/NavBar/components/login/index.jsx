import { useState } from "react";
import { BiLogOutCircle, BiUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../../context/auth/AuthContext";
import ModalLogin from "../Modals/login/ModalLogin";
import MyrequestLogin from "../myRequest";
import { handleLoginClick } from "../../helpers/NavbarUtilits";

export default function LoginNavBar({ nav, setNav }) {
    const { state, logout } = useAuth();
    const [openLoginModal, setOpenLoginModal] = useState(false);

    const handleClickLogout = () => {
        logout();
    }

    return (
        <>
        {state.isAuthenticated && state.email ? (
            <>
                <li className="font-bold text-lg flex cursor-pointer hover:scale-105 duration-200">
                    <div className='text-black flex items-center' onClick={handleClickLogout}>
                        <BiUserCircle size={25} className="mr-2 cursor-pointer text-black" />
                        {state.email.split('@')[0]}
                    </div>
                </li>
                <li className="font-bold text-lg flex py-4 cursor-pointer hover:scale-105 duration-200">
                    <BiLogOutCircle size={25} className="mr-4 cursor-pointer text-black" />
                    <span className='text-black' onClick={handleClickLogout}>Sair</span>
                </li>

                <MyrequestLogin />
            </>
            ) : (
            <>
                <li className="font-bold text-lg flex py-4 cursor-pointer hover:scale-105 duration-200">
                    <BiUserCircle size={25} className="mr-4 cursor-pointer" />
                    <NavLink onClick={() => handleLoginClick(nav, setNav, openLoginModal, setOpenLoginModal)}>Login</NavLink>
                </li>
                <li className="font-bold text-lg flex py-4 cursor-pointer hover:scale-105 duration-200">
                    <BiUserCircle size={25} className="mr-4 cursor-pointer" />
                    <NavLink to="/Registrar">Cadastra-se</NavLink>
                </li>
            </>
        )}

            {/*Modal Login*/}
            {openLoginModal && (
            <div className="modal" onClick={(event) => event.stopPropagation()}>
                <ModalLogin isOpen={openLoginModal} setOpenLoginModal={setOpenLoginModal} />
            </div>
        )}
        </>
    );
}