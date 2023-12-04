import axios from 'axios';
import axiosCacheAdapter from 'axios-cache-adapter';
import { useEffect, useState } from 'react';

const cache = axiosCacheAdapter.setupCache({
  maxAge: 15 * 60 * 1000,
});

const api = axios.create({
  adapter: cache.adapter,
});

export default function useFetch(url) {
  const [data, setData] = useState({});

  useEffect(() => {
    api.get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao buscar os dados:', error);
      });
  }, [url]);

  return { data };
}
