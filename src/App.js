import React, { useState, useEffect } from "react";
import "./App.css";
import Shades from "./components/Shades";

import randomColor from "randomcolor";
import ShadeInput from "./components/ShadeInput";
function App() {
  const [color, setColor] = useState("#000");

  useEffect(() => {
    setColor(randomColor());
  }, []);

  const onInputChange = (value) => {
    setColor(value);
  };
  return (
    <div className="App">
      <ShadeInput color={color} onInputChange={onInputChange} />
      <Shades color={color} />
    </div>
  );
}

export default App;
