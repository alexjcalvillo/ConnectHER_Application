import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* memberSaga(action) {
  try {
    console.log('access level made it to saga', action.payload);
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });
    yield axios.post('/api/user/level', action.payload);
  } catch (error) {
    console.log('member level failed:', error);
  }
}

function* memberLevel() {
  yield takeLatest('MEMBER_LEVEL', memberSaga);
}

export default memberLevel;
