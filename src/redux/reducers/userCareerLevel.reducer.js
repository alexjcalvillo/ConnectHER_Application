const userCareerLevel = (state = [], action) => {
  console.log('made it to the userCareer reducer', action);
  switch (action.type) {
    case 'SET_USER_CAREER':
      return action.payload;
    default:
      return state;
  }
};

export default userCareerLevel;
