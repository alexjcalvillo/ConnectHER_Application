const memberLevel = (state = [], action) => {
  switch (action.type) {
    case 'SET_LEVEL_LIST':
      return action.categories;
    default:
      return state;
  }
};

export default memberLevel;
