import { useEffect, useState } from 'react';

const RandomImage = () => {
  const [randoms, setRandom] = useState();

  // const SUPERHERO_TOKEN = 245487424685494;
  // const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

  const fetchApi = () => {
    fetch(`https://superheroapi.com/api.php/245487424685494/34`)
      .then((res) => res.json())
      .then((json) => setRandom(json.image.url));
    // .then((json) => console.log(json.image.url));
    // .then((json) => setRandom(json.image.url));
    // .then((json) => console.log());
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleImage = () => {
    setRandom(fetchApi());
  };

  return (
    <div>
      <h1>Hello</h1>
      <div>
        <img src={randoms} width={300} height={300} />
        <button onClick={handleImage}>Random Super Hero</button>
      </div>
    </div>
  );
};

export default RandomImage;

// const res = await fetch('https://dog.ceo/api/breeds/image/random');
