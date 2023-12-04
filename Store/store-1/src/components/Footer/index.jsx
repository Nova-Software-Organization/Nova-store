import React from "react";
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Link } from "react-router-dom";
// import boleto from "../../assets/img/boleto.png";
// import picpay from "../../assets/img/picpay.png";
// import pix from "../../assets/img/pix.png";
// import hamburger from "../../../../publics/imgpcon/hamburgerx.png";

export default function Footer () {
  // const images = [boleto, pix, picpay];

  return (
    <>
      <div className="max-w-screen mx-auto bg-black px-4 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:justify-items-center ">
        <div>
          <ul>
            <li className="font-bold text-2xl  text-orange-600 cursor-pointer hover:text-orange-600">
              Minha Conta
            </li>
            <li className="text-base font-medium text-white cursor-pointer hover:text-orange-600">
              Minha conta
            </li>
            <li className="text-base font-medium text-white cursor-pointer hover:text-orange-600">
              <Link to="/cardapio">Cardápio</Link> 
            </li>
            <li className="text-base font-medium text-white cursor-pointer hover:text-orange-600">
            <Link to="/conta/pedidos">Meus Pedidos</Link> 
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold text-2xl text-orange-600 cursor-pointer hover:text-orange-600">
              Contato
            </li>
            <li className="text-base font-medium text-white cursor-pointer hover:text-orange-600">
              Fale conosco
            </li>
            <li className="text-base font-medium text-white cursor-pointer hover:text-orange-600">
              Email:SacDelivery@gmail.com
            </li>
            <li className="text-base font-medium text-white cursor-pointer hover:text-orange-600">
              Tel:00 000000
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold text-2xl text-orange-600 cursor-pointer hover:text-orange-600">
              Sobre nós
            </li>
            <li className="text-base font-medium text-white cursor-pointer hover:text-orange-600">
              Sobre a loja
            </li>
            <li className="text-base font-medium text-white cursor-pointer hover:text-orange-600">
              Política de troca
            </li>
            <li className="text-base font-medium text-white cursor-pointer hover:text-orange-600">
              <Link to="/produto/promocoes">Promocional</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold text-2xl text-orange-600 cursor-pointer hover:text-orange-600">
              Formas de Pagamentos
            </li>
            <li className="flex mt-3 lg:items-center lg:justify-center md:items-center  md:left-0 items-center">
              {/* {images.map((image, index) => (
                <a key={index} href="/" className="mr-2 ">
                  <img
                    src={image}
                    alt=""
                    style={{ width: "45px" }}
                    className="hover:scale-105 duration-200"
                  />
                </a>
              ))} */}
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex items-center">
            <div className="items-center">
              <li className="font-bold text-2xl text-orange-600 cursor-pointer hover:text-orange-600 mt-3">
                Redes Sociais
              </li>
              <div className="flex">
                <li className="font-bold  text-white cursor-pointer hover:text-orange-600 flex">
                  <AiFillInstagram size={35}/>
                </li>
                <li className="text-base text-white cursor-pointer hover:text-orange-600 flex items-center">
                  <IoLogoWhatsapp size={35} />
                </li>
                <li className="text-base text-white cursor-pointer hover:text-orange-600 items-center">
                  <BiLogoFacebookCircle size={35} />
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="max-w-screen mx-auto bg-white flex flex-col md:flex-row justify-center items-center p-10">
        <div className="mr-4 mb-4 md:mb-0">
          <ul className="flex items-center">
            <li className="font-bold text-2xl cursor-pointer">
              <a href="/">
                {/* <img src={hamburger} alt="" style={{ width: "45px" }} /> */}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-black m-2 font-bold">Delivery</h1>
        </div>
        <div>
          <p className="font-bold text-black">Todos os direitos reservados 2023 ©</p>
        </div>
      </div>
    </>
  );
}