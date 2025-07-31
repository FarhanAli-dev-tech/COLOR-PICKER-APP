import React from 'react';
import './App.css';

function ResetButton({ onReset }) {
  return (
    <button className="reset-button" onClick={onReset}>
      🔄 Reset Background
    </button>
  );
}

export default ResetButton;
