import { useState } from 'react';

const AppCounter = () => {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 15) {
      setCounter(counter + 1);
    } else {
      alert(' sorry not allowed to value more than 9');
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert('sorry cannot go value minus');
    }
  };

  return (
    <>
      <h1>Tea with react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>+ {counter}</button>
      <br />
      <button onClick={removeValue}>- {counter}</button>
    </>
  );
};

export default AppCounter;
