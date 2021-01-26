import React, { useState, useEffect } from 'react';

// const fetchRandomData = async () => {
//   fetch('https://randomuser.me/api')
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(JSON.stringify(data));
//       return JSON.stringify(data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

const Counter = () => {
  //https://randomuser.me/api

  const [counter, setCounter] = useState(0);
  const [randomString, setRandomString] = useState('');
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then((res) => res.json())
      .then((data) => {
        console.log('This is your data', data);
        setRandomString(JSON.stringify(data));
      });
  }, []);
  return (
    <>
      <button onClick={() => handleIncrement()}>Increment</button>
      <p>{counter}</p>
      <button onClick={() => handleDecrement()}>Decrement</button>
      <p>{randomString}</p>
      {/* <button onClick={() => fetchRandomData()}>Fetch Data</button> */}
    </>
  );
};

export default Counter;
