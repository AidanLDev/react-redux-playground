const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      console.log('DEPOSIT', { state }, { action });
      return state + action.payload;
    case 'WITHDRAW':
      console.log('WITHDRAW', { state }, { action });
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
