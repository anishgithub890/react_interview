import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const fetchRandomData = () => {
  return axios
    .get('https://randomuser.me/api')
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

function CustomeHooks() {
  const [counter, setCounter] = useState(0);
  const [randomuser, setRandomUser] = useState('');
  const [userInfo, setUserRandomInfo] = useState([]);

  const addHandler = () => {
    setCounter(counter + 1);
  };

  const decHandler = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert('cannot minus value less zero');
    }
  };

  const getFullUserName = (userInf) => {
    const {
      name: { firt, last },
    } = userInf;
    return [`${firt} ${last}`];
  };

  useEffect(() => {
    fetchRandomData().then((randomData) => {
      setRandomUser(
        JSON.stringify(randomData, null, 2) || 'No user data found'
      );
      setUserRandomInfo(randomData.results);
    });
  }, []);

  return (
    <div className="App">
      <div className="arithmatic">
        <h1>Practice for value Increase and Decrease </h1>
        <p>{counter}</p>
        <button onClick={addHandler}>Increase</button>
        <button onClick={decHandler}>Decrease</button>
        {userInfo.map((userInf, idx) => (
          <div key={idx}>
            <p>{getFullUserName(userInf)}</p>
          </div>
        ))}
        <pre>{randomuser}</pre>
        {/* <button onClick={() => fetchRandomData}>Fetch Random User</button> */}
      </div>
    </div>
  );
}

export default CustomeHooks;
