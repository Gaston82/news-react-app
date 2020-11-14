import React, { useContext } from "react";
import { Form } from "../form/Form";
import { Search } from "../search/Search";
import { Link } from "react-router-dom";
import { CountryContext } from "../../context/CountryContext";

import "./Header.css";

export const Header = () => {
  const { countries } = useContext(CountryContext);

  let result = "";
  if (countries === "au") {
    result = "Australia";
  } else if (countries === "ar") {
    result = "Argentina";
  } else if (countries === "us") {
    result = "Estados Unidos";
  } else if (countries === "br") {
    result = "Brasil";
  } else {
    result = "Mexico";
  }

  return (
    <>
      <header className="header">
        <h1 className="logo">News React App</h1>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <ul>
            <li>
              <Link to="science">SCIENCE</Link>
            </li>
            <li>
              <Link to="sports">SPORTS</Link>
            </li>
            <li>
              <Link to="busquedas">BÚSQUEDAS</Link>
            </li>
            <li>
              <Link to="entertainment">ENTERTAINMENT</Link>
            </li>
            <li>
              <Form></Form>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </header>
    </>
  );
};
/*
 <li className="nav-list__item">
              <button className="header__btn">INGRESAR</button>
            </li>


  
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-list__item">
              <Link className="nav-list__link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className="nav-list__link" to="sports">
                SPORTS
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className="nav-list__link" to="Science">
                SCIENCE
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className="nav-list__link" to="Entertainment">
                ENTERTAINMENT
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className="nav-list__link" to="Busquedas">
                BÚSQUEDAS
              </Link>
            </li>
            <li className="nav-list__item">
              <Form />
            </li>
          </ul>
        </nav>
        <div className="header__logo">
          <img
            className="header__logo-img"
            src="https://www.pagina12.com.ar/assets/media/logos/logo_pagina_12_n.svg?v=1.0.234"
            alt=""
          />
        </div>
        <h1 className="header__title">{result}</h1>




*/
