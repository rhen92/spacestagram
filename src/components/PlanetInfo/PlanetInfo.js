import React from 'react';
import './PlanetInfo.css';

const PlanetInfo = ({ date, explanation, title, image}) => {
  return (
    <article>
      <h1>{title}</h1>
      <p>{date}</p>
      <img src={image} alt={title} />
      <p>{explanation}</p>
    </article>
  )
}

export default PlanetInfo;
