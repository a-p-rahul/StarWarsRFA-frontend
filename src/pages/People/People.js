import React from "react";
import PeopleSeach from "./PeopleSearch";
import PeopleList from "./PeopleList";

import "./People.scss";

const People = () => (
  <main className="people-container">
    <h2>People</h2>
    <PeopleSeach />
    <PeopleList />
  </main>
);

export default People;
