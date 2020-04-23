import React from "react";

const Comp = React.memo(({ type, value }) => {
  console.log("render comp" + type);
  return (
    <div>
      Comp{type}: {value}
    </div>
  );
});

export default Comp;
