import { TbTruckDelivery } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function MyrequestLogin() {
    return (
            <li className='font-bold text-lg flex py-4  cursor-pointer hover:scale-105 duration-200'>
                <TbTruckDelivery size={25} className='mr-4  cursor-pointer'/>
                <NavLink to="/cliente/conta/pedidos">Meus Pedidos</NavLink>
            </li>
    )
}