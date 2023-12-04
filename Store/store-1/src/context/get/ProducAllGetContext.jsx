import axios from 'axios';
import AxiosCacheAdapter from 'axios-cache-adapter';

import React, { createContext, useContext, useEffect, useState } from 'react';

const ProductAllContext = createContext();

export const ProductProviderAll = ({ children }) => {
  const [data, setProducts] = useState([]);
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

  const fetchDataAll = async () => {
    try {
      setLoading(true);
      const response = await api.get('/v1/produto/todos');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data.length === 0) {
      fetchDataAll();
    }
  }, [data]);

  return (
    <ProductAllContext.Provider value={{ data, loading, error, fetchDataAll }}>
      {children}
    </ProductAllContext.Provider>
  );
};

export const useApiGetAll = () => {
  const context = useContext(ProductAllContext);

  if (!context) {
    throw new Error('useApiGet deve ser usado dentro de um ProductProviderAll');
  }
  
  return context;
};
