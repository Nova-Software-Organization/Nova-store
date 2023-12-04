import axios from 'axios';
import React, { useState } from 'react';
import { Field } from "../..";

export default function AddressInformation({ control, errors, isSubmitting }) {
  const [addressData, setAddressData] = useState({});

  const handleCEPChange = async (e) => {
    const cep = e.target.value;
    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setAddressData(response.data);
      } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
      }
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-center text-orange-600">Endereço</h2>
      <Field
        label="Rua"
        name="CustomerAddressDTO.road"
        placeholder="Nome da Rua"
        text="text"
        control={control}
        error={errors['CustomerAddressDTO.road']}
        value={addressData.logradouro || ''}
        isSubmitting={isSubmitting}
      />
      <Field
        label="Bairro"
        name="CustomerAddressDTO.neighborhood"
        placeholder="Nome do Bairro"
        text="text"
        control={control}
        error={errors['CustomerAddressDTO.neighborhood']}
        value={addressData.bairro || ''}
        isSubmitting={isSubmitting}
      />
      <Field
        label="Número da Casa"
        name="CustomerAddressDTO.housenumber"
        placeholder="Número da Casa"
        text="text"
        control={control}
        error={errors['CustomerAddressDTO.housenumber']}
        defaultValue=""
        isSubmitting={isSubmitting}
      />
      <Field
        label="Estado"
        name="CustomerAddressDTO.state"
        placeholder="Nome do Estado"
        text="text"
        control={control}
        error={errors['CustomerAddressDTO.state']}
        value={addressData.uf || ''}
        isSubmitting={isSubmitting}
      />
      <Field
        label="CEP"
        name="CustomerAddressDTO.cep"
        placeholder="CEP"
        text="text"
        control={control}
        error={errors['CustomerAddressDTO.cep']}
        onChange={handleCEPChange}
        isSubmitting={isSubmitting}
      />
    </>
  );
}
