import React from "react";
import { useSearchNews } from "../../hooks/useSearchNews";

export const Search = () => {
  const [formValues, handleInputChange, reset] = useSearchNews({
    searchText: "",
  });

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        name="searchText"
        onChange={handleInputChange}
        value={searchText}
      ></input>
      <button type="submit">Buscar</button>
    </form>
  );
};
