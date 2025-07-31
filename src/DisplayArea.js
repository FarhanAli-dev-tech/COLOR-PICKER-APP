import React from 'react';
import './App.css';

function DisplayArea({ color }) {
  return (
    <div className="display-area" style={{ backgroundColor: color }}>
      <p className="selected-text">Selected Color: <span>{color}</span></p>
    </div>
  );
}

export default DisplayArea;
