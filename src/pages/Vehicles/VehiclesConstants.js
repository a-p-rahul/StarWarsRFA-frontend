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
  model: "Model",
  vehicle_class: "Vehicle Class",
  crew: "Crew",
  passengers: "Passengers",
  consumables: "Consumables",
  cargo_capacity: "Cargo Capacity",
  cost_in_credits: "Cost in credits",
  max_atmosphering_speed: "Max Atm Speed",
  length: "Length (m)",
  manufacturer: "Manufactures",
});

export const TABLE_COLUMN_ARRANGEMENT = Object.freeze([
  "name",
  "model",
  "vehicle_class",
  "crew",
  "passengers",
  "consumables",
  "cargo_capacity",
  "cost_in_credits",
  "max_atmosphering_speed",
  "length",
  "manufacturer",
]);
