import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Box, TextField } from "@mui/material";
import { searchTable } from "./PeopleActions";

import "./PeopleSearch.scss";

const PeopleSearch = ({ search }) => {
  return (
    <Box className="people-search-wrapper">
      <TextField
        id="filled-search"
        label="Search by name"
        type="search"
        variant="filled"
        onChange={(e) => search(e.target.value)}
      />
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (searchString) => {
      dispatch(searchTable(searchString));
    },
  };
};

PeopleSearch.propTypes = {
  search: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PeopleSearch);
