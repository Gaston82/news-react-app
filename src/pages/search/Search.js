import React, { useState } from "react";
import { Header } from "../../components/header/Header";
import { NewsListItem } from "../../components/newsListItem/NewsListItem";
import SearchForm from "../../components/searchForm/SearchForm";
import Spinner from "../../components/Spinner/Spinner";
import { fetchEverything } from "../../services/fetchEverything";

import "./search.css";

export const Search = () => {
  const [listNews, setListNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchFields, setSearchFields] = useState({
    title: "",
    from: "",
    to: "",
    language: "",
  });

  const onSearchFieldsChange = (e) => {
    setSearchFields({
      ...searchFields,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchEverything(searchFields)
      .then((res) => {
        setListNews(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Header />
      <SearchForm
        search={searchFields}
        onSearchFieldsChange={onSearchFieldsChange}
        onSubmit={onSubmit}
      />
      {isLoading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <div className="grid-container">
          {listNews.map((news) => (
            <NewsListItem news={news} key={news.title} />
          ))}
        </div>
      )}
    </>
  );
};
