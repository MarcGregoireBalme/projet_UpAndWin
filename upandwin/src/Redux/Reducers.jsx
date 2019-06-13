const users = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        pseudo: action.pseudo,
        mail: action.mail,
        password: action.password,
      };
    case 'CHECK_USER':
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,

      };
    default:
      return state;
  }
};

export default users;
