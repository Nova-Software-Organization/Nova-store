import { Controller, useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { useAuth } from '../../../../../context/auth/AuthContext';
import useAuthLogin from '../../../../../hooks/client/formSubmitLogout/useAuthLogin';

export default function ModalLogin({ isOpen, setOpenLoginModal }) {
  const { control, handleSubmit } = useForm();
  const { login, sendRequest } = useAuth();
  const { isSubmitting, onSubmitLogout } = useAuthLogin();

  const handleCloseModal = () => {
    setOpenLoginModal(false);
  };

  const handleFormSubmit = async (data) => {
    await onSubmitLogout(data, login, sendRequest);
    setOpenLoginModal(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 flex p-10 items-center justify-center backdrop-blur hover:backdrop-blur py-10">
        <div className="bg-white rounded-lg w-[400px] h-[500px] p-10 justify-center flex flex-col">
          <div className="self-end cursor-pointer" onClick={handleCloseModal}>
            <AiOutlineClose size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Login do Cliente</h2>
          <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)} method="post">
            <div>
              <label className="block mb-1 font-bold">Email:</label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="email"
                    {...field}
                    className="w-full px-2 p-2 outline-none text-black rounded text-left border-orange-600 outline-orange-600"
                    placeholder="cliente@gmail.com"
                  />
                )}
              />
            </div>

            <div>
              <label className="block mb-1 font-bold">Senha:</label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="password"
                    {...field}
                    className="w-full px-2 p-2 outline-none text-black rounded text-left border-orange-600 outline-orange-600"
                    placeholder="**********"
                  />
                )}
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-orange-600 text-white px-12 py-2 rounded border-none">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
