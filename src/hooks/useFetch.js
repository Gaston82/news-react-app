import { useEffect, useState } from "react";
import { fetchNews } from "../services/fetchNews";

export const useFetch = (countries, category) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const articles = async () => {
      const data = await fetchNews(countries, category);
      setState({
        loading: false,
        error: null,
        data,
      });
    };
    articles();
  }, [countries, category]);

  return state;
};
