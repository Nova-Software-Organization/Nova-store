import { AiFillTag } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Promotion() {
    return (
            <li className='font-bold text-lg flex py-4  cursor-pointer hover:scale-105 duration-200'>
                <AiFillTag size={25} className='mr-4' />
                <NavLink to="/produto/promoçoes">Promoções</NavLink>
            </li>
    )
}