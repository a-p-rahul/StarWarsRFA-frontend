import React from 'react';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import Planets from './pages/Planets';
import Species from './pages/Species';
import Vehicles from './pages/Vehicles';
import People from './pages/People';
import {
  Routes,
  Route,
} from "react-router-dom";
import AppHeader from './components/AppHeader';
import { Container } from '@mui/material';

const App = () => {
  return (
    <div>
      <AppHeader />
      <Container maxWidth="xl" >
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/species" element={<Species />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/people" element={<People />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
