/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer, useRef } from 'react';

interface State<T> {
  data?: T;
  error?: Error;
}

type Cache<T> = { [url: string]: T };

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error };

function useFetch<T = unknown>(url?: string, options?: RequestInit): State<T> {
  const cache = useRef<Cache<T>>({});
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState };
      case 'fetched':
        return { ...state, data: action.payload };
      case 'error':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: 'loading' });
      if (cache.current[url]) {
        dispatch({ type: 'fetched', payload: cache.current[url] });
        return;
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        cache.current[url] = data;
        if (cancelRequest.current) return;
        dispatch({ type: 'fetched', payload: data });
      } catch (error) {
        if (cancelRequest.current) return;
        dispatch({ type: 'error', payload: error as Error });
      }
    };
    fetchData();

    // eslint-disable-next-line consistent-return
    return () => {
      cancelRequest.current = true;
    };
  }, [url]);

  return state;
}

export default useFetch;
