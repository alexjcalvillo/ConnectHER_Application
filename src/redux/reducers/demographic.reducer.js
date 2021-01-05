import { combineReducers } from 'redux';

const age = (state = [], action) => {
  switch (action.type) {
    case 'SET_AGE_DEMO':
      return { ...action.payload };
    default:
      return state;
  }
};
const ethnicity = (state = [], action) => {
  switch (action.type) {
    case 'SET_ETHNICITY_DEMO':
      return { ...action.payload };
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default combineReducers({
  age,
  ethnicity,
});
