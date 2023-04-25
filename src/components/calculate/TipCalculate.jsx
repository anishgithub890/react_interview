import { useState } from 'react';

const Tipcalculate = () => {
  const [number, setNumber] = useState(1);
  const [totalbill, setTotalBill] = useState();

  function handleBillTotal(event) {
    console.log(event.target.value);
  }

  function handleTip(event) {
    console.log(event.target.value);
  }

  let perpersobill = () => {
    console.log(setTotalBill(handleBillTotal + handleTip));
  };

  const handleplus = () => {
    setNumber(number + 1);
  };

  const handleminus = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  return (
    <div>
      <h1>Tip Calculate</h1>
      <div>
        <h3>Bill Total</h3>
        <input placeholder="$100" onChange={handleBillTotal} />
        <h3>Tip</h3>
        <input placeholder="$10" onChange={handleTip} />
        <div>
          <p onClick={handleplus}>+</p>
          <p>{number}</p>
          <p onClick={handleminus}>-</p>
        </div>
        <div>
          <h3>Per PersonBill</h3>
          <p>{perpersobill}</p>
        </div>
        <div>
          <button>total</button>
        </div>
      </div>
    </div>
  );
};

export default Tipcalculate;
