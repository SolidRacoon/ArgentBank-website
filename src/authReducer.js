// reducers/authReducer.js
const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  username: null,
  firstName: null,
  lastName:null,

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      const storedUserName = localStorage.getItem('userName');
      const storedFirstName = localStorage.getItem('firstName');
      const storedName = localStorage.getItem('lastName');
      return {
        ...state,
        user: action.payload.user,
        token: window.localStorage.getItem("userAuthData"),
        isLoggedIn: true,
        username: storedUserName || user.username,
        lastName: storedName || user.lastName,
        firstName: storedFirstName || user.firstName,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isLoggedIn: false,
        username: null,
        firstName: null,
        lastName:null,

      };
    default:
      return state;
  }
};

export default authReducer;
