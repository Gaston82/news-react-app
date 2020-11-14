import React, { useContext } from "react";
import { CountryContext } from "../../context/CountryContext";

export const Form = () => {
  const { countries, setCountries } = useContext(CountryContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    return countries;
  };

  const handleSelectChange = (e) => {
    setCountries(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={handleSelectChange}>
        <option>Elige país</option>
        <option value="au">AUSTRALIA</option>
        <option value="ar">ARGENTINA</option>
        <option value="us">U.S.A</option>
        <option value="br">BRASIL</option>
      </select>
    </form>
  );
};
