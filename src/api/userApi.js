export const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const responseData = await response.json();

    console.log('Login Response:', responseData); // Ajoutez ce log pour vérifier la réponse

    if (!response.ok) {
      throw new Error(`Login failed: ${responseData.message}`);
    }

    return responseData;
  } catch (error) {
    console.error('Login Error:', error.message);
    throw error;
  }
};
