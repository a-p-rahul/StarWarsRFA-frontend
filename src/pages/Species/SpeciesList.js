import React, { useEffect } from "react";
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TABLE_HEADERS, TABLE_COLUMN_ARRANGEMENT } from './SpeciesConstants';
import SimpleTable from 'src/components/SimpleTable';
import { Box, LinearProgress } from "@mui/material";
import { initializeTable } from "./SpeciesActions";
import getSearchResultSelector from 'src/selectors/SearchResultSelector';

const PlanetsList = ({ initialise }) => {
  const loading = useSelector((state) => state.planets.loading );
  const results = useSelector(getSearchResultSelector("species"));
  useEffect(() => {
    initialise();
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

const mapDispatchToProps = (dispatch) => {
  return {
    initialise: () => {
      dispatch(initializeTable());
    }
  };
};

PlanetsList.propTypes = {
  initialise: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PlanetsList);
