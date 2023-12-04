import axios from 'axios';
import { useState } from 'react';

export const useApiPost = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const postData = async (url, requestData) => {
    try {
      setLoading(true);
      const response = await axios.post(url, requestData);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { loading, data, error, postData };
};
