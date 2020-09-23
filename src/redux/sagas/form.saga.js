import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* postForm(action) {
  try {
    yield axios.post(
      `/api/form/register/about/${action.payload.id}`,
      action.payload.form.about
    ); // { form: props.store.form, id: props.store.user.id }
    yield axios.post(
      `/api/form/register/demographic/${action.payload.id}`,
      action.payload.form.demo
    );
    const skills = action.payload.skills.map((skills) => {
      return skills.id;
    });
    yield axios.post(`/api/skills/add`, { user_id: action.payload.id, skills });
    yield put({
      type: 'FETCH_USER',
      payload: action.payload.id,
    });
  } catch (error) {
    console.log('Form failed to submit. Please try again.', error);
  }
}

function* formSaga() {
  yield takeLatest('FINAL_SUBMIT', postForm);
}

export default formSaga;
