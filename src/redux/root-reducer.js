import { combineReducers } from 'redux';
import { ADD_PERSON_SUCCESS, DELETE_PERSON_SUCCESS, GET_PERSONS_SUCCESS, UPDATE_PERSON_SUCCESS } from './action/action';


const personsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PERSONS_SUCCESS:
      return action.persons;
    case ADD_PERSON_SUCCESS:
      return [...state, action.person];
    case DELETE_PERSON_SUCCESS:
      return state.filter(person => person.id !== action.id);
      case UPDATE_PERSON_SUCCESS:
  return state.map(person => 
    person.id === action.person.id ? action.person : person
  );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  persons: personsReducer,
});

export default rootReducer;
