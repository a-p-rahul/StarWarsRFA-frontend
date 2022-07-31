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
  gender: "Gender",
  height: "Height (cm)",
  mass: "Mass (kg)",
  birth_year: "Birth Year",
  homeworld_name: "Homeworld",
  eye_color: "Eye colour",
  hair_color: "Hair Colour",
  skin_color: "Skin Colour",
});

export const TABLE_COLUMN_ARRANGEMENT = Object.freeze([
  "name",
  "gender",
  "height",
  "mass",
  "birth_year",
  "homeworld_name",
  "eye_color",
  "hair_color",
  "skin_color",
]);
