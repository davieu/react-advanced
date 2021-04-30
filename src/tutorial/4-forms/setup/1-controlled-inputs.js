import React, { useState, useEffect } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([
    { email: 'yuyyu', firstName: 'tt', id: '16197572484' },
  ]);
  const [editMode, setEditMode] = useState(false);
  const [currPersonID, setCurrPersonID] = useState('');
  // const [tempName, setTempName] = useState('');
  // const [tempEmail, setTempEmail] = useState('');

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
      // console.log(person);
      setFirstName('');
      setEmail('');
    }
    // else {
    // console.log('empty values');
    // }
    // console.log(firstName, email);
  };

  const handleSubmitEdit = (currTempName, currTempEmail, currID) => {
    console.log('name: ' + currTempName);
    console.log('email:' + currTempEmail);
    console.log('id: ' + currID);
    // let peopleCopy = [...people];
    // let resetNames = peopleCopy.map((person) => {
    //   if (person.id === currID) {
    //     if (currTempName != '') {
    //       person.firstName = currTempName;
    //     }
    //     if (currTempEmail != '') {
    //       person.email = currTempEmail;
    //     }
    //     person.id = currID;

    //     // if (email != currTempEmail) {
    //     //   email = currTempName;
    //     // }
    //     return person;
    //     // console.log(person.id, person.firstName, currTempName);
    //   } else {
    //     return person;
    //   }
    // });
    // setPeople(resetNames);

    setPeople((currPeople) => {
      let updatedPeople = currPeople.map((person) => {
        if (person.id === currID) {
          if (currTempName != '') {
            person.firstName = currTempName;
          }
          if (currTempEmail != '') {
            person.email = currTempEmail;
          }
          person.id = currID;

          // if (email != currTempEmail) {
          //   email = currTempName;
          // }
          return person;
          // console.log(person.id, person.firstName, currTempName);
        } else {
          return person;
        }
      });
      console.log('ok');
      return updatedPeople;
    });
    setEditMode(false);
    // setCurrPersonID('');
    console.log('ok22');
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
    setCurrPersonID(id);
    setEditMode(!editMode);
    console.log('ediebtnID :', id);
  };

  // renders the people list/people state
  const PeopleList = () => {
    const [tempName, setTempName] = useState('');
    const [tempEmail, setTempEmail] = useState('');

    let peopleList = people.map((person) => {
      return (
        <form key={person.id} id={person.id}>
          <div className='item'>
            {editMode && person.id == currPersonID ? (
              <React.Fragment>
                <input
                  type='text'
                  style={{ width: '4rem' }}
                  id='editFirstName'
                  name='editFirstName'
                  defaultValue={person.firstName}
                  onChange={(e) => {
                    setTempName(e.target.value);
                  }}
                />
                <input
                  type='text'
                  style={{ width: '4rem' }}
                  id='editEmail'
                  name='editEmail'
                  defaultValue={person.email}
                  onChange={(e) => {
                    setTempEmail(e.target.value);
                  }}
                />
                <button
                  type='submit'
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('sdsdsd');
                    handleSubmitEdit(tempName, tempEmail, person.id);
                    setCurrPersonID('');
                    console.log('yoyo');
                  }}
                >
                  Submit
                </button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h4>{person.firstName}</h4>
                <p>{person.email}</p>
              </React.Fragment>
            )}
            <button
              className='btn'
              type='button'
              style={{ marginTop: '0px', backgroundColor: 'grey' }}
              onClick={() => delPerson(person.id)}
            >
              Del
            </button>
            <button
              className='btn'
              type='button'
              style={{ marginTop: '0px', backgroundColor: 'grey' }}
              onClick={(e) => editPerson(person.id)}
            >
              {editMode && person.id == currPersonID ? 'Toggle' : 'Edit'}
            </button>
          </div>
        </form>
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

        {/* <form> */}
        <PeopleList />
        {/* {people.map((person) => {
          // const { id, firstName, email } = person;
          // setEditValue(tempName);
          return (
            <form key={person.id} id={person.id}>
              <div className='item'>
                {editMode && person.id == currPersonID ? (
                  <div>
                    <input
                      type='text'
                      style={{ width: '4rem' }}
                      id='editFirstName'
                      name='editFirstName'
                      defaultValue={person.firstName}
                      onChange={(e) => {
                        setTempName(e.target.value);
                      }}
                    />
                    <input
                      type='text'
                      style={{ width: '4rem' }}
                      id='editEmail'
                      name='editEmail'
                      defaultValue={person.email}
                      onChange={(e) => {
                        setTempEmail(e.target.value);
                      }}
                    />
                    <button
                      type='submit'
                      onClick={(e) => {
                        e.preventDefault();
                        console.log('sdsdsd');
                        handleSubmitEdit(tempName, tempEmail, person.id);
                        setCurrPersonID('');
                        console.log('yoyo');
                      }}
                    >
                      Submit
                    </button>
                  </div>
                ) : (
                  <div>
                    <h4>{person.firstName}</h4>
                    <p>{person.email}</p>
                  </div>
                )}

                <button
                  className='btn'
                  type='button'
                  style={{ marginTop: '0px', backgroundColor: 'grey' }}
                  onClick={() => delPerson(person.id)}
                >
                  Del
                </button>
                <button
                  className='btn'
                  type='button'
                  style={{ marginTop: '0px', backgroundColor: 'grey' }}
                  onClick={(e) => editPerson(person.id)}
                >
                  Edit
                </button>
              </div>
            </form>
          );
        })} */}
        {/* </form> */}
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
