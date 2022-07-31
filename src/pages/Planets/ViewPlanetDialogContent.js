import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import {
  PROPERTY_DISPLAY_STRINGS,
  TABLE_COLUMN_ARRANGEMENT,
} from "./PlanetsConstants";
import { Container } from "@mui/material";

const ViewPlanetDialogContent = ({ data }) => (
  <Container maxWidth="xl">
    {TABLE_COLUMN_ARRANGEMENT.map((property) => (
      <Grid container spacing={2} key={property}>
        <Grid item xs={2}>
          <strong>{PROPERTY_DISPLAY_STRINGS[property]}</strong>
        </Grid>
        <Grid item xs={10}>
          {data[property]}
        </Grid>
      </Grid>
    ))}
  </Container>
);

ViewPlanetDialogContent.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ViewPlanetDialogContent;
