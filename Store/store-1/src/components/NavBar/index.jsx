import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiLogoJava, BiLogoSpringBoot } from 'react-icons/bi';
import { BsFillCartFill } from 'react-icons/bs';
import { DiJsBadge, DiReact } from 'react-icons/di';
import { NavLink } from 'react-router-dom';
import Search from './components/Search';
import Delivery from './components/delivery';
import Developer from './components/developer';
import Favorite from './components/favorite';
import Help from './components/help';
import Invite from './components/invite';
import LoginNavBar from './components/login';
import Menu from './components/menu';
import Money from './components/money';
import Promotion from './components/promotion';

export default function Navbar() {
    const [nav, setNav] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "Escape") {
            setNav((prevNav) => !prevNav);
            setOpenLoginModal(false);
          }
        };
    
        window.addEventListener("keydown", handleKeyDown);
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, []);

    return (
    <>
        <div className="max-w-screen mx-auto flex justify-between items-center p-6 bg-black">
            <div className="flex items-center justify-center">
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={25} color='white' className='hover:scale-105 duration-200' />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 text-white mb-0 md:mb-2 hover:scale-105 duration-150'>
                    <NavLink to="/">
                        Deli <span className='font-bold text-orange-600'>very</span>
                    </NavLink>
                </h1>
                <Delivery />
            </div>
            <Search />
            <button className='bg-orange-600 text-white items-center py-2  p-2 rounded-full hidden lg:flex cursor-pointer  hover:scale-105 duration-200 mt-1'>
                <BsFillCartFill size={20} className='mr-2' />
                <NavLink to="/checkout" target="_blank" rel="noopener noreferrer">
                    Carrinho de compras
                </NavLink>
            </button>

            <div className=' text-white rounded-full block lg:hidden  cursor-pointer  px-4 hover:scale-105 duration-200 mt-1'>
                <NavLink to="/checkout" target="_blank" rel="noopener noreferrer">
                    <BsFillCartFill size={25} className='mr-2' />
                </NavLink>
            </div>

            {nav ? <div className='backdrop-blur hover:backdrop-blur fixed w-full h-screen z-10 top-0 left-0' onClick={() => { setNav(!nav)}}></div> : null }

            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    color="White" size={30}
                    className='top-4 absolute right-4 cursor-pointer hover:scale-105 duration-200'
                />

                <h2 className='text-2xl p-4 bg-black text-white'>
                    Deli <span className='font-bold text-orange-600'>very</span>
                </h2>

                <nav>
                    <ul className='py-14 flex flex-col p-10'>
                        <LoginNavBar nav={nav} setNav={setNav} />
                        <Favorite />
                        <Money />
                        <Menu />
                        <Promotion />
                        <Help nav={nav} setNav={setNav} />
                        <Invite nav={nav} setNav={setNav} />
                        <Developer />
                    </ul>
                </nav>

                <div className='p-2 pt-46 sm:hidden'>
                    <p className='px-2 text-sm font-medium'>Tecnológias utilizadas para desenvolvimento da aplicação!</p>
                        <div className='flex mx-2'>
                            <DiJsBadge className='cursor-pointer' size={30} />
                            <DiReact className='cursor-pointer' size={30} />
                            <BiLogoJava className='cursor-pointer' size={30} />
                            <BiLogoSpringBoot className='cursor-pointer' size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
