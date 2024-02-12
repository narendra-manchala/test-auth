// App.js
import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
    //   axios.post('/api/refresh_token', { refreshToken })
    //     .then(response => {
    //       const { token } = response.data;
    //       setToken(token);
    //       setLoggedIn(true);
    //       localStorage.setItem('token', token); // Store token in local storage
    //     })
    //     .catch(error => console.error(error));
    }
  }, []);

  const handleLogin = () => {
    // axios.post('/api/login', { username: 'username', password: 'password' })
    //   .then(response => {
    //     const { token, refreshToken } = response.data;
    //     localStorage.setItem('token', token); // Store token in local storage
    //     localStorage.setItem('refreshToken', refreshToken); // Store refresh token in local storage
    //     setToken(token);
    //     setLoggedIn(true);
    //   })
    //   .catch(error => console.error(error));

        const token='xyz';
        localStorage.setItem('token', token); // Store token in local storage
        localStorage.setItem('refreshToken', 'abc-refresh'); // Store refresh token in local storage
        setToken(token);
        setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    localStorage.removeItem('refreshToken'); // Remove refresh token from local storage
    setToken(null);
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Welcome! You are logged in.</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please log in.</h1>
          <LoginForm handleLogin={handleLogin} />
          {/* <button onClick={handleLogin}>Login</button> */}
        </div>
      )}
    </div>
  );
}

export default Login;
