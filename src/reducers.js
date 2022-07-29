import planets from './pages/Planets/Reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  planets,
});

export default reducer;