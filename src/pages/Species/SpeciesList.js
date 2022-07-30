import React, { useEffect } from "react";
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TABLE_HEADERS, TABLE_COLUMN_ARRANGEMENT } from './SpeciesConstants';
import SimpleTable from 'src/components/SimpleTable';
import { Box, LinearProgress } from "@mui/material";
import { initializeTable } from "./SpeciesActions";
import getSearchResultSelector from 'src/selectors/SearchResultSelector';

import './SpeciesList.scss';

const SpeciesList = ({ initialise }) => {
  const loading = useSelector((state) => state.planets.loading );
  const results = useSelector(getSearchResultSelector("species"));
  useEffect(() => {
    initialise();
  }, []);
  return (
    <>
      { loading && (
        <Box className='species-progressbar'>
          <LinearProgress />
        </Box>)
      }
        <SimpleTable
          isLoading={loading}
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

SpeciesList.propTypes = {
  initialise: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SpeciesList);
