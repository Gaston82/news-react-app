import React from "react";
import { Header } from "../../components/header/Header";
import { NewsList } from "../../components/newsList/NewsList";

export const Home = () => {
  return (
    <>
      <Header />
      <NewsList />
    </>
  );
};
