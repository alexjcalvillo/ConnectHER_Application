import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getIndustries() {
  console.log('made it to the industry saga');
  const response = yield axios.get('/api/industry/all');
  yield put({
    type: 'SET_INDUSTRIES',
    industries: response.data,
  });
}

function* postMultidata(action) {
  console.log('multidata saga:', action.payload);
  try {
    yield axios.post('/api/industry/user', action.payload);
    yield put({ type: 'SET_SUBMITTED', payload: action.payload });
  } catch (error) {
    console.log('Everything failed', error);
  }
}

export default function* industriesSaga() {
  yield takeLatest('GET_INDUSTRIES', getIndustries);
  yield takeLatest('POST_MULTIDATA', postMultidata);
}
