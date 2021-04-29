import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('call useEffect');
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
    // if you add the second argument of [] an empty array then it will only run
    // the useEffect on the initial render.   }, []); if you add no empty array then it will run after
    // every render. by adding a dependency (value) it will run everytime (value) is changed or updated
  }, [value]);

  useEffect(() => {
    console.log('I will only run on initital render');
  }, []);

  console.log('render component');

  return (
    <React.Fragment>
      <h1>useEffect Basics</h1>
      <h2>{value}</h2>
      <button
        className='btn'
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increase
      </button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
