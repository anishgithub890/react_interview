import { useState } from 'react';

const Ff = () => {
  const [pp, setPP] = useState(0);

  const addHandler = () => {
    setPP(pp + 1);
  };
  const minusHandler = () => {
    if (pp > 0) {
      setPP(pp - 1);
    }
  };

  return (
    <div>
      <p onClick={addHandler}>PLUS</p>
      <p>{pp}</p>
      <p onClick={minusHandler}>MINUS</p>
    </div>
  );
};

export default Ff;
