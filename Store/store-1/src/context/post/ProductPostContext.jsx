import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const ApiPostContext = createContext();

export const useApiPost = () => {
  return useContext(ApiPostContext);
};

export const ApiPostProvider = ({ children }) => {
  const [postResponse, setPostResponse] = useState({});

  const api = axios.create({
    baseURL: 'http://localhost:8080',
  });

  const postData = async (url, requestBody) => {
    try {
      const response = await api.post(url, requestBody);
      setPostResponse(response.data);
    } catch (error) {
      console.error('Ocorreu um erro ao fazer a postagem:', error);
    }
  };

  return (
    <ApiPostContext.Provider value={{ postData, postResponse }}>
      {children}
    </ApiPostContext.Provider>
  );
};
