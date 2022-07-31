const getSearchResultSelector = (asset = "") => {
  return (state) => {
    let list = state[asset].list || [];
    let searchString = state[asset].searchString;
    return searchString
      ? list
          .filter((item) =>
            item.name.toUpperCase().includes(searchString.toUpperCase())
          )
          .sort((a, b) => {
            let value =
              a.name.toUpperCase().indexOf(searchString.toUpperCase()) -
              b.name.toUpperCase().indexOf(searchString.toUpperCase());
            if (value !== 0) {
              return value;
            }
            value = a.name.length > b.name.length;
            if (value !== 0) {
              return value;
            }
            return a.name.toUpperCase().localeCompare(b.name.toUpperCase()); // alphabetically
          })
      : list;
  };
};

export default getSearchResultSelector;
