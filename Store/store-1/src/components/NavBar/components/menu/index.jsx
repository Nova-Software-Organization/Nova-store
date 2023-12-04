import { MdMenuBook } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <li className='font-bold text-lg flex py-4  cursor-pointer hover:scale-105 duration-200'>
            <MdMenuBook size={25} className='mr-4'/>
            <NavLink to="/cardapio">Cardápio</NavLink>
        </li>
    )
}