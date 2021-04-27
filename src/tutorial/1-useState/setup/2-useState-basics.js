import React, { useState } from 'react';
// component name must be uppercase
// must be in the function/component body
// cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState('Original Text');

  const handleClick = () => {
    text === 'Original Text'
      ? setText('hello world')
      : setText('Original Text');
    // if (text === 'Original Text') {
    //   setText('hello world');
    // } else {
    //   setText('Original Text');
    // }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
