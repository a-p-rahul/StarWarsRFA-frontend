import { ACTIONS } from './SpeciesConstants.js';
import axios from "axios";

const isLoading = (isLoading = false) => {
  return {
    type: ACTIONS.LOADING,
    payload: isLoading,
  };
}

const initiateTableList = (list = []) => {
  return {
    type: ACTIONS.INITIATE_LIST,
    payload: list,
  };
}

const searchTable = (searchString) => {
  return {
    type: ACTIONS.SEARCH_LIST,
    payload: searchString,
  };
};

const initializeTable = () => {
  return dispatch => {
    dispatch(isLoading(true));
    axios.get("/species")
      .then(response => {
        return response;
      })
      .then(response => response.data)
      .then(json => {
        dispatch(initiateTableList(json));
        dispatch(isLoading(false));
      });
  };
}

export {
  isLoading,
  searchTable,
  initializeTable,
};