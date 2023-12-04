import { useState } from "react";
import useCancellationRequest from "../../../../hooks/Fetch/canceladedOrder/UseCancellationRequest";
import useUpdateAddress from "../../../../hooks/Fetch/updateAddressOrder/useUpdateAddress";

export default function ModalOrder({ data, selectedOrder, setSelectedOrder }) {
  const { response, cancelOrder } = useCancellationRequest();
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [editedAddress, setEditedAddress] = useState({});
  const { responseAddress, updateOrderAddress } = useUpdateAddress();

  const closeOrderDetails = () => {
    setSelectedOrder(null);
  };

  const toggleAddressEditing = () => {
    setIsEditingAddress(!isEditingAddress);
  };

  const handleAddressInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAddress({
      ...editedAddress,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    // Perform the update here using updateOrderAddress(editedAddress)
    // You may need to modify the useUpdateAddress hook to accept the edited address.
    updateOrderAddress(selectedOrder, editedAddress);
    setIsEditingAddress(false);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'Long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <>
      {selectedOrder && (
        <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur hover:backdrop-blur flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">{selectedOrder.products.name}</h2>
            <img src={selectedOrder.products.midia.url} className="w-full h-40 object-cover mb-4 rounded-md" />
            <p className="font-bold">Numero do Pedido: {selectedOrder.ordersRequest.numberOrder}</p>
            <p className="font-bold">Data da Compra: {formatDate(selectedOrder.ordersRequest.datePayment)}</p>
            <p className="font-bold">Total: R${selectedOrder.ordersRequest.totalValue.toFixed(2)}</p>
            <p className="font-bold">Status: {selectedOrder.ordersRequest.status || response.data.status}</p>
            <h3 className="text-lg font-semibold mt-4">Informações Pessoais</h3>
            <p className="text-bold">Nome: {data.client.name}</p>
            <p className="text-bold">Email: {data.client.email}</p>
            <h3 className="text-lg font-semibold mt-4">Endereço de Entrega</h3>
            {isEditingAddress ? (
              <div className="flex flex-col items-center justify-center">
                <input
                  type="text"
                  name="road"
                  value={editedAddress.road || data.address.road || selectedOrder.ordersRequest.road}
                  onChange={handleAddressInputChange}
                  className="text-bold border-orange-600 outline-orange-600"
                />
                <input
                  type="text"
                  name="neighborhood"
                  value={editedAddress.neighborhood || data.address.neighborhood || selectedOrder.ordersRequest.neighborhood}
                  onChange={handleAddressInputChange}
                  className="text-bold border-orange-600 outline-orange-600"
                />
                <input
                  type="text"
                  name="housenumber"
                  value={editedAddress.housenumber || data.address.housenumber || selectedOrder.ordersRequest.housenumber}
                  onChange={handleAddressInputChange}
                  className="text-bold border-orange-600 outline-orange-600"
                />
                <input
                  type="text"
                  name="cep"
                  value={editedAddress.cep || data.address.cep || selectedOrder.ordersRequest.cep}
                  onChange={handleAddressInputChange}
                  className="text-bold border-orange-600 outline-orange-600"
                />
              </div>
            ) : (
              <>
                <p className="text-bold">Rua: {selectedOrder.ordersRequest.road}</p>
                <p className="text-bold">Bairro: {selectedOrder.ordersRequest.neighborhood}</p>
                <p className="text-bold">Numero da casa: {selectedOrder.ordersRequest.housenumber}</p>
                <p className="text-bold">CEP: {selectedOrder.ordersRequest.cep}</p>
              </>
            )}
            <button
              className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-600 border-none text-bold hover:scale-105 hover:duration-100"
              onClick={closeOrderDetails}
            >
              Fechar
            </button>
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 ml-2 rounded-lg hover:bg-red-600 border-none text-bold hover:scale-105 hover:duration-100"
              onClick={() => cancelOrder(selectedOrder)}
            >
              Cancelar Pedido
            </button>
            <button
              className="mt-4 bg-orange-600 text-white px-4 py-2 ml-2 rounded-lg hover:bg-orange-600 border-none text-bold hover:scale-105 hover:duration-100"
              onClick={isEditingAddress ? handleSaveClick : toggleAddressEditing}
            >
              {isEditingAddress ? "Salvar Endereço" : "Editar Endereço"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
