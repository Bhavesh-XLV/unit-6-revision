import React, { useState } from "react";
import "./App.css";
import InputBoxes from "./Components/InputBoxes";

function App() {
  const [value, setValue] = useState("");
  return (
    <div
      className="App"
      style={
        value.length === 5
          ? {
              border: "2px solid black",
              width: "40%",
              margin: "auto",
              backgroundColor: "green",
            }
          : {
              border: "2px solid black",
              width: "40%",
              margin: "auto",
              backgroundColor: "grey",
            }
      }
    >
      <InputBoxes length={5} onChange={(val) => setValue(val)} perBox={1} />
    </div>
  );
}

export default App;
