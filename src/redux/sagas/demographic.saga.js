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

function* demographicSaga() {
  yield takeLatest('GET_AGE_DEMO', getAgeDemo);
  yield takeLatest('GET_ETHNICITY_DEMO', getEthnicityDemo);
}

export default demographicSaga;
