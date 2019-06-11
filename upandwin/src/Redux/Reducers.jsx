const users = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        pseudo: action.pseudo,
        email: action.email,
      };
    default:
      return state;
  }
};

export default users;
