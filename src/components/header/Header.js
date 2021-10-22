import React from "react";
import { Form } from "../form/Form";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import "./Header.css";

export const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="logo">NEWS React App</h1>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <ul>
            <li>
              <Link to={ROUTES.SCIENCE}>SCIENCE</Link>
            </li>
            <li>
              <Link to={ROUTES.SPORTS}>SPORTS</Link>
            </li>
            <li>
              <Link to={ROUTES.SEARCH}>SEARCH</Link>
            </li>
            <li>
              <Link to={ROUTES.ENTERTAINMENT}>ENTERTAINMENT</Link>
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
