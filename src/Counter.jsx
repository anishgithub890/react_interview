import React, { useState } from 'react';
import './App.css';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const addHandler = () => {
    setCounter(counter + 1);
  };

  const decHandler = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert('sorry i cannot minus less than 0');
    }
  };

  return (
    <div className="App">
      <h1>Greeting</h1>
      <p>{counter}</p>
      <button onClick={addHandler}>Increase</button>
      <button onClick={decHandler}>Decrease</button>
    </div>
  );
}
