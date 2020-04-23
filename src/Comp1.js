import React, { useContext, useMemo } from "react";
import { Global } from "./Global";
import Buttons from "./Buttons";
import Comp from "./Comp";

export default () => {
  const { state, addX, subX } = useContext(Global);
  console.log("render Comp1");
  const props = { type: "X", add: addX, sub: subX };
  return (
    <>
      <Buttons {...props} />
      <Comp type={"X"} value={state.x} />
    </>
  );
};
