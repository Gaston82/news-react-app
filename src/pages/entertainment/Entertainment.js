import React, { useContext } from "react";
import { Header } from "../../components/header/Header";
import { NewsListItem } from "../../components/newsListItem/NewsListItem";
import { CountryContext } from "../../context/CountryContext";
import { useFetch } from "../../hooks/useFetch";
import "../../components/newsList/NewsList.css";

export const Entertainment = () => {
  const category = "entertainment";
  const { countries } = useContext(CountryContext);
  const { loading, data } = useFetch(countries, category);

  if (!data) {
    return <p>{loading}..</p>;
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
