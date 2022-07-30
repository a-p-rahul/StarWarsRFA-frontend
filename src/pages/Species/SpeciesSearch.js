import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Box, TextField } from '@mui/material';
import { searchTable } from "./SpeciesActions";

import './SpeciesSearch.scss';

const SpeciesSearch = ({search}) => {
  return (
    <Box className="species-search-wrapper">
      <TextField
        id="species-search"
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
    }
  };
};

SpeciesSearch.propTypes = {
  search: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SpeciesSearch);
