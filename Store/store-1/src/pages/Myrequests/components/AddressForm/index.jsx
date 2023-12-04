import React, { useState } from "react";

export default function AddressForm({ selectedOrder, onSave }) {
  const [editedData, setEditedData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    onSave(editedData);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            name="road"
            value={editedData.road}
            onChange={handleInputChange}
            className="text-bold border-orange-600 outline-orange-600 mt-2"
          />
          <input
            type="text"
            name="neighborhood"
            value={editedData.neighborhood}
            onChange={handleInputChange}
            className="text-bold border-orange-600 outline-orange-600 mt-2"
          />
          <input
            type="text"
            name="housenumber"
            value={editedData.housenumber}
            onChange={handleInputChange}
            className="text-bold border-orange-600 outline-orange-600 mt-2"
          />
          <input
            type="text"
            name="cep"
            value={editedData.cep}
            onChange={handleInputChange}
            className="text-bold border-orange-600 outline-orange-600"
          />
        </div>
      ) : (
        <>
          {editedData.road ? (
            <p className="text-bold">Rua: {editedData.road}</p>
          ) : (
            <p>Endereço indisponível</p>
          )}
          {editedData.neighborhood ? (
            <p className="text-bold">Bairro: {editedData.neighborhood}</p>
          ) : null}
          {editedData.housenumber ? (
            <p className="text-bold">Numero da casa: {editedData.housenumber}</p>
          ) : null}
          {editedData.cep ? <p className="text-bold">CEP: {editedData.cep}</p> : null}
        </>
      )}
      <button
        className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover-bg-orange-600 border-none text-bold hover-scale-105 hover-duration-100"
        onClick={handleSaveClick}
      >
        {isEditing ? "Salvar" : "Editar"}
      </button>
    </div>
  );
}
