import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const changePerson = (id) => {
    let changedPeople = [...people];
    let changedToLord = changedPeople.map((person) => {
      if (person.id == id) {
        if (person.name.includes('Lord')) {
          return person;
        } else {
          person.name = `Lord ${person.name}`;
        }
      }
      return person;
    });
    setPeople(changedToLord);
  };

  const resetNames = () => {
    let peopleCopy = [...people];
    let resetNames = peopleCopy.map((person, index) => {
      switch (person.id) {
        case 1:
          person.name = 'john';
          break;
        case 2:
          person.name = 'peter';
          break;
        case 3:
          person.name = 'susan';
          break;
        case 4:
          person.name = 'anna';
          break;
      }
      console.log(index);
      return person;
    });
    setPeople(resetNames);
  };

  const removeItem = (id) => {
    // let test = people.filter()
    let newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <React.Fragment key={id}>
            <button className='btn' onClick={() => changePerson(id)}>
              {name}
            </button>
            <button className='btn' onClick={() => removeItem(id)}>
              Remove Item
            </button>
            <br />
          </React.Fragment>
        );
      })}
      <br />
      <button className='btn' onClick={() => setPeople([])}>
        Clear Items
      </button>
      <button className='btn' onClick={resetNames}>
        Change Items
      </button>
      <button className='btn' onClick={() => setPeople(data)}>
        Populate
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
