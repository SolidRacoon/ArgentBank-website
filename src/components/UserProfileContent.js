// UserProfileContent.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../actions';

const UserProfileContent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
 // État local pour gérer l'édition
  const [isEditing, setEditing] = useState(false);
  const [editedUserName, setEditedUserName] = useState(user.username);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const tokenData = JSON.parse(window.localStorage.getItem("userAuthData"));

        if (!tokenData || !tokenData.body || !tokenData.body.token) {
          // Gérer l'absence de token, peut-être déconnecter l'utilisateur
          return;
        }

        const token = tokenData.body.token;

        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const responseData = await response.json();
        localStorage.setItem('userName', responseData.body.userName);
        localStorage.setItem('firstName', responseData.body.firstName);
        localStorage.setItem('lastName', responseData.body.lastName);

        dispatch(getUserProfile(responseData.body));
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    };

    fetchUserProfile();
  }, [dispatch]);

  const handleEditClick = () => {
    setEditing(true);
  };

const handleSaveClick = () => {
    // Ici tu peux envoyer une requête pour sauvegarder les modifications du nom d'utilisateur
    // et mettre à jour l'état local en conséquence.

    // Après avoir sauvegardé, tu peux revenir en mode non édition.
    setEditing(false);
  };

  return (
    <main className="main bg-dark">
     {isEditing ? (
        <div className="header">
          <h2>Edit User Info</h2>
          <label>User Name: </label>

          <input
            type="text"
            value={localStorage.getItem('userName')}
            onChange={(e) => setEditedUserName(e.target.value)}
          />
          <br/>
          <br/>
          <label>First Name: </label>
          <input type="text" value={localStorage.getItem('firstName')} disabled />
          <br/>
          <br/>
          <label>Last Name: </label>
          <input type="text" value={localStorage.getItem('lastName')} disabled />
          <br/>
          <br/>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back {localStorage.getItem('userName')}!</h1>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default UserProfileContent;
