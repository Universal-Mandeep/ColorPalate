import React from "react";

const ShadeInput = ({ color, onInputChange }) => {
  return (
    <div className="shade-search">
      <div className="container"><h3>ShadeHub</h3></div>
      
      <input
        type="text"
        onChange={(e) => onInputChange(e.target.value)}
        value={color}
        className="shade-input"
      />
    </div>
  );
};

export default ShadeInput;
