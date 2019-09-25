import { useEffect, useState } from 'react';

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setResult(json))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return result;
}