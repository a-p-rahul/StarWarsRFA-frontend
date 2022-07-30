import React from "react";
import SpeciesSearch from './SpeciesSearch';
import SpeciesList from "./SpeciesList";

const Species = () => (
  <main style={{ padding: "1rem 0" }}>
    <h2>Species</h2>
    <SpeciesSearch/>
    <SpeciesList/>
  </main>
);

export default Species;