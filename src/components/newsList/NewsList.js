import React, { useEffect, useState, useContext } from "react";
import "./NewsList.css";
import { fetchNews } from "../../services/fetchNews";
import { NewsListItem } from "../newsListItem/NewsListItem";
import { CountryContext } from "../../context/CountryContext";

export const NewsList = () => {
  const [listNews, setlistNews] = useState();
  const category = "";
  const { countries } = useContext(CountryContext);

  useEffect(() => {
    const articles = async () => {
      const article = await fetchNews(countries, category);
      setlistNews(article);
    };
    articles();
  }, [countries]);

  if (!listNews) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <div className="grid-container">
        {listNews.map((news) => (
          <NewsListItem news={news} key={news.title} />
        ))}
      </div>
    </>
  );
};
