export default (state = null, action) => {
  switch (action.type) {
    case 'SELECT_LIBRARY':
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};
