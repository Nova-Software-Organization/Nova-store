import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export default function useClientContact() {
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmitLogout = async (data) => {
    try {
      setSubmitting(true);
      const response = await axios.post('http://localhost:8080/v1/contato/newsletter', data);

      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Enviado com sucesso!',
          confirmButtonColor: '#EA580C',
        });
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro ao enviar o formulário',
        text: 'Por favor, tente novamente mais tarde!',
        confirmButtonColor: '#000',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return {
    isSubmitting,
    onSubmitLogout,
  };
}
