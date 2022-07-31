import React from "react";
import PlanetsSearch from "./PlanetsSearch";
import PlanetsList from "./PlanetsList";

import "./Planets.scss";

const Planets = () => (
  <main className="planets-container">
    <h2>Planets</h2>
    <PlanetsSearch />
    <PlanetsList />
  </main>
);

export default Planets;
