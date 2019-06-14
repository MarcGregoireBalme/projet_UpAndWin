const users = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        pseudo: action.pseudo,
        email: action.email,
        password: action.password,
        confpassword: action.password,
      };
    case 'CHECK_USER':
      return {
        ...state,
        pseudo: action.pseudo,
        password: action.password,
      };
    default:
      return state;
  }
};

export default users;
