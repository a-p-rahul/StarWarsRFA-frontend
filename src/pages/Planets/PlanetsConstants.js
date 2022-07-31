export const ACTIONS = Object.freeze({
  LOADING: "LOADING",
  INITIATE_LIST: "INITIATE_LIST",
  SEARCH_LIST: "SEARCH_LIST",
});

export const INITIAL_STATE = Object.freeze({
  searchString: "",
  loading: false,
  list: [],
});

export const PROPERTY_DISPLAY_STRINGS = Object.freeze({
  name: "Name",
  population: "Population",
  gravity: "gravity",
  terrain: "Terrain",
  climate: "Climate",
  surface_water: "Surface water (m)",
  rotation_period: "Rotation period (hrs)",
  orbital_period: "Orbital period (days)",
  diameter: "Diameter (kms)",
});

export const TABLE_COLUMN_ARRANGEMENT = Object.freeze([
  "name",
  "population",
  "gravity",
  "terrain",
  "climate",
  "surface_water",
  "rotation_period",
  "orbital_period",
  "diameter",
]);
