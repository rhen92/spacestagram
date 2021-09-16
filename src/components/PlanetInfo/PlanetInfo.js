import React from 'react';
import './PlanetInfo.css';

const PlanetInfo = ({ date, explanation, title, image }) => {
  return (
    <article className='card'>
      <h1>{title}</h1>
      <p>{new Date(date).toDateString()}</p>
      <img src={image} alt={title} />
      <p>{explanation}</p>
    </article>
  )
}

export default PlanetInfo;
