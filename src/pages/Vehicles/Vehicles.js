import React from "react";
import VehiclesSearch from './VehiclesSearch';
import VehiclesList from "./VehiclesList";

import './Vehicles.scss';

const Vehicles = () => (
  <main className="vehicles-container">
    <h2>Vehicles</h2>
    <VehiclesSearch/>
    <VehiclesList/>
  </main>
);

export default Vehicles;