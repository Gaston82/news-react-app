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
        <a className="card__link" href={detail} target="blank">
          Ver más...
        </a>
      </div>
    </>
  );
};
/* <div className="card-article__content">
        <h2 className="card-article__title"> {title}</h2>
        <p className="card-article__desc">{description}...</p>
      </div>
      <a className="card-article__link" href={detail} target="blank">
        Ver más...
      </a> 
      {url ? (
        <Link to={`./detail/${receivedArticleName}`}>
          <img className="card__img" src={url} alt=""></img>
        </Link>
      ) : (
        <img
          className="card-article__img"
          src="https://www.sogarca.com/wp-content/uploads/2015/06/No-disponible.jpg"
          alt=""
        ></img>
      )}
      
      
      */
