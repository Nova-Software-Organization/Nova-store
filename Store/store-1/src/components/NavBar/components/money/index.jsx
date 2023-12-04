import { FaWallet } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Money() {
    return (
        <li className='font-bold text-lg flex py-4  cursor-pointer hover:scale-105 duration-200'>
            <FaWallet size={25} className='mr-4'/> 
            <NavLink to="/carteira">Carteira</NavLink>
        </li>
    )
}