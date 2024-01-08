
import { useDispatch } from 'react-redux';
import { login } from '../actions';
import { loginUser } from '../api/userApi';
import { getUserProfile } from '../actions'; // Importez la nouvelle action
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';


const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const [authError, setAuthError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailInput = event.target.elements.username;
    const passwordInput = event.target.elements.password;

    if (!emailInput || !passwordInput) {
      console.error('Email or password input not found');
      return;
    }

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      const { user, token } = await loginUser(email, password);
      dispatch(login({ user, token }));

      // Chargez immédiatement les données du profil
      dispatch(getUserProfile(user));

      navigate('/UserProfile');
    } catch (error) {
       console.error('Login error:', error.message);
  console.log('Error object:', error); // Ajout de cette ligne
  setAuthError('Erreur d\'authentification. Vérifiez votre identifiant et votre mot de passe.');
      // Gérer l'échec de la connexion ici
    }
  };


  return (
    <form onSubmit={handleSubmit}>
    {authError && <div style={{ color: 'red' }}>{authError}</div>}
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
