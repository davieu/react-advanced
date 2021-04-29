import React, { useState } from 'react';

const UseStateObject = () => {
  // using an object as state
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });

  // Multiple state values. you can also set up as many state values as you want
  const [name, setName] = useState('john');
  const [age, setage] = useState('30');
  const [message, setMessage] = useState("john's message");

  // using the object for setState
  const changeMessage = () => {
    setPerson({ ...person, message: 'my new message' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
      <br />
      <br />
      <hr />
      <br />
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
    </>
  );
};

export default UseStateObject;
