// UserProfile.js
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import UserProfileContent from '../components/UserProfileContent';

const UserProfile = () => {
  return (
    <div>
      <NavBar />
       <UserProfileContent />
      <Footer />
    </div>
  );
};

export default UserProfile;
