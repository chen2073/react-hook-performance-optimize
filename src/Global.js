import React, { createContext, useReducer, useMemo } from "react";

export const Global = createContext();

const initState = { x: 0, y: 0 };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "addX":
      return { ...state, x: state.x + 1 };
    case "subX":
      return { ...state, x: state.x - 1 };
    case "addY":
      return { ...state, y: state.y + 1 };
    case "subY":
      return { ...state, y: state.y - 1 };
    default:
      throw new Error("no such action");
  }
};

export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(reducer, initState);

  const addX = useMemo(() => () => dispatch({ type: "addX" }), []);
  const subX = useMemo(() => () => dispatch({ type: "subX" }), []);
  const addY = useMemo(() => () => dispatch({ type: "addY" }), []);
  const subY = useMemo(() => () => dispatch({ type: "subY" }), []);

  console.log("render  global");
  return (
    <Global.Provider value={{ state, addX, addY, subX, subY }}>
      {props.children}
    </Global.Provider>
  );
};
