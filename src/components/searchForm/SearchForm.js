import React from "react";

const SearchForm = ({ search, setSearch, setResult }) => {
  const { title, from, to, language } = search;

  const handleInputChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setResult(true);
  };

  return (
    <div className="form-container">
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
          <label htmlFor="from">From</label>
          <input
            type="date"
            name="from"
            value={from}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label htmlFor="to">to</label>
          <input
            type="date"
            name="to"
            value={to}
            onChange={handleInputChange}
          ></input>
        </div>

        <select onChange={handleInputChange}>
          <option htmlFor={language}>Language</option>
          <option value="ar">SPANISH</option>
          <option value="de">ENGLISH</option>
          <option value="fr">FRENCH</option>
        </select>
        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
};

export default SearchForm;
