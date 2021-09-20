import React from 'react';
import './PlanetInfo.css';

const PlanetInfo = ({ date, media, title, image }) => {
  return (
    <article className='card'>
      <h1>{title}</h1>
      <p>{new Date(date).toDateString()}</p>
      {media === 'video' ? <a href={media} target='_blank' rel='noreferrer'>CLick to see video</a> : <img src={image} alt={title} />}
    </article>
  )
}

export default PlanetInfo;
