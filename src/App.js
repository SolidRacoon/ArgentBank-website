// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Importe le store Redux
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import UserProfile from './pages/UserProfile';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
