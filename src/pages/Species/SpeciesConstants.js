export const ACTIONS = Object.freeze({
  LOADING: 'LOADING',
  INITIATE_LIST: 'INITIATE_LIST',
  SEARCH_LIST: 'SEARCH_LIST',
});

export const INITIAL_STATE = Object.freeze({
  searchString: '',
  loading: false,
  list: [],
});


export const TABLE_HEADERS = Object.freeze({
  name: 'Name',
  language: 'Name',
  homeworld_name: 'Homeworld',
  designation: 'Designation',
  classification: 'Classification',
  average_height: 'Avg Height (cm)',
  average_lifespan: 'Avg Lifespan (yrs)',
  eye_colors: 'Eye colours',
  hair_colors: 'Hair Colours',
  skin_colors: 'Skin Colours',
});

export const TABLE_COLUMN_ARRANGEMENT = Object.freeze(['name', 'language', 'homeworld_name', 'designation',
  'classification', 'average_height', 'average_lifespan', 'eye_colors', 'hair_colors', 'skin_colors',
]);
