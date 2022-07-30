import planets from './pages/Planets/PlanetsReducer';
import vehicles from './pages/Vehicles/VehiclesReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  planets,
  vehicles,
});

export default reducer;