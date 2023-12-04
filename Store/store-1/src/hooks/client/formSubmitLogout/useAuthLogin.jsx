import { useState } from "react";
import Swal from "sweetalert2";

export default function useAuthLogin() {
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmitLogout = async (data, login, sendRequest, setOpenLoginModal) => {
    try {
      setSubmitting(true);
      const response = await sendRequest('http://localhost:8080/v1/auth/entrar', 'POST', data);

      if (response.status === 200 || response.status === 201) {
        login(data);
        setOpenLoginModal(false);
      }

      Swal.fire({
        icon: 'success',
        title: 'Autenticado',
        confirmButtonColor: '#EA580C',
      });
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro ao enviar o formulário',
        text: 'Por favor, tente novamente mais tarde!',
        confirmButtonColor: '#000',
      }
    )} finally {
      setSubmitting(false);
    }
  };

  return {
    isSubmitting,
    onSubmitLogout,
  };
}
