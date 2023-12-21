// store.js

import { createStore } from 'redux';
import rootReducer from './reducers'; // Tu devras créer le fichier reducers.js

const store = createStore(rootReducer);

export default store;
