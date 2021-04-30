import React from 'react';

//function Book({img, title, author}) //{ //js destructuring from the parameters
const RenderInputTest = (yoyo, func) => {
  console.log(yoyo);
  return (
    <input
      key='random1aa'
      type='text'
      id='tempName'
      name='tempName'
      value={yoyo.yoyo}
      onChange={func.func}
    />
  );
};

export default RenderInputTest;
