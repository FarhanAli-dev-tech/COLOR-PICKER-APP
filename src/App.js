import React, { useState } from 'react';
import ColorPalette from './ColorPalette';
import DisplayArea from './DisplayArea';
import ResetButton from './ResetButton';
import './App.css';

function App() {
  const [selectedColor, setSelectedColor] = useState('white');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleReset = () => {
    setSelectedColor('white');
  };

  return (
    <div className="app">
      <h1>🎨 Color Picker App</h1>
      <ColorPalette onColorSelect={handleColorSelect} />
      <DisplayArea color={selectedColor} />
      <ResetButton onReset={handleReset} />
    </div>
  );
}

export default App;
