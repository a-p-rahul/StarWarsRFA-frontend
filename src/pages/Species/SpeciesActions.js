import { ACTIONS } from "./SpeciesConstants.js";
import axios from "axios";
import { populateSubjectsHomeWorld } from "src/pages/Planets/PlanetsActions.js";

const isLoading = (isLoading = false) => {
  return {
    type: ACTIONS.LOADING,
    payload: isLoading,
  };
};

const initiateTableList = (list = []) => {
  return {
    type: ACTIONS.INITIATE_LIST,
    payload: list,
  };
};

const searchTable = (searchString) => {
  return {
    type: ACTIONS.SEARCH_LIST,
    payload: searchString,
  };
};

const initializeTable = () => {
  return (dispatch) => {
    dispatch(isLoading(true));
    axios
      .get("/species")
      .then((response) => response.data)
      .then((json) =>
        Promise.all(json.map((species) => populateSubjectsHomeWorld(species)))
      )
      .then((json) => {
        dispatch(initiateTableList(json));
      })
      .finally(() => {
        dispatch(isLoading(false));
      });
  };
};

export { isLoading, searchTable, initializeTable };
