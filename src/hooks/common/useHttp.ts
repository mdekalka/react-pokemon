import { useEffect, useState } from 'react';
import { httpRequest } from '../../workflows/httpWorkflow';

export const useHttp = (path: string, options?: RequestInit) => {
  const [ data, setData ] = useState(null);
  const [ fetching, setFetching ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    setFetching(true);

    const getHttpRequestData = async () => {
      const response = await httpRequest(path, options);

      setFetching(false);

      if (response?.error) {
        setError(response.error);
        
        return;
      }

      setData(response?.data);
    }

    getHttpRequestData();
  }, []);

  return { data, fetching, error };
}