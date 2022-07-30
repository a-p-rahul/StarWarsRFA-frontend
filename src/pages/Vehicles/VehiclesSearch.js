import React from 'react';
import { PropTypes } from 'prop-types';
import {connect} from 'react-redux';
import { Box, TextField } from '@mui/material';
import { searchTable } from "./VehiclesActions";

const VehiclesSearch = ({search}) => {
  return (
    <Box>
      <TextField
        id="filled-search"
        label="Search"
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
    }
  };
};

VehiclesSearch.propTypes = {
  search: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(VehiclesSearch);
