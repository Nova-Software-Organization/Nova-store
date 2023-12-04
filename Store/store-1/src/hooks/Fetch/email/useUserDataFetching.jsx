import axios from "axios";
import { useEffect, useState } from "react";

const useUserDataFetching = (email) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/v1/conta/pedidos', {
          params: {
            email,
          },
        });

        const { data } = response;

        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar os pedidos: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [email]);

  return { data, loading };
};

export default useUserDataFetching;
