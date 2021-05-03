export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'please enter value' };
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }
  if (action.type === 'DELETE_PERSON') {
    let deletedPerson = '';
    const newPeople = state.people.filter((person) => {
      deletedPerson = person.name;
      return person.id !== action.payload;
    });
    console.log(newPeople);
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item deleted: ' + deletedPerson,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    let deletedPerson = '';
    const newPeople = state.people.filter((person) => {
      if (person.id === action.payload) {
        deletedPerson = person.name;
      }
      return person.id !== action.payload;
    });
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item deleted: ' + deletedPerson,
    };
  }

  throw new Error('no mathing action type');
};
