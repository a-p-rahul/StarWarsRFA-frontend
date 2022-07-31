import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { PROPERTY_DISPLAY_STRINGS, TABLE_COLUMN_ARRANGEMENT } from "./PeopleConstants";
import SimpleTable from "src/components/SimpleTable";
import { Box, LinearProgress } from "@mui/material";
import { initializeTable } from "./PeopleActions";
import getSearchResultSelector from "src/selectors/SearchResultSelector";

import "./PeopleList.scss";
import PeopleDialog from "./PeopleDialog";

const PeopleList = ({ initialise }) => {
  const loading = useSelector((state) => state.planets.loading);
  const results = useSelector(getSearchResultSelector("people"));
  const [openDialog, isOpenDialog] = useState(false);
  const [dialogProperty, setDialogProperty] = useState(null);
  const [dialogData, setDialogData] = useState(null);
  useEffect(() => {
    initialise();
  }, []);
  return (
    <>
      {loading && (
        <Box className="people-progressbar">
          <LinearProgress />
        </Box>
      )}
      <SimpleTable
        isLoading={loading}
        header={PROPERTY_DISPLAY_STRINGS}
        arrangement={TABLE_COLUMN_ARRANGEMENT}
        contents={results}
        onDialogOpen={(data, property) => {
          setDialogData(data);
          setDialogProperty(property);
          isOpenDialog(true);
        }}
      />
      <PeopleDialog
        open={openDialog}
        property={dialogProperty}
        data={dialogData}
        onClose={() => {
          isOpenDialog(false);
          setDialogData(null);
          setDialogProperty(null);
        }}
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

PeopleList.propTypes = {
  initialise: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PeopleList);
