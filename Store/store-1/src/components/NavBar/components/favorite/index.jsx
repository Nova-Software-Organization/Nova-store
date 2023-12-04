import { MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Favorite() {
    return (
        <li className='font-bold text-lg flex py-4  cursor-pointer hover:scale-105 duration-200'>
            <MdFavorite size={25} className='mr-4'/>
            <NavLink to="/produto/favoritos">Favortiros</NavLink>
        </li>
    );
}