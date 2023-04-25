import React from 'react';
import data from './data';

export default function ProductData() {
  return (
    <div>
      <header>
        <a href="/">ecommerce</a>
      </header>
      <main>
        <h1>Feature Products</h1>
        {data.products.map((product, idx) => (
          <div key={idx}>
            <img src={product.image} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
