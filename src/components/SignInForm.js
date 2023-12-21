// src/components/SignInForm.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions';
import { loginUser } from '../api/userApi';
import { useNavigate } from 'react-router-dom'; // Importe useHistory

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    try {
      const user = await loginUser(email, password);
      dispatch(login(user));
      navigate('/UserProfile'); // Redirige vers la page UserProfile après connexion réussie
    } catch (error) {
      console.error('Login error:', error.message);
      // Gère l'échec de la connexion ici
    }
  };
  return (
    <form onSubmit={handleSubmit}>
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
