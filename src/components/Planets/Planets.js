import React from 'react';
import './Planets.css';
import PlanetInfo from '../PlanetInfo/PlanetInfo';

const Planets = ({ planetDetails }) => {
  const planets = planetDetails.map((planet, index) => {
    return (
      <PlanetInfo
        key={index}
        date={planet.date}
        explanation={planet.explanation}
        title={planet.title}
        image={planet.image}
      />
    )
  })

  return (
    <>
      {planets}
    </>
  )
}

export default Planets;
