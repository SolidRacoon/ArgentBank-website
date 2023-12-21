// reducers.js

import { combineReducers } from 'redux';

const initialState = {
  user: null, // Les infos de l'utilisateur connecté
  isLoggedIn: false, // Indique si l'utilisateur est connecté
  // ... d'autres états de l'application si nécessaire
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
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
  // ... d'autres reducers si nécessaire
});

export default rootReducer;
