const users = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        alias: action.alias,
        email: action.email,
        password: action.password,
      };
    case 'CHECK_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default users;
