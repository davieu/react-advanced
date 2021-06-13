import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  return (
    <section>
      <h2>prop drilling use</h2>
      <List people={people} />
    </section>
  );
};

const List = ({ people }) => {
  return (
    <React.Fragment>
      {people.map((person) => {
        return <SinglePerson key={person.id} />;
      })}
    </React.Fragment>
  );
};

const SinglePerson = ({ id, name }) => {
  return (
    <div className='item'>
      <h4>single item</h4>
    </div>
  );
};

export default PropDrilling;
