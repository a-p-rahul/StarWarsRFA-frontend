import React from "react";
import VehiclesSearch from './VehiclesSearch';
import VehiclesList from "./VehiclesList";

const Vehicles = () => (
  <main style={{ padding: "1rem 0" }}>
    <h2>Vehicles</h2>
    <VehiclesSearch/>
    <VehiclesList/>
  </main>
);

export default Vehicles;