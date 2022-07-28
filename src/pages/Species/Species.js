import React, { useEffect } from "react";
import axios from 'axios';
import Context from "./Context";
import InitialState from "./InitialState";
import Reducer from "./Reducer";
import useContextProvider from '../../hooks/useContexProvider';

const Species = (props) => {
  const { ContextProvider } = useContextProvider(Context, InitialState, Reducer);
  useEffect(async () => {
    const res = await axios.get("http://localhost:3001/species");
    console.log(res.data);
  });
  return (
    <ContextProvider>
      <main style={{ padding: "1rem 0" }}>
        <h2>Species</h2>
      </main>
    </ContextProvider>
  );
};

export default Species;