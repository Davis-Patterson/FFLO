import React, { useState } from 'react';
import Api from 'Utils/Api';
import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';

const Login: React.FC = () => {
  const { login } = Api();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authToken } = context;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password); // Use email instead of username
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
      <div>
        {authToken ? (
          <p>You are already logged in.</p>
        ) : (
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label> {/* Change label to 'Email' */}
              <input
                type='text'
                value={email} // Use email state
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type='submit'>Login</button>
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        )}
      </div>
      {authToken && <div>{authToken}</div>}
    </>
  );
};

export default Login;
