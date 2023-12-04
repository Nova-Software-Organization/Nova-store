import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const useCancellationRequest = () => {
  const [response, setResponse] = useState(null);

  const cancelOrder = async (selectedOrder) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/v1/pedido/cancelamento',
        {
          numberOrder: selectedOrder.ordersRequest.numberOrder,
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Pedido cancelado com sucesso!',
          text: 'Cancelado',
          confirmButtonColor: '#EA580C',
        });
      }

      setResponse(response);
    } catch (error) {
      console.error("Erro ao efetuar o cancelamento do pedido: ", error);
    }
  };

  return { response, cancelOrder };
};

export default useCancellationRequest;
