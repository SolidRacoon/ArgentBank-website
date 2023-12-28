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
