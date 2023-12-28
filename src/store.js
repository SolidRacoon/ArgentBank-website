// store.js
import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers';
import authReducer from './authReducer';

// Récupère le token depuis le localStorage et le parse en tant qu'objet JSON
const persistedToken = window.localStorage.getItem("userAuthData");
const initialTokenState = persistedToken ? JSON.parse(persistedToken).body.token : null;

const initialState = {
  auth: {
    user: null,
    token: initialTokenState,
    isLoggedIn: !!initialTokenState,
  },
  // ... d'autres états initiaux si nécessaire
};

const rootReducerWithAuth = combineReducers({
  auth: authReducer,
  // ... d'autres reducers si nécessaire
});

const store = createStore(
  rootReducerWithAuth,
  initialState, // Utilise l'état initial ici
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  const state = store.getState();
  console.log('Current auth state in store:', state.auth);
});

export default store;
