import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

// const API = 'https://jsonplaceholder.typicode.com/'

export default function UseEffectOfApi() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${resourceType}`)
      // .then((response) => response.json())
      .then((res) => setItems(res.data));
  }, [resourceType]);

  const handlerPost = () => {
    setResourceType('posts');
  };

  const handlercmm = () => {
    setResourceType('comments');
  };

  const handlerUsers = () => {
    setResourceType('users');
  };

  const handlerpht = () => {
    setResourceType('photos');
  };

  return (
    <>
      <div>
        <button onClick={handlerPost}>Posts</button>
        <button onClick={handlercmm}>Comments</button>
        <button onClick={handlerpht}>Photos</button>
        <button onClick={handlerUsers}>Users</button>
        <h1>{resourceType}</h1>
      </div>
      {/* className="grid" */}
      <div>
        {items.map((item, idx) => {
          return (
            <div key={idx}>
              {/* className="card" */}
              <pre>{JSON.stringify(item)}</pre>
            </div>
          );
        })}
      </div>
    </>
  );
}
