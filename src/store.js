// store.js

import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers'; // Tu devras créer le fichier reducers.js
import authReducer from './authReducer'; // Importe le reducer d'authentification

// Intègre le reducer d'authentification dans le rootReducer
const rootReducerWithAuth = combineReducers({
  auth: authReducer,
  // ... d'autres reducers si nécessaire
});

const store = createStore(rootReducerWithAuth);

export default store;
