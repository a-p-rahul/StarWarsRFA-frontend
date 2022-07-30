import { ACTIONS, INITIAL_STATE } from "./VehiclesConstants";

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ACTIONS.SEARCH_LIST:
      return {
        ...state,
        searchString: action.payload,
      };
    case ACTIONS.INITIATE_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
