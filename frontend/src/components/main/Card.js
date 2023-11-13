import React from 'react';
import "./css/Card.css"

const Card = ({ imageSrc, title, price, description }) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        src={imageSrc}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <div className="row align-items-start">
          <div className="col r1 text-primary ">
            <p>{title}</p>
          </div>
          <div className="col r1 text-primary ">
            <p>{price}</p>
          </div>
        </div>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;