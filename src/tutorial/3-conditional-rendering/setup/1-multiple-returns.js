import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    // setIsLoading(true); // can be added here instead of above while data is being fetched
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <React.Fragment>
        <h2>Loading...</h2>
        <div className='loader'></div>
      </React.Fragment>
    );
  }

  if (isError) {
    return <h2>Error...</h2>;
  }

  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturns;
