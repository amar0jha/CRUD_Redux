export const GET_PERSONS_REQUEST = 'GET_PERSONS_REQUEST';
export const GET_PERSONS_SUCCESS = 'GET_PERSONS_SUCCESS';
export const ADD_PERSON_REQUEST = 'ADD_PERSON_REQUEST';
export const ADD_PERSON_SUCCESS = 'ADD_PERSON_SUCCESS';
export const DELETE_PERSON_REQUEST = 'DELETE_PERSON_REQUEST';
export const DELETE_PERSON_SUCCESS = 'DELETE_PERSON_SUCCESS';
export const UPDATE_PERSON_REQUEST = 'UPDATE_PERSON_REQUEST';
export const UPDATE_PERSON_SUCCESS = 'UPDATE_PERSON_SUCCESS';


export const getPersonsRequest = () => ({ type: GET_PERSONS_REQUEST });
export const getPersonsSuccess = (persons) => ({ type: GET_PERSONS_SUCCESS, persons });
export const addPersonRequest = (person) => ({ type: ADD_PERSON_REQUEST, person });
export const addPersonSuccess = (person) => ({ type: ADD_PERSON_SUCCESS, person });
export const deletePersonRequest = (id) => ({ type: DELETE_PERSON_REQUEST, id });
export const deletePersonSuccess = (id) => ({ type: DELETE_PERSON_SUCCESS, id });
export const updatePersonRequest = (person) => ({ type: UPDATE_PERSON_REQUEST, person });
export const updatePersonSuccess = (person) => ({ type: UPDATE_PERSON_SUCCESS, person });
