import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* postForm(action) {
  console.log('made it to registration form saga', action);
  try {
    const id = yield put({
      type: 'GET_USER',
    });
    yield put({
      type: 'REGISTER',
      payload: action.payload.form.register,
    });
    yield axios.post(
      `/api/form/register/about/${id}`,
      action.payload.form.about
    ); // { form: props.store.form, id: props.store.user.id }
    yield axios.post(
      `/api/form/register/demographic/${id}`,
      action.payload.form.demo
    );
    const skills = action.payload.skills.map((skills) => {
      return skills.id;
    });
    yield axios.post(`/api/skills/add`, { user_id: id, skills });
    yield put({
      type: 'FETCH_USER',
      payload: id,
    });
  } catch (error) {
    console.log('Form failed to submit. Please try again.', error);
  }
}

function* formSaga() {
  yield takeLatest('FINAL_SUBMIT', postForm);
}

export default formSaga;
