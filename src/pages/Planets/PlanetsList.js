import React, { useEffect } from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {TABLE_HEADERS, TABLE_COLUMN_ARRANGEMENT} from './constants';
import SimpleTable from 'src/components/SimpleTable';
import { Box, LinearProgress } from "@mui/material";
import { initializeTable } from "./actions";

const PlanetsList = ({ results, title, loading, initialise }) => {

  useEffect(() => {
    (async () => {
      initialise();
    })();
  }, []);
  
  return (
    <>
      { loading && (
        <Box className="progressBar" sx={{ position: 'absolute', top: '0', width: '100%' }}>
          <LinearProgress />
        </Box>)
      }
        <SimpleTable
          header={TABLE_HEADERS} 
          arrangement={TABLE_COLUMN_ARRANGEMENT}
          contents={results}
        />
    </>
  );
};

const mapStateToProps = state => {
  return {
    results: state.planets && state.planets.results || [],
    title: state.planets && state.planets.title || "",
    loading: state.planets && state.planets.loading || false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialise: () => {
      dispatch(initializeTable());
    }
  };
};

PlanetsList.propTypes = {
  results: PropTypes.array,
  title: PropTypes.string,
  loading: PropTypes.bool,
  isWorking: PropTypes.func,
  initialise: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsList);
