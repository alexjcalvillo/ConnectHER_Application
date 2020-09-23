import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getProfile(action) {
  try {
    console.log(action.payload); // :id = action.payload.id ${}
    const response = yield axios.get(
      `/api/profile/about/${action.payload}`
      //  Data structure needed for payload on backend on req.body: { id }
    );
    console.log(response);
    yield put({
      type: 'SET_MY_PROFILE',
      payload: response.data[0],
    });
  } catch (error) {
    console.log('Profile failed to update. Please try again.', error);
  }
}

function* updateProfile(action) {
  try {
    console.log(action.payload); // :id = action.payload.id ${}
    yield axios.put(
      `/api/profile/about/${action.payload.id}`,
      action.payload.profile
    );
    yield axios.put(
      `/api/profile/user/${action.payload.id}`,
      action.payload.profile
    );
    yield put({
      type: 'FETCH_USER',
      payload: action.payload.id,
    });
  } catch (error) {
    console.log('Profile failed to update. Please try again.', error);
  }
}

function* getAllProfiles(action) {
  try {
    const response = yield axios.get(
      `/api/profile/members`
      //  Data structure needed for payload on backend on req.body: { id }
    );
    const responseSkills = yield axios.get(`/api/profile/memberskills`);
    console.log(responseSkills);
    const profiles = response.data.map((profile) => {
      return {
        ...profile,
        skills: responseSkills.data.filter((skill) => {
          return skill.user_id === profile.user_id;
        }),
      };
    });
    console.log(profiles);
    yield put({ type: 'SET_MEMBER_LISTINGS', payload: profiles });
    // yield put({ type: 'SET_MEMBER_LISTINGS', payload: response.data });
  } catch (error) {
    console.log('getAllProfiles failed. Please try again.', error);
  }
}

function* updateImageUrl(action) {
  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };
    // const data = {
    //   imageUrl: action.payload.avatarPath,
    // };
    console.log('Posting image url', action.payload);
    yield axios.put(
      `/api/imageurl/headshot-update/${action.payload.id}`,
      action.payload
    );
    yield put({
      type: 'FETCH_USER',
      payload: action.payload.id,
    });
  } catch (error) {
    console.log('Image Url post failed: ', error);
  }
}

function* profileSaga() {
  yield takeLatest('GET_PROFILE', getProfile);
  yield takeLatest('UPDATE_PROFILE', updateProfile);
  yield takeLatest('FETCH_ALL_PROFILES', getAllProfiles);
  yield takeLatest('UPDATE_USER_HEADSHOT', updateImageUrl);
}

export default profileSaga;
