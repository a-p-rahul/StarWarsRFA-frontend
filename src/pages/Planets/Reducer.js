import InitialState from "./InitialState";
import { LOADING, INITIATE_LIST, SEARCH_LIST } from "./constants";

const Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SEARCH_LIST:
      return {
        ...state,
        searchString: action.payload,
      };
    case INITIATE_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
