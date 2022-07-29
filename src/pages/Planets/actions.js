import { LOADING, INITIATE_LIST, SEARCH_LIST } from './constants.js';
import axios from "axios";

const isLoading = (isLoading = false) => {
  return {
    type: LOADING,
    payload: isLoading,
  };
}

const initiateTableList = (list = []) => {
  return {
    type: INITIATE_LIST,
    payload: list,
  };
}

const searchTable = (searchString) => {
  return {
    type: SEARCH_LIST,
    payload: searchString,
  };
};

const initializeTable = () => {
  return dispatch => {
    dispatch(isLoading(true));
    axios.get("http://localhost:3001/planets")
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