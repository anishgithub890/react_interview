import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API = 'https://jsonplaceholder.typicode.com/';

export default function RQ() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  const [isError, setIsError] = useState();

  // const getAPIFetch = async () => {
  //   try {
  //     const response = await axios.get(`${API}/${resourceType}`);
  //     setItems(response.data);
  //   } catch (error) {
  //     setIsError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getAPIFetch();
  // }, [resourceType]);

  useEffect(() => {
    axios
      .get(`${API}${resourceType}`)
      .then((res) => setItems(res.data))
      .catch((error) => setIsError(error.message));
    // console.log(items);
  }, [resourceType]);

  const handler = () => {
    setResourceType('posts');
  };
  const handleruyser = () => {
    setResourceType('users');
  };
  return (
    <>
      <div className="App">
        <h1>axios query</h1>
        <button onClick={handler}>POSTS</button>
        <button onClick={handleruyser}>Users</button>
        <h2>{resourceType}</h2>
        {isError !== '' && <h2>{isError}</h2>}
        {items.slice(0, 10).map((item, idx) => {
          return (
            <div key={idx}>
              <pre>{JSON.stringify(item)}</pre>
            </div>
          );
        })}
      </div>
    </>
  );
}

// .get('https://jsonplaceholder.typicode.com/posts')
