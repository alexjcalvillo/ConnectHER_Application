const adminHandleGraphSwitch = (data) => {
  let selectedGraph;
  switch (data.type) {
    case 'Age':
      selectedGraph = {
        type: data.title,
        reducer: data.reducer.age,
      };
      break;
    case 'Ethnicity':
      selectedGraph = {
        type: data.title,
        reducer: data.reducer.ethnicity,
      };
      break;
    case 'Gender Identity':
      selectedGraph = {
        type: data.title,
        reducer: data.reducer.gender,
      };
      break;
    case 'Sexual Orientation':
      selectedGraph = {
        type: data.title,
        reducer: data.reducer.sexualOrientation,
      };
      break;
  }

  return selectedGraph;
};

export default adminHandleGraphSwitch;
