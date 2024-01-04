// actions.js
export const login = (user, token) => ({
  type: 'LOGIN',
  payload: { user, token },
});

export const logout = () => ({
  type: 'LOGOUT',
});

// actions.js
export const getUserProfile = (userData) => ({
  type: 'GET_USER_PROFILE',
  payload: { userData },
});

export const updateUsername = (newUsername) => ({
  type: 'UPDATE_USERNAME',
  payload: {
    newUsername,
  },
});

export const updateUserProfile = (newProfileData) => ({
  type: 'UPDATE_USER_PROFILE',
  payload: { newProfileData },
});
