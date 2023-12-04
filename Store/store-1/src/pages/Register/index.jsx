
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';
import useAuthRegister from '../../hooks/client/formSubmitRegister/useAuthRegister';
import AddressInformation from './components/Address';
import ButtonSend from './components/ButtonSend';
import ClientInformation from './components/Client';

export default function Register() {
  const { state } = useAuth();
  const navigate = useNavigate();
  const { register, control, handleSubmit, formState: { errors } } = useForm();
  const { isSubmitting, onSubmit } = useAuthRegister();

  const handleFormSubmit = async (data) => {
    onSubmit(data);

    if (state.email && state.isAuthenticated) {
      navigate('/');
    }
  };
  
  return (
    <>
      <div className="flex items-center justify-center p-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">Formulário de Cadastro</h2>
        </div>
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg w-full md:w-2/3 lg:w-1/2">
            <form  onSubmit={handleSubmit(handleFormSubmit)} method="post" action="/">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ClientInformation control={control} errors={errors} />
                </div>
                <div>
                  <AddressInformation control={control} errors={errors} />
                </div>
                <div className="">
                    <p className='font-bold'>Já e cadastrado ? <Link to="/login" className='text-orange-600 hover:scale-105 duration-100'>Faça seu Login aqui!</Link></p>
                </div>
              </div>
              <div className="text-center mt-4">
                <ButtonSend isSubmitting={isSubmitting} text="Cadastrar" />
              </div>
            </form>
          </div>
        </div>
      </>
  );
}

export function Field( { label, name, placeholder, control, error, text, rules, value, onChange } ) {
  const defaultValue = control.defaultValue || '';
  
  return (
    <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2" htmlFor={name}>{label}:</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field }) => (
          <input
              id={name}
              className="w-full border rounded py-2 px-3 outline-orange-600"
              type={text}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              {...field}
            />
            )}
          />
      <span className="text-red-500 text-xs">{error?.message}</span>
    </div>
  );
}
