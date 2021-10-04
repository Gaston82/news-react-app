import React, { useState, useEffect } from "react";
import { Header } from "../../components/header/Header";
import { NewsListItem } from "../../components/newsListItem/NewsListItem";
import SearchForm from "../../components/searchForm/SearchForm";
import { fetchEverything } from "../../services/fetchEverything";

import "./search.css";

export const Search = () => {
  const [listNews, setListNews] = useState([]);
  const [result, setResult] = useState(false);
  const [search, setSearch] = useState({
    title: "",
    from: "",
    to: "",
    language: "",
  });

  const { title, from, to, language } = search;

  useEffect(() => {
    const articles = async () => {
      if (result) {
        const article = await fetchEverything(title, from, to, language);
        setListNews(article);
      }
    };
    articles();
  }, [result]);

  if (!search || !listNews) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <SearchForm search={search} setSearch={setSearch} setResult={setResult} />
      <div className="grid-container">
        {listNews.map((news) => (
          <NewsListItem news={news} key={news.title} />
        ))}
      </div>
    </>
  );
};
