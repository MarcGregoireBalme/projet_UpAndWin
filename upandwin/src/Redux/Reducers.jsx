const users = (state = { user_id: null }, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        alias: action.alias,
        email: action.email,
        password: action.password,
      };
    case 'LOGIN':
      return {
        ...state,
        ...action.payload,
      };
    case 'LOGOUT':
      return {
        user_id: null,
      };
    default:
      return state;
  }
};

export default users;
