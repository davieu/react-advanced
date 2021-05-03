import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
import { reducer } from './reducer';

// refactored for using useReducer

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const deletePerson = (id) => {
    dispatch({ type: 'DELETE_PERSON', payload: id });
  };

  return (
    <React.Fragment>
      <h2>useReducer</h2>

      <form className='form' onSubmit={handleSubmit}>
        {state.isModalOpen && (
          <Modal closeModal={closeModal} modalContent={state.modalContent} />
        )}
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
          <div className='item' key={person.id}>
            <h4> {person.name}</h4>
            <button className='btn' onClick={() => deletePerson(person.id)}>
              delete
            </button>
            <button
              className='btn'
              onClick={() => {
                dispatch({ type: 'REMOVE_ITEM', payload: person.id });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

// just uses useState
// const Index2 = () => {
//   const [name, setName] = useState('');
//   const [people, setPeople] = useState(data);
//   const [showModal, setShowModal] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name) {
//       setShowModal(true);
//       setPeople([
//         ...people,
//         { id: new Date().getTime().toString(), name: name },
//       ]);
//       setName('');
//     } else {
//       setShowModal(true);
//     }
//   };

//   return (
//     <React.Fragment>
//       <h2>useReducer</h2>
//       {showModal && <Modal />}
//       <form className='form' onSubmit={handleSubmit}>
//         <div>
//           <input
//             type='text'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button type='submit'>add</button>
//       </form>
//       {people.map((person) => {
//         return (
//           <div key={person.id}>
//             <h4> {person.name}</h4>
//           </div>
//         );
//       })}
//     </React.Fragment>
//   );
// };

export default Index;
