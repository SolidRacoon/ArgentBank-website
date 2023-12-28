// src/api/userApi.js

export const loginUser = async (email, password) => {
  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const responseData = await response.json();
  const { user, token } = responseData;

  if (!response.ok) {
    throw new Error(`Login failed: ${responseData.message}`);
  }
localStorage.setItem('userAuthData', JSON.stringify(responseData));
  return { user, token };
};
