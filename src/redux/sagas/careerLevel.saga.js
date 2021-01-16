import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getCareerLevel() {
  console.log('made it to the career saga');
  const response = yield axios.get('/api/career/all');
  yield put({
    type: 'SET_CAREER_LEVELS',
    careerLevel: response.data,
  });
}

// function* postMultidata(action) {
//   console.log('multidata saga:', action.payload);
//   try {
//     yield axios.post('/api/industry/user', action.payload);
//     yield put({ type: 'SET_SUBMITTED', payload: action.payload });
//   } catch (error) {
//     console.log('Everything failed', error);
//   }
// }

export default function* careerSaga() {
  yield takeLatest('GET_CAREER_LEVELS', getCareerLevel);
  // yield takeLatest('POST_MULTIDATA', postMultidata);
}
