import { useForm } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';
import useClientContact from '../../../../hooks/Fetch/contact/useClientContact';
import ButtonSend from '../../../Register/components/ButtonSend';
import InputDate from './components/inputDate';

export default function Form () {
  const { handleSubmit, control } = useForm();
  const {isSubmitting, onSubmitLogout} = useClientContact();

  const handleFormSubmit = async (data) => {
    onSubmitLogout(data);
  };

  return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col w-full max-w-lg mx-4">
          <div className="bg-orange-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mt-8 hover:scale-105 duration-300">
            <AiOutlineMail size={30} color="white" />
          </div>
          <h1 className="text-black font-bold text-3xl text-center mt-6">Entre em Contato</h1>
          <p className="text-black text-center">Fique por dentro das novidades!!</p>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="flex flex-col mt-6">
              <InputDate control={control} />
            </div>
            <div className='mt-4'>
              <ButtonSend isSubmitting={isSubmitting} text="Enviar"/>
            </div>
          </form>
        </div>
      </div>
  );
};
