import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/auth/AuthContext";

export default function useAuthRegister() {
  const [isSubmitting, setSubmitting] = useState(false);
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      const response = await axios.post('http://localhost:8080/v1/auth/registrar', data);

      if (response.status === 200 || response.status === 201) {

        login(data.customerDTO);

        Swal.fire({
          icon: 'success',
          title: 'Formulário Enviado com Sucesso!',
          text: 'Cadastro concluído',
          confirmButtonColor: '#EA580C',
        });
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);

      const errorMessage = error.response?.data?.message || 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde!';
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro ao enviar o formulário',
        text: errorMessage,
        confirmButtonColor: '#000'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return {
    isSubmitting,
    onSubmit,
  };
}
