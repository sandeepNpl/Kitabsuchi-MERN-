import React from "react";
import BookImage from "./../../assets/images/logo.png";
import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={BookImage} width="60%"className="image"/>
        <div className="book_desc">
          <h3>{props.item.bookName}</h3>
          <p>{props.item.author}</p>
          <p className="price">{props.item.price}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
