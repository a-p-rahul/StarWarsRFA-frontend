import React, { useEffect } from "react";
import axios from 'axios';
import Context from "./Context";
import InitialState from "./InitialState";
import Reducer from "./Reducer";
import useContextProvider from '../../hooks/useContexProvider';

const People = (props) => {
  const { ContextProvider } = useContextProvider(Context, InitialState, Reducer);
  useEffect(async () => {
    const res = await axios.get("http://localhost:3001/people");
    console.log(res.data);
  });
  return (
    <ContextProvider>
      <main style={{ padding: "1rem 0" }}>
        <h2>People</h2>
      </main>
    </ContextProvider>
  );
};

export default People;