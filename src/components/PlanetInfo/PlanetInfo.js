import React from 'react';
import './PlanetInfo.css';

const PlanetInfo = ({ date, media, title, url }) => {
  return (
    <article className='card'>
      <h1>{title}</h1>
      <p>{new Date(date).toDateString()}</p>
      {media === 'video' ? <a href={url} target='_blank' rel='noreferrer'>Click to see video</a> : <img src={url} alt={title} />}
    </article>
  )
}

export default PlanetInfo;
