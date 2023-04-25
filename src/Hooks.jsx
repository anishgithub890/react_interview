import React, { useEffect, useState } from 'react';
import './App.css';

function Hooks() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=David&lastName=Mar`
      )
        .then((res) => res.json())
        .then((data) => {
          setJoke(data.value.joke);
        });
    fetchJoke;
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Hello Hooks</h1>
        <h2>{joke}</h2>
        <button>Generate Jokes</button>
      </div>
    </div>
  );
}

export default Hooks;
