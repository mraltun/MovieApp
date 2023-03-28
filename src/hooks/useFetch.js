import { useEffect, useState } from "react";

const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `${apiUrl}${apiPath}${apiKey}`;

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    };
    fetchMovies();
  }, [url]);

  return { data };
};

export default useFetch;
