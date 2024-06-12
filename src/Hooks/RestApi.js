import { useState } from 'react';
import { Slide, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { api } from '../API/constant';
export const UseApiRequest = (endpoint, method, body = null, token = null) => {
  const [t] = useTranslation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const callApi = async () => {
    try {
      setLoading(true);
      const response = await api({
        method,
        url: endpoint,
        data: body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, callApi };
};
