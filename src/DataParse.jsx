import React, { useState } from 'react';
import './App.css';
import Callback from './Callback';

//Parent
export default function DataParse() {
  const [UIcolor, setUIcolor] = useState(null);

  // callback function
  const getColor = (color) => {
    setUIcolor(color);
  };
  return (
    <div className="App">
      <h1>Write any color</h1>
      <div
        className="app_color_container"
        style={{ background: `${UIcolor}` }}
      ></div>
      <Callback getColor={getColor} />
    </div>
  );
}
