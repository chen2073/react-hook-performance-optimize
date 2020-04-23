import React from "react";
import { GlobalProvider } from "./Global";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import "./styles.css";

export default function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <Comp1 />
      <Comp2 />
    </GlobalProvider>
  );
}
