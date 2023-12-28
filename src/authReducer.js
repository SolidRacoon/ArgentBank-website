// reducers/authReducer.js
const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
