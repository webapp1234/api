import React from "react";
import "./Card.css";

const Card = ({ id, name, price }) => {
  return (
    <table>
      <div className="main">
        <h1>{id}</h1>
        <h1>{name}</h1>
        <h1>{price}</h1>
      </div>
    </table>
  );
};

export default Card;
