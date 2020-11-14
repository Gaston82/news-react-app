import React from "react";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { title } = useParams();
  //const receivedArticleName = encodeURIComponent(title);

  return (
    <>
      <h3>{title.substring(0, 40).trim()}</h3>
    </>
  );
};
