import React from "react";
import "./NewsListItem.css";
import { Link } from "react-router-dom";

export const NewsListItem = ({ news }) => {
  const { url, title, description, detail } = news;
  const receivedArticleName = encodeURIComponent(title);

  return (
    <>
      <div className="card">
        <div className="card__body">
          {url ? (
            <Link to={`./detail/${receivedArticleName}`}>
              <img className="card__image" src={url} alt=""></img>
            </Link>
          ) : (
            <img
              className="card__image"
              src="https://www.sogarca.com/wp-content/uploads/2015/06/No-disponible.jpg"
              alt=""
            ></img>
          )}
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
        </div>
        <Link className="card__link" to={detail} target="blank">
          View more...
        </Link>
      </div>
    </>
  );
};
