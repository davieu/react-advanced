import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // will only display second if first variable is empty
  // const firstValue = text || 'hello world';
  // will only display the second if first variable has a value
  // const secondValue = text && 'hello world';

  return (
    <React.Fragment>
      <h2>short circuit</h2>
      {/* <h3>{firstValue}</h3>
      <h3>value: {secondValue}</h3> */}
      <h2>{text || 'john doe'}</h2>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h2>Error...</h2>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
      {/* {text && <h2>hello world</h2>}
      {!text && <h2>hello world</h2>} */}
    </React.Fragment>
  );
};

export default ShortCircuit;
