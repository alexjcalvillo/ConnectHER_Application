import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getIndustries() {
  console.log('made it to the industry saga');
  const response = yield axios.get('/api/industry/all');
  yield put({
    type: 'SET_INDUSTRIES',
    categories: response.data,
  });
}

export default function* industriesSaga() {
  yield takeLatest('GET_INDUSTRIES', getIndustries);
}
