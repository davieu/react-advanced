import React, { useState, useEffect } from 'react';
import RenderInputTest from './myTest';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //if firstname and email are submitted in state then submit. if not then dont let submit
    if (firstName && email) {
      // const person = { firstName: firstName, email: email };
      // shorthand
      const person = { id: new Date().getTime().toString(), firstName, email };

      //functional way
      // setPeople((currPeople) => {
      //   return [...currPeople, person];
      // });
      setPeople([...people, person]);
      console.log(person);
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
    // console.log(firstName, email);
  };

  const handleSubmitEdit = (currTempName, currID) => {
    setPeople((currPeople) => {
      let updatedPeople = currPeople.map((person) => {
        if (person.id === currID) {
          person.firstName = currTempName;
          return person;
          // console.log(person.id, person.firstName, currTempName);
        }
      });
      return updatedPeople;
    });
    setEditMode(false);
  };

  // same as the onchange for the setFirstNAme but I made it as a named function
  const setEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const delPerson = (id) => {
    setPeople((currPeople) => {
      let newPeople = currPeople.filter((person) => {
        return person.id != id;
      });
      return newPeople;
    });
  };

  const editPerson = (id) => {
    setEditMode(!editMode);
    console.log(id);
  };

  const PeopleList = () => {
    const [tempName, setTempName] = useState('');
    let peopleList = people.map((person) => {
      const { id, firstName, email } = person;
      // setEditValue(tempName);
      return (
        <React.Fragment key={id}>
          <div className='item'>
            {editMode ? (
              <input
                type='text'
                style={{ width: '4rem' }}
                id='yoyo'
                name='yoyo'
                defaultValue={firstName}
                onChange={(e) => {
                  setTempName(e.target.value);
                }}
              />
            ) : (
              <h4>{firstName}</h4>
            )}
            {/* // )} */}
            <p>{email}</p>
            <button
              className='btn'
              style={{ marginTop: '0px', backgroundColor: 'grey' }}
              onClick={() => delPerson(id)}
            >
              Del
            </button>
            <button
              className='btn'
              style={{ marginTop: '0px', backgroundColor: 'grey' }}
              onClick={() => editPerson(id)}
            >
              Edit
            </button>
            {editMode ? (
              <button
                type='submit'
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmitEdit(tempName, id);
                }}
              >
                Submit
              </button>
            ) : (
              ''
            )}
          </div>
        </React.Fragment>
      );
    });
    return peopleList;
  };

  return (
    <React.Fragment>
      <h2>controlled inputs</h2>
      <article>
        {/* the onSubmit on the form or the onClick on the submit button can be used for sending the data */}
        {/* One or the other */}
        {/* <form className='form' onSubmit={handleSubmit}> */}
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={setEmailInput}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>
            add person
          </button>
        </form>
        <form id='sdsdsd'>
          <PeopleList />
        </form>
        {/* Inline render of people */}
        {/* {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })} */}
      </article>
    </React.Fragment>
  );
};

export default ControlledInputs;
