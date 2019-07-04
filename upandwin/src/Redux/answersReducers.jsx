const answers = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ANSWERS':
      return {
        ...state,
        answers: action.answers,
      };
    default:
      return state;
  }
};

export default answers;
