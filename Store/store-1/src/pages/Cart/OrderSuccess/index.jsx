import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
        <>
          <div className="h-screen flex justify-center items-center bg-orange-600">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4 text-white">Pedido Confirmado</h2>
              <p className='text-white fw-bold'>Seu pedido foi confirmado com sucesso. Obrigado por comprar conosco!</p>
              <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 mt-4 rounded-xl border-none hover:scale-105 hover:duration-100">
                  <Link to="/">
                      Voltar à Página Inicial
                  </Link>
              </button>
            </div>
          </div>
        </>
  );
}
