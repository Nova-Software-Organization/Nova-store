import axios from 'axios';
import AxiosCacheAdapter from 'axios-cache-adapter';

// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cache = AxiosCacheAdapter.setupCache({
    maxAge: 15 * 60 * 1000,
  });

  const api = axios.create({
    baseURL: 'http://localhost:8080',
    // baseURL:https://unable-insect-production.up.railway.app/
    adapter: cache.adapter,
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api.get('v1/produto/limitado');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data.length === 0) {
      fetchData();
    }
  }, [ data ]);
  
  return (
    <ProductContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useApiGetLimit = () => {
  const context = useContext(ProductContext);
  
  if (!context) {
    throw new Error('useApi deve ser usado dentro de um ProductProvider');
  }

  return context;
};
