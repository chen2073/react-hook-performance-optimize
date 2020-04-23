import React from "react";

const Buttons = ({ type, add, sub }) => {
  console.log("render buttons");
  return (
    <>
      <button onClick={add}>add{type}</button>
      <button onClick={sub}>sub{type}</button>
    </>
  );
};

export default React.memo(Buttons);
