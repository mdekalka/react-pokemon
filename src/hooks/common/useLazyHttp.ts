import { useEffect, useState, useCallback } from 'react';
import { httpRequest } from '../../workflows/httpWorkflow';

export const useLazyHttp = () => {
  const [ data, setData ] = useState(null);
  const [ fetching, setFetching ] = useState(false);
  const [ error, setError ] = useState(null);

  const getHttpRequestData = useCallback(async (path: string, options?: RequestInit) => {
    const response = await httpRequest(path, options);

    setFetching(false);

    if (response?.error) {
      setError(response.error);
      
      return;
    }

    setData(response?.data);
  }, [])

  return [ getHttpRequestData, { data, fetching, error }];
}
