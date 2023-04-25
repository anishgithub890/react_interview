import React from 'react';

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'}
    </li>
  );
}

export default function MyList() {
  return (
    <div className="App">
      <h1>My Ride's Packing List</h1>
      <section>
        <ul>
          <Item isPacked={true} name={'Helmet is packed'} />
          <Item isPacked={true} name={'Dinner Packed'} />
          <Item isPacked={false} name={'Fuel'} />
        </ul>
      </section>
    </div>
  );
}

// '✔' : '❌'
