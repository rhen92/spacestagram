import React from 'react';
import './Planets.css';
import PlanetInfo from '../PlanetInfo/PlanetInfo';

const Planets = ({ planetDetails }) => {
  const planets = planetDetails.map((planet, index) => {
    return (
      <PlanetInfo
        key={index}
        date={planet.date}
        media={planet.media}
        title={planet.title}
        image={planet.image}
      />
    )
  })

  return (
    <div className='planets-container'>
      {planets}
    </div>
  )
}

export default Planets;
