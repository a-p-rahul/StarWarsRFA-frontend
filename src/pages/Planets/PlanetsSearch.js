import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Box, TextField } from "@mui/material";
import { searchTable } from "./PlanetsActions";

import "./PlanetsSearch.scss";

const PlanetsSearch = ({ search }) => {
  return (
    <Box className="planets-search-wrapper">
      <TextField
        id="planets-search"
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

PlanetsSearch.propTypes = {
  search: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PlanetsSearch);
