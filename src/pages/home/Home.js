import React from "react";
import { Header } from "../../components/header/Header";
import { NewsList } from "../../components/newsList/NewsList";
import { Footer } from "../../components/footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <NewsList />
      <Footer />
    </>
  );
};
