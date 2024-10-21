import { takeEvery, call, put } from 'redux-saga/effects';
import { ADD_PERSON_REQUEST, addPersonSuccess, DELETE_PERSON_REQUEST, deletePersonSuccess, GET_PERSONS_REQUEST, getPersonsSuccess, UPDATE_PERSON_REQUEST, updatePersonSuccess } from './action/action';
import { addPerson, deletePerson, fetchPersons, updatePerson } from '../api';

function* getPersonsSaga() {
  try {
    const persons = yield call(fetchPersons);
    yield put(getPersonsSuccess(persons));
  } catch (error) {
    console.error('Error fetching persons:', error);
  }
}

function* addPersonSaga(action) {
  try {
    const newPerson = yield call(addPerson, action.person);
    yield put(addPersonSuccess(newPerson));
  } catch (error) {
    console.error('Error adding person:', error);
  }
}

function* deletePersonSaga(action) {
  try {
    yield call(deletePerson, action.id);
    yield put(deletePersonSuccess(action.id));
  } catch (error) {
    console.error('Error deleting person:', error);
  }
}


function* updatePersonSaga(action) {
  try {
    const updatedPerson = yield call(updatePerson, action.person);
    yield put(updatePersonSuccess(updatedPerson));
  } catch (error) {
    console.error('Error updating person:', error);
  }
}

function* rootSaga() {
  yield takeEvery(GET_PERSONS_REQUEST, getPersonsSaga);
  yield takeEvery(ADD_PERSON_REQUEST, addPersonSaga);
  yield takeEvery(DELETE_PERSON_REQUEST, deletePersonSaga);
  yield takeEvery(UPDATE_PERSON_REQUEST, updatePersonSaga);

}

export default rootSaga;