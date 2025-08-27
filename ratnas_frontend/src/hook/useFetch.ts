// hooks/useFetch.ts
import { useEffect, useState } from "react";
import api from "../axios/axios";


export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; // prevents memory leaks if component unmounts

    setLoading(true);

    api.get(url)
      .then(res => {
        if (isMounted) setData(res.data);
      })
      .catch(err => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false; // cleanup
    };
  }, [url]);

  return { data, loading, error };
}
