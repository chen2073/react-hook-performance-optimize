import React, { useContext, useMemo } from "react";
import { Global } from "./Global";
import Buttons from "./Buttons";
import Comp from "./Comp";

export default () => {
  const { state, addY, subY } = useContext(Global);
  const props = { type: "Y", add: addY, sub: subY };
  console.log("render Comp2");
  return (
    <>
      <Buttons {...props} />
      <Comp type={"Y"} value={state.y} />
    </>
  );
};
