import React, { useState } from "react";
import { Header } from "../../components/header/Header";

export const Busquedas = () => {
  const [search, setsearch] = useState({
    title: "",
    from: "",
    to: "",
  });
  const handleInputChange = (e) => {
    setsearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { title, from, to } = search;

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title or content</label>
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            value={title}
          ></input>
        </div>
        <div>
          <label>From</label>
          <input
            type="date"
            name="from"
            value={from}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label>to</label>
          <input
            type="date"
            name="to"
            value={to}
            onChange={handleInputChange}
          ></input>
        </div>

        <label>Sort by...</label>
        <select>
          <option>relevancia</option>
          <option>popularidad</option>
        </select>
        <label>Language</label>
        <select>
          <option>spanish</option>
          <option>portugues</option>
          <option>english</option>
        </select>
      </form>
    </>
  );
};
