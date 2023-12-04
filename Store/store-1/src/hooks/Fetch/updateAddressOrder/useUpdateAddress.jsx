import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export default function useUpdateAddress() {

    const [responseAddress, setResponse] = useState(null);
    
    const updateOrderAddress = async (selectedOrder, editedAddress) => {
        try {
      const response = await axios.post(
        'http://localhost:8080/v1/pedido/atualizar/endereco',
        {
          numberOrder: selectedOrder.ordersRequest.numberOrder,
          customerAddress: editedAddress
        }
      );

      if (response.status === 200 || response.status === 201) {
          console.log(response);
          Swal.fire({
          icon: 'success',
          title: 'Endereço alterado com sucesso',
          confirmButtonColor: '#EA580C',
        });
      }

      setResponse(response);
    } catch (error) {
        console.error("Erro ao efetuar a atualização de endereço de entrega: ", error);
    }
};

    return { responseAddress, updateOrderAddress };
};