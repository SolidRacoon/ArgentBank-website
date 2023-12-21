// SignInPage.jsx

import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SignInForm from '../components/SignInForm';

const SignInPage = () => {
  const handleSignIn = (formData) => {
    // Gère les données du formulaire ici (formData)
    console.log(formData);
  };

  return (
    <div>
      <NavBar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          {/* Utilise SignInForm et passe handleSignIn comme prop */}
          <SignInForm onSubmit={handleSignIn} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignInPage;
