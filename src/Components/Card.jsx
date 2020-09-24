import React from "react";
import "../styles/Card.css";

const Card = (props) => {
  const {
    card: { img, title, subTitle }
  } = props;
  return (
    <div className="Card">
      <img src={img} alt={title} />
      <p>{title}</p>
      <p>{subTitle}</p>
    </div>
  );
};

export default Card;
