import planets from './pages/Planets/PlanetsReducer';
import vehicles from './pages/Vehicles/VehiclesReducer';
import species from './pages/Species/SpeciesReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  planets,
  vehicles,
  species
});

export default reducer;