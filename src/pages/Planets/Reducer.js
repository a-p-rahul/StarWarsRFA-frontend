import InitialState from "./InitialState";
import { LOADING, INITIATE_LIST } from "./constants";

const Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case INITIATE_LIST:
      return {
        ...state,
        list: action.payload,
        results: action.payload,
      };
    default:
      console.log("default", action);
      return state;
  }
};

export default Reducer;
