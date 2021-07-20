import React from 'react';
import './Card.css';

const Card = ({ name, img }) => (
  <div className="card">
    <div className="food-image">
      <img src={img} alt={name}/>
    </div>
    <div className="food-title">{name}</div>
  </div>
);

export default Card;