import React, { useState } from 'react';

const Callback = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };
  return (
    <input
      type="text"
      id="input"
      placeholder="type color"
      aria-label="input"
      onChange={handleChange}
      value={activeColor}
    />
  );
};

export default Callback;
