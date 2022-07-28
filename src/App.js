import React from 'react';
import Welcome from './pages/Welcome';
import Planets from './pages/Planets';
import Species from './pages/Species';
import Vehicles from './pages/Vehicles';
import People from './pages/People';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/species" element={<Species />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  );
};

export default App;
