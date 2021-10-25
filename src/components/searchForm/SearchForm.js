import React from "react";
import "./SearchForm.css";

const SearchForm = ({ search, onSearchFieldsChange, onSubmit }) => {
  const { title, from, to, language } = search;

  return (
    <form onSubmit={onSubmit} className="form-container">
      <div className="form-field">
        <label className="form-label">Title or content:</label>
        <input
          className="form-input"
          type="text"
          name="title"
          onChange={onSearchFieldsChange}
          value={title}
          required
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="from">
          From:
        </label>
        <input
          className="form-input"
          type="date"
          name="from"
          value={from}
          onChange={onSearchFieldsChange}
          required
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="to">
          To:
        </label>
        <input
          className="form-input"
          type="date"
          name="to"
          value={to}
          onChange={onSearchFieldsChange}
          required
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="to">
          Language:
        </label>
        <select
          onChange={onSearchFieldsChange}
          name="language"
          className="form-input"
        >
          <option htmlFor={language}>Choose one...</option>
          <option value="es">SPANISH</option>
          <option value="en">ENGLISH</option>
          <option value="fr">FRENCH</option>
        </select>
      </div>
      <button type="submit" className="form-button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
