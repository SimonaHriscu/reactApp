import React, { useState, useEffect } from 'react';
import Button from 'components/ButtonComponent';
import axios from 'axios';

const Counter = () => {
  //https://randomuser.me/api

  const [counter, setCounter] = useState(0);
  const [randomString, setRandomString] = useState('');
  const [randomData, setRandomData] = useState('');
  const [on, setOn] = useState(false);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  //  both fetch and axios just for practice
  //   use fetch() when building relatively small applications and make use of Axios when building large applications for scalability reasons.
  //   for data to appear directly on load
  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then((res) => res.json())
      .then((data) => {
        setRandomString(JSON.stringify(data));
      });
    //   for the data to appear on click
    axios.get('https://randomuser.me/api').then(({ data }) => {
      setRandomData(data);
    });
  }, []);

  const handleData = () => {
    setOn(!on);
  };

  return (
    <>
      <Button onClick={() => handleIncrement()}>Increment</Button>
      <p>{counter}</p>
      <Button onClick={() => handleDecrement()}>Decrement</Button>
      <p>{randomString}</p>
      <Button onClick={() => handleData()}>Fetch Data</Button>
      {on &&
        randomData.results.map((item, i) => {
          return (
            <div key={i}>
              <p>{item.name.first}</p>
              <img src={item.picture.medium} />
            </div>
          );
        })}
    </>
  );
};

export default Counter;
