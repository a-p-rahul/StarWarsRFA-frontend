import React from "react";
import SpeciesSearch from "./SpeciesSearch";
import SpeciesList from "./SpeciesList";

import "./Species.scss";

const Species = () => (
  <main className="species-container">
    <h2>Species</h2>
    <SpeciesSearch />
    <SpeciesList />
  </main>
);

export default Species;
