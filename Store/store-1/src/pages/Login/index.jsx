import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BiUserCircle } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';
import useAuthLogin from '../../hooks/client/formSubmitLogout/useAuthLogin';
import ButtonSend from '../Register/components/ButtonSend';

export default function Login() {
  const { control, handleSubmit } = useForm();
  const { login, sendRequest, state } = useAuth();
  const {isSubmitting, onSubmitLogout} = useAuthLogin();
  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    onSubmitLogout(data, login, sendRequest);
  };

  if (state.isAuthenticated && state.email) {
    navigate("/checkout");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded shadow-md w-[800px] h-[500px] flex items-center flex-col">
        <div className='flex items-center justify-center'>
          <BiUserCircle size={30} className='mt-0'/>
          <h1 className="text-2xl font-semibold">Login do cliente</h1>
        </div>
        <div>
          <p className='font-bold font-justify'>Veja seus pedidos de forma fácil, compre mais rápido e tenha uma experiência personalizada :)</p>
        </div>
        <form onSubmit={handleSubmit(handleFormSubmit)} className='mt-4'>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className="w-[500px] border p-4 focus:outline-none focus:border-orange-600 rounded-md outline-orange-600"
                  placeholder="Digite seu email"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Senha</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  className="w-[500px] border p-4 focus:outline-none focus:border-orange-600 rounded-md outline-orange-600"
                  placeholder="Digite sua senha"
                />
              )}
            />
          </div>
          <div>
          </div>
          <div className='flex items-center justify-center'>
            <ButtonSend isSubmitting={isSubmitting} text="Enviar" />
          </div>
          <div className='flex items-center mt-4 justify-center'>
            <p className='font-bold'>Esqueceu a senha ? <Link to="/renovar/senha" className="text-orange-600 font-bold">Recuperar Conta</Link></p>
          </div>
          <div className='flex items-center mt-4 justify-center'>
            <p className='font-bold'>Não tem cadastro? <Link to="/registrar" className="text-orange-600 font-bold">Cadastre-se</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
