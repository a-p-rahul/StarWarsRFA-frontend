import React from "react";
import PeopleSeach from './PeopleSearch';
import PeopleList from "./PeopleList";

const People = () => (
  <main style={{ padding: "1rem 0" }}>
    <h2>People</h2>
    <PeopleSeach/>
    <PeopleList/>
  </main>
);

export default People;