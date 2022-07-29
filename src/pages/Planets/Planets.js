import React from "react";
import PlanetsSearch from './PlanetsSearch';
import PlanetsList from "./PlanetsList";

const Planets = (props) => {
  return (
    <>
      <main style={{ padding: "1rem 0" }}>
        <h2>Planets</h2>
        <PlanetsSearch/>
        <PlanetsList />
      </main>
    </>
  );
};

export default Planets;