import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postPersonality(action) {
  console.log('made it to survey');
  console.log('payload', action.payload);
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.post(`/api/form/personality`, action.payload);
    console.log(response.data);
    yield put({
      type: 'SET_PERSONALITY',
    });
  } catch (err) {
    console.log('PERSONALITY ERROR, err');
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem getting your movies!! Please try again.',
    });
  }
}

function* choresSaga() {
  yield takeLatest('SUBMIT_PERSONALITY', postPersonality);
}

export default choresSaga;
