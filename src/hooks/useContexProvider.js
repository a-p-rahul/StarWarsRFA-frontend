import { useReducer } from "react";

const useContextProvider = (context, initialState, reducer) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let ContextProvider = (props) => {
    //
    return (
      <context.Provider value={{ state, dispatch }}>
        { props.children }
      </context.Provider>
    )
  };

  return {
    ContextProvider
  };

};

export default useContextProvider;