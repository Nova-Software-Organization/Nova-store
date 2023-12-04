import { useState } from "react";
import { useAuth } from "../../../../context/auth/AuthContext";
import useUserDataFetching from "../../../../hooks/Fetch/email/useUserDataFetching";
import useUpdateAddress from "../../../../hooks/Fetch/updateAddressOrder/useUpdateAddress";

export default function ModalAddress({ selectOrderAddress, setSelectOrderAddress }) {
  const { state } = useAuth();
  const { responseAddress, updateOrderAddress } = useUpdateAddress();
  const { data, loading } = useUserDataFetching(state.email);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    road: data.ordersRequest?.address?.road || selectOrderAddress.ordersRequest.road,
    neighborhood: data.ordersRequest?.address?.neighborhood || selectOrderAddress.ordersRequest.neighborhood,
    housenumber: data.ordersRequest?.address?.housenumber || selectOrderAddress.ordersRequest.housenumber,
    cep: data.ordersRequest?.address?.cep || selectOrderAddress.ordersRequest.cep,
  });

  const closeOrderAddress = () => {
    setSelectOrderAddress(null);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform the update here using updateOrderAddress(editedData)
    // You may need to modify the useUpdateAddress hook to accept the edited data.
    updateOrderAddress(data.ordersRequest.numberOrder);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  return (
    <>
      {selectOrderAddress && (
        <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur hover:backdrop-blur flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">{selectOrderAddress.products.name}</h2>
            <img src={selectOrderAddress.products.midia.url} className="w-full h-40 object-cover mb-4 rounded-md" />
            <p className="font-bold">Numero do Pedido:{selectOrderAddress.ordersRequest.numberOrder}</p>
            <h3 className="text-lg font-semibold mt-4">Endereço de Entrega</h3>
            {isEditing ? (
              <div className="flex flex-col items-center justify-center">
                <input
                  type="text"
                  name="road"
                  value={editedData.road}
                  onChange={handleInputChange}
                  className=" border-orange-600 outline-orange-600 mt-2 px-4 py-2 rounded-md"
                />
                <input
                  type="text"
                  name="neighborhood"
                  value={editedData.neighborhood}
                  onChange={handleInputChange}
                  className=" border-orange-600 outline-orange-600 mt-2 px-4 py-2 rounded-md"
                />
                <input
                  type="text"
                  name="housenumber"
                  value={editedData.housenumber}
                  onChange={handleInputChange}
                  className=" border-orange-600 outline-orange-600 mt-2 px-4 py-2 rounded-md"
                />
                <input
                  type="text"
                  name="cep"
                  value={editedData.cep}
                  onChange={handleInputChange}
                  className=" border-orange-600 outline-orange-600 mt-2 px-4 py-2 rounded-md"
                />
              </div>
            ) : (
              <>
                {editedData.road ? <p className="text-bold">Rua: {editedData.road}</p> : <p>Endereço indisponível</p>}
                {editedData.neighborhood ? <p className="text-bold">Bairro: {editedData.neighborhood}</p> : null}
                {editedData.housenumber ? <p className="text-bold">Numero da casa: {editedData.housenumber}</p> : null}
                {editedData.cep ? <p className="text-bold">CEP: {editedData.cep}</p> : null}
              </>
            )}
            <button
              className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover-bg-orange-600 border-none text-bold hover-scale-105 hover-duration-100"
              onClick={closeOrderAddress}
            >
              Fechar
            </button>
            {isEditing ? (
              <button
                className="mt-4 bg-orange-600 text-white px-4 py-2 ml-2 rounded-lg hover-bg-orange-600 border-none text-bold hover-scale-105 hover-duration-100"
                onClick={handleSaveClick}
              >
                Salvar
              </button>
            ) : (
              <button
                className="mt-4 bg-orange-600 text-white px-4 py-2 ml-2 rounded-lg hover-bg-orange-600 border-none text-bold hover-scale-105 hover-duration-100"
                onClick={handleEditClick}
              >
                Editar
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
