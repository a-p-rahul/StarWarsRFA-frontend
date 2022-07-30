import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Box, TextField } from '@mui/material';
import { searchTable } from "./SpeciesActions";

const SpeciesSearch = ({search}) => {
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

SpeciesSearch.propTypes = {
  search: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SpeciesSearch);
