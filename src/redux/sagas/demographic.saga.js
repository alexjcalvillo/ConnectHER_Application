import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAgeDemo(action) {
  try {
    const response = yield axios.get('/api/demographics/age');
    console.log(response.data);
    yield put({
      type: 'SET_AGE_DEMO',
      payload: response.data,
    });
  } catch (error) {
    console.log(
      'There was a problem loading demographics. Please try again.',
      error
    );
  }
}
function* getEthnicityDemo(action) {
  try {
    const response = yield axios.get('/api/demographics/ethnicity');
    console.log(response.data);
    yield put({
      type: 'SET_ETHNICITY_DEMO',
      payload: response.data,
    });
  } catch (error) {
    console.log(
      'There was a problem loading demographics. Please try again.',
      error
    );
  }
}
function* getGenderDemo(action) {
  try {
    const response = yield axios.get('/api/demographics/gender');
    console.log(response.data);
    yield put({
      type: 'SET_GENDER_DEMO',
      payload: response.data,
    });
  } catch (error) {
    console.log(
      'There was a problem loading demographics. Please try again.',
      error
    );
  }
}
function* getSexualOrientationDemo(action) {
  try {
    const response = yield axios.get('/api/demographics/sexual-orientation');
    console.log(response.data);
    yield put({
      type: 'SET_SEX_DEMO',
      payload: response.data,
    });
  } catch (error) {
    console.log(
      'There was a problem loading demographics. Please try again.',
      error
    );
  }
}

function* demographicSaga() {
  yield takeLatest('GET_AGE_DEMO', getAgeDemo);
  yield takeLatest('GET_ETHNICITY_DEMO', getEthnicityDemo);
  yield takeLatest('GET_GENDER_DEMO', getGenderDemo);
  yield takeLatest('GET_SEX_DEMO', getSexualOrientationDemo);
}

export default demographicSaga;
