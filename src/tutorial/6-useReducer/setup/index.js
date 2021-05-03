import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

// refactored for using useReducer
const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      people: [],
      isModalOpen: true,
      modalContent: 'item added',
    };
  }
  throw new Error('no mathing action type');
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
    } else {
      dispatch({ type: 'RANDOM' });
    }
  };

  return (
    <React.Fragment>
      <h2>useReducer</h2>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4> {person.name}</h4>
          </div>
        );
      })}
    </React.Fragment>
  );
};

// just uses useState
const Index2 = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([
        ...people,
        { id: new Date().getTime().toString(), name: name },
      ]);
      setName('');
    } else {
      setShowModal(true);
    }
  };

  return (
    <React.Fragment>
      <h2>useReducer</h2>
      {showModal && <Modal />}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4> {person.name}</h4>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Index;
