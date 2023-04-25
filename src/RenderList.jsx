import React from 'react';

function Item({ name, importance }) {
  return (
    <li className="item">
      {name}
      {importance > 0 && ' '}
      {importance > 0 && <i>(Importance: {importance})</i>}
    </li>
  );
}

export default function RenderList() {
  return (
    <div>
      <h1>Sally Ride's Packing List</h1>
      <section>
        <ul>
          <Item importance={9} name={'Space Suit'} />
          <Item importance={0} name={'Helmet With a golden leaf'} />
          <Item importance={6} name={'Photo of Tam'} />
        </ul>
      </section>
    </div>
  );
}

// show data in small bracket in importance 9 0 and 6 and with && operator
