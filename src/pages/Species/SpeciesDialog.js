import React from "react";
import PropTypes from "prop-types";
import FullPageDialog from "src/components/FullPageDialog";
import { ViewPlanetDialogContent } from "src/pages/Planets";
import { PROPERTY_DISPLAY_STRINGS } from "./SpeciesConstants";

const SpeciesDialog = ({ open, onClose, data, property }) => {
  // I avoid methods like below, but keeping it simple this time.
  const renderDialogContent = (param) => {
    switch (param) {
      case "homeworld_name":
        return <ViewPlanetDialogContent data={data[`homeworld_name_data`]} />;
      default:
        return undefined;
    }
  };
  return (
    <FullPageDialog
      open={open}
      title={
        (data &&
          `Species: ${data.name} | ${PROPERTY_DISPLAY_STRINGS[property]}`) ||
        ""
      }
      onClose={onClose}
    >
      {renderDialogContent(property)}
    </FullPageDialog>
  );
};

SpeciesDialog.defaultProps = {
  open: false,
  onclose: () => {},
  data: {},
  property: undefined,
};

SpeciesDialog.propTypes = {
  open: PropTypes.bool,
  onclose: PropTypes.func,
  data: PropTypes.shape({}),
  property: PropTypes.string,
};

export default SpeciesDialog;
