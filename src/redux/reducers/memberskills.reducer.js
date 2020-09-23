const memberskills = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SKILL':
      console.log(state);
      console.log(action.payload);
      const exists = state.filter((item) => {
        return item.id === action.payload.id;
      });
      console.log(exists);
      if (exists.length === 1) {
        return state;
      } else {
        return [...state, action.payload];
      }
    case 'REMOVE_SKILL':
      const newState = state.filter((skill) => {
        return skill.id !== action.payload;
      });
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default memberskills;
