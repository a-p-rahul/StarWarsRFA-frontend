import React, { useEffect } from "react";
import axios from 'axios';
import Context from "./Context";
import InitialState from "./InitialState";
import Reducer from "./Reducer";
import useContextProvider from '../../hooks/useContexProvider';

const Planets = (props) => {
  const { ContextProvider } = useContextProvider(Context, InitialState, Reducer);
  useEffect(async () => {
    const res = await axios.get("http://localhost:3001/planets");
    console.log(res.data);
  });
  return (
    <ContextProvider>
      <main style={{ padding: "1rem 0" }}>
        <h2>Planets</h2>
      </main>
    </ContextProvider>
  );
};

export default Planets;