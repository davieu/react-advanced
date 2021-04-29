import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    // eventListener that looks for window resizing. Then it executes checkSize callback on resize.
    // checkSize sets the useState data to the width of the new inner width of the window size
    window.addEventListener('resize', checkSize);
    // cleanup function
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  console.log(size);
  return (
    <React.Fragment>
      <h1>useEffect cleanup</h1>
      <h2>Window size: {size}</h2>
    </React.Fragment>
  );
};

export default UseEffectCleanup;
