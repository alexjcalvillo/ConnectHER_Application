const skillsholder = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SKILLS':
      console.log(action.payload);
      return {
        leadership: action.payload[0],
        business: action.payload[1],
        marketing: action.payload[2],
        technical: action.payload[3],
        finance: action.payload[4],
        legal: action.payload[5],
        health: action.payload[6],
        hr: action.payload[7],
        education: action.payload[8],
        creatives: action.payload[9],
        communityAdvocacy: action.payload[10],
        civicEngagement: action.payload[11],
      };
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default skillsholder;
