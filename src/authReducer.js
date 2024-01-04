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
        username: storedUserName || action.payload.user.username,
        lastName: storedName || action.payload.user.lastName,
        firstName: storedFirstName || action.payload.user.firstName,
      };
    case 'LOGOUT':
localStorage.clear();
      return {
        ...state,
        user: null,
        token: null,
        isLoggedIn: false,
        username: null,
        firstName: null,
        lastName:null,

      };

       case 'UPDATE_USERNAME':
      return {
        ...state,
        username: action.payload.newUsername,
      };

    default:
      return state;
  }
};

export default authReducer;
