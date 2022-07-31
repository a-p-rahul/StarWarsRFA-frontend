import { ACTIONS } from "./PlanetsConstants.js";
import axios from "axios";

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

const populateSubjectsHomeWorld = async (subject) => {
  const homeworld = await axios.get(subject.homeworld);
  try {
    subject.homeworld_name_data = homeworld.data;
    subject.homeworld_name = homeworld.data.name ? homeworld.data.name : "n/a";
  } catch (e) {
    subject.homeworld_name_data = null;
    subject.homeworld_name = "n/a";
  }
  return subject;
};

const initializeTable = () => {
  return (dispatch) => {
    dispatch(isLoading(true));
    axios
      .get("/planets")
      .then((response) => response.data)
      .then((json) => {
        dispatch(initiateTableList(json));
      })
      .finally(() => {
        dispatch(isLoading(false));
      });
  };
};

export { isLoading, searchTable, initializeTable, populateSubjectsHomeWorld };
