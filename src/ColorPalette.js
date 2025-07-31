// ColorPalette.js
import React from 'react';
import './App.css';
function ColorPalette({ onColorSelect }) {
  const handleChange = (event) => {
    onColorSelect(event.target.value);
  };

  return (
    <div className="color-picker">
      <label>Select Color: </label>
      <input type="color" onChange={handleChange} />
    </div>
  );
}

export default ColorPalette;
