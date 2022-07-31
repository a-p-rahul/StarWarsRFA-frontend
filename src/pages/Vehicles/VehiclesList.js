import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { PROPERTY_DISPLAY_STRINGS, TABLE_COLUMN_ARRANGEMENT } from "./VehiclesConstants";
import SimpleTable from "src/components/SimpleTable";
import { Box, LinearProgress } from "@mui/material";
import { initializeTable } from "./VehiclesActions";
import getSearchResultSelector from "src/selectors/SearchResultSelector";

import "./VehiclesList.scss";

const VehiclesList = ({ initialise }) => {
  const loading = useSelector((state) => state.planets.loading);
  const results = useSelector(getSearchResultSelector("vehicles"));
  useEffect(() => {
    initialise();
  }, []);
  return (
    <>
      {loading && (
        <Box className="vehicles-progressbar">
          <LinearProgress />
        </Box>
      )}
      <SimpleTable
        isLoading={loading}
        header={PROPERTY_DISPLAY_STRINGS}
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
    },
  };
};

VehiclesList.propTypes = {
  initialise: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(VehiclesList);
