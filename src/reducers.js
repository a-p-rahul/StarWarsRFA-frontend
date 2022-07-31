import planets from "./pages/Planets/PlanetsReducer";
import vehicles from "./pages/Vehicles/VehiclesReducer";
import species from "./pages/Species/SpeciesReducer";
import people from "./pages/People/PeopleReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  planets,
  vehicles,
  species,
  people,
});

export default reducer;
