import React from "react";
import { Header } from "../../components/header/Header";

export const Busquedas = () => {
  return (
    <>
      <Header />
      <h1>Esta es la página de búsquedas</h1>
      <form>
        <label>Titulo o contenido</label>
        <input type="text"></input>
        <label>Desde</label>
        <input type="date"></input>
        <label>Hasta</label>
        <input type="date"></input>
        <label>Ordenar por...</label>
        <select>
          <option>relevancia</option>
          <option>popularidad</option>
        </select>
        <label>Idioma</label>
        <select>
          <option>español</option>
          <option>portugues</option>
          <option>ingles</option>
        </select>
      </form>
    </>
  );
};
