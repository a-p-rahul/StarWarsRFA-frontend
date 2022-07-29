export const LOADING = 'LOADING';

export const INITIATE_LIST = 'INITIATE_LIST';

export const SEARCH_LIST = 'SEARCH_LIST';

export const TABLE_HEADERS = Object.freeze({
  name: 'Name',
  population: 'Population',
  gravity: 'gravity',
  terrain: 'Terrain',
  climate:'Climate' ,
  surface_water: 'Surface water',
  rotation_period: 'Rotation period',
  orbital_period: 'Orbital period',
  diameter: 'Diameter',
});

export const TABLE_COLUMN_ARRANGEMENT = Object.freeze(['name', 'population', 'gravity', 'terrain',
  'climate', 'surface_water', 'rotation_period', 'orbital_period', 'diameter',  
]);
