import React, { useState, useEffect } from 'react';
import Api from 'Utils/Api';
import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import 'Styles/Utils/Auth.css';
import TitleFlair from 'Svgs/TitleFlair';
import XIcon from 'Svgs/XIcon';

const Auth: React.FC = () => {
  const { login, logout, register, forgot } = Api();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authToken, showAuth, setShowAuth, language } = context;

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [loginButtonActive, setLoginButtonActive] = useState(false);
  const [registerButtonActive, setRegisterButtonActive] = useState(false);
  const [forgotButtonActive, setForgotButtonActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  // Translations
  const loginText = language === 'EN' ? 'Login' : 'Se Connecter';
  const registerText = language === 'EN' ? 'Create Account' : 'Créer un Compte';
  const forgotText =
    language === 'EN' ? 'Forgot Password' : 'Mot de Passe Oublié';
  const signInText =
    language === 'EN'
      ? 'Please sign in to continue'
      : 'Veuillez vous connecter pour continuer';
  const logoutText = language === 'EN' ? 'Logout' : 'Déconnexion';
  const logoutHeader = language === 'EN' ? 'Goodbye' : 'Au Revoir';
  const emailPlaceholder = language === 'EN' ? 'Email' : 'Courriel';
  const passwordPlaceholder = language === 'EN' ? 'Password' : 'Mot de passe';
  const confirmPasswordPlaceholder =
    language === 'EN' ? 'Confirm Password' : 'Confirmer Mot de passe';
  const registrationFailedText =
    language === 'EN'
      ? 'Registration failed. Please try again.'
      : "L'enregistrement a échoué. Veuillez réessayer.";
  const resetFailedText =
    language === 'EN'
      ? 'Reset failed. Please try again.'
      : 'Échec de la réinitialisation. Veuillez réessayer.';
  const requiredText = language === 'EN' ? '*required' : '*obligatoire';

  useEffect(() => {
    if (showAuth) {
      document.body.classList.add('auth-open');
    } else {
      document.body.classList.remove('auth-open');
    }
  }, [showAuth]);

  useEffect(() => {
    const isLoginFormEmpty = !email.trim() || !password.trim();
    setLoginButtonActive(!isLoginFormEmpty);

    const isRegisterFormEmpty =
      !firstName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !password2.trim();
    setRegisterButtonActive(!isRegisterFormEmpty);

    const isForgotFormEmpty = !email.trim();
    setForgotButtonActive(!isForgotFormEmpty);
  }, [firstName, lastName, email, password, password2]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      if (response && response.success) {
        setShowAuth(false);
      } else {
        setErrorMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials.');
    }

    setTimeout(() => setErrorMessage(''), 3000);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(firstName, lastName, email, password, password2);
      setShowRegister(false);
      setShowLogin(true);
      await login(email, password);
      setShowAuth(false);
    } catch (error) {
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await forgot(email);
      setShowAuth(false);
    } catch (error) {
      setErrorMessage('Reset failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setShowAuth(false);
    } catch (error) {
      setErrorMessage('Logout failed.');
    }
  };

  const handleShowLogin = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowRegister(false);
    setShowForgot(false);
    setShowLogin(true);
  };

  const handleShowRegister = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowLogin(false);
    setShowForgot(false);
    setShowRegister(true);
  };

  const handleShowForgot = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowLogin(false);
    setShowRegister(false);
    setShowForgot(true);
  };

  const handleClose = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowAuth(false);
  };

  return (
    <>
      {showAuth && (
        <div className='auth-overlay'>
          <section
            className={`auth-container ${showAuth ? 'fade-in' : 'fade-out'}`}
          >
            <XIcon
              className='auth-x-icon'
              onMouseDown={(e) => handleClose(e)}
            />
            {authToken && (
              <>
                <div className='login-header'>
                  <TitleFlair className='auth-flair-left' />
                  <p className='auth-header-text'>{logoutHeader}</p>
                  <TitleFlair className='auth-flair-right' />
                </div>
                <button className='submit-button' onClick={handleLogout}>
                  {logoutText}
                </button>
              </>
            )}
            {!authToken && showLogin && (
              <>
                <div className='login-header'>
                  <TitleFlair className='auth-flair-left' />
                  <p className='auth-header-text'>Login</p>
                  <TitleFlair className='auth-flair-right' />
                </div>
                <p className='auth-header-subtext'>
                  Please sign in to continue
                </p>
                <form onSubmit={handleLogin}>
                  <div>
                    {/* <label>Email:</label> */}
                    <input
                      type='text'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder='Email'
                      className='auth-input'
                    />
                  </div>
                  <div>
                    {/* <label>Password:</label> */}
                    <input
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder='Password'
                      className='auth-input'
                    />
                  </div>
                  {errorMessage && (
                    <p className='error-message'>{errorMessage}</p>
                  )}
                  <button
                    type='submit'
                    className={`${
                      loginButtonActive ? 'submit-button' : 'inactive-button'
                    }`}
                    disabled={!loginButtonActive}
                  >
                    Login
                  </button>
                  <div className='auth-footer'>
                    <p
                      className='auth-footer-text'
                      onMouseDown={(e) => handleShowRegister(e)}
                    >
                      Create Account
                    </p>
                    <p
                      className='auth-footer-text'
                      onMouseDown={(e) => handleShowForgot(e)}
                    >
                      Forgot Password
                    </p>
                  </div>
                </form>
              </>
            )}
            {!authToken && showRegister && (
              <>
                <div className='login-header'>
                  <TitleFlair className='auth-flair-left' />
                  <p className='auth-header-text'>Sign Up</p>
                  <TitleFlair className='auth-flair-right' />
                </div>
                <p className='auth-header-subtext'>
                  Create an account to continue
                </p>
                <form onSubmit={handleRegister}>
                  <div className='auth-name-inputs'>
                    <div>
                      {/* <label>Email:</label> */}
                      <input
                        type='text'
                        name='fname'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder='First Name*'
                        className='auth-name-input first'
                      />
                    </div>
                    <div>
                      {/* <label>Email:</label> */}
                      <input
                        type='text'
                        name='lname'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Last Name'
                        className='auth-name-input last'
                      />
                    </div>
                  </div>
                  <div>
                    {/* <label>Email:</label> */}
                    <input
                      type='text'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder='Email*'
                      className='auth-input'
                    />
                  </div>
                  <div>
                    {/* <label>Password:</label> */}
                    <input
                      type='password'
                      name='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder='Password*'
                      className='auth-input'
                    />
                  </div>
                  <div>
                    {/* <label>Password:</label> */}
                    <input
                      type='password'
                      name='password'
                      value={password2}
                      onChange={(e) => setPassword2(e.target.value)}
                      required
                      placeholder='Confirm Password*'
                      className='auth-input'
                    />
                  </div>
                  <p className='auth-required'>*required</p>
                  {errorMessage && (
                    <p className='error-message'>{errorMessage}</p>
                  )}
                  <button
                    type='submit'
                    className={`${
                      registerButtonActive ? 'submit-button' : 'inactive-button'
                    }`}
                    disabled={!registerButtonActive}
                  >
                    Register
                  </button>
                  <div className='auth-footer'>
                    <p
                      className='auth-footer-text'
                      onMouseDown={(e) => handleShowLogin(e)}
                    >
                      Login
                    </p>
                    <p
                      className='auth-footer-text'
                      onMouseDown={(e) => handleShowForgot(e)}
                    >
                      Forgot Password
                    </p>
                  </div>
                </form>
              </>
            )}
            {!authToken && showForgot && (
              <>
                <div className='login-header'>
                  <TitleFlair className='auth-flair-left' />
                  <p className='auth-header-text'>Login</p>
                  <TitleFlair className='auth-flair-right' />
                </div>
                <p className='auth-header-subtext'>
                  Enter your email to reset your password
                </p>
                <form onSubmit={handleForgot}>
                  <div>
                    {/* <label>Email:</label> */}
                    <input
                      type='text'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder='Email'
                      className='auth-input'
                    />
                  </div>
                  {errorMessage && (
                    <p className='error-message'>{errorMessage}</p>
                  )}
                  <button
                    type='submit'
                    className={`${
                      forgotButtonActive ? 'submit-button' : 'inactive-button'
                    }`}
                    disabled={!forgotButtonActive}
                  >
                    Reset
                  </button>
                  <div className='auth-footer'>
                    <p
                      className='auth-footer-text'
                      onMouseDown={(e) => handleShowLogin(e)}
                    >
                      Login
                    </p>
                    <p
                      className='auth-footer-text'
                      onMouseDown={(e) => handleShowRegister(e)}
                    >
                      Sign Up
                    </p>
                  </div>
                </form>
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default Auth;
