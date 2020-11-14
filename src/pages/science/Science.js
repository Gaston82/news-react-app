import React, { useContext } from "react";
import "./Science.css";
import { NewsListItem } from "../../components/newsListItem/NewsListItem";
import { CountryContext } from "../../context/CountryContext";
import { useFetch } from "../../hooks/useFetch";
import { Header } from "../../components/header/Header";

export const Science = () => {
  const category = "science";
  const { countries } = useContext(CountryContext);
  const { data, loading } = useFetch(countries, category);

  if (!data) {
    return <p>{loading}...</p>;
  }
  return (
    <>
      <Header />
      <>
        <div className="grid-container">
          {data.map((news) => (
            <NewsListItem news={news} key={news.title} />
          ))}
        </div>
      </>
    </>
  );
};
