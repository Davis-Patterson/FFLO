import React, { useState, useEffect, useRef } from 'react';
import AuthApi from 'Utilities/AuthApi';
import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import XIcon from 'Svgs/XIcon';
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/Utils/Auth.css';

const Auth: React.FC = () => {
  const { login, logout, register, forgot } = AuthApi();

  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authToken, showAuth, setShowAuth, language, handleLanguageChange } =
    context;

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
  const [isLoading, setIsLoading] = useState(false);

  const authContainerRef = useRef<HTMLDivElement>(null);

  // Translations
  const loginText = language === 'EN' ? 'Login' : 'Se Connecter';
  const registerText = language === 'EN' ? 'Sign Up' : "S'inscrire";
  const createAccountText =
    language === 'EN' ? 'Create Account' : 'Nouveau compte';
  const forgotText =
    language === 'EN' ? 'Forgot Password' : 'Mot de Passe Oublié';
  const signInText =
    language === 'EN'
      ? 'Please sign in to continue'
      : 'Veuillez vous connecter pour continuer';
  const signUpText =
    language === 'EN'
      ? 'Create an account to continue'
      : 'Créez un compte pour continuer';
  const firstNamePlaceholder = language === 'EN' ? 'First Name*' : 'Prénom*';
  const lastNamePlaceholder =
    language === 'EN' ? 'Last Name' : 'Nom de Famille';
  const logoutText = language === 'EN' ? 'Logout' : 'Déconnexion';
  const logoutHeader = language === 'EN' ? 'Goodbye' : 'Au Revoir';
  const emailPlaceholder = language === 'EN' ? 'Email' : 'Courriel';
  const passwordPlaceholder = language === 'EN' ? 'Password' : 'Mot de Passe';
  const confirmPasswordPlaceholder =
    language === 'EN' ? 'Confirm Password' : 'Confirmer Mot de Passe';
  const registerButtonText = language === 'EN' ? 'Register' : 'Registre';
  const forgotDescText =
    language === 'EN'
      ? 'Enter your email to reset your password'
      : 'Entrez votre email pour réinitialiser votre mot de passe';
  const resetText = language === 'EN' ? 'Reset' : 'Réinitialiser';
  const loginFailedText =
    language === 'EN'
      ? 'Login failed. Please check your credentials.'
      : "La connexion a échoué. Veuillez vérifier vos informations d'identification.";
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
    const handleClickOutside = (event: MouseEvent) => {
      if (
        authContainerRef.current &&
        !authContainerRef.current.contains(event.target as Node)
      ) {
        setShowAuth(false);
        setShowLogin(true);
        setShowRegister(false);
        setShowForgot(false);
      }
    };

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAuth, setShowAuth]);

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
    setIsLoading(true);
    try {
      const response = await login(email, password);
      if (response && response.success) {
        setShowAuth(false);
      } else {
        setErrorMessage(loginFailedText);
      }
    } catch (error) {
      setErrorMessage(loginFailedText);
    }

    setIsLoading(false);
    setTimeout(() => setErrorMessage(''), 3000);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register(firstName, lastName, email, password, password2);
      setShowRegister(false);
      setShowLogin(true);
      await login(email, password);
      setShowAuth(false);
    } catch (error) {
      setErrorMessage(registrationFailedText);
    }
    setIsLoading(false);
    setTimeout(() => setErrorMessage(''), 3000);
  };

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await forgot(email);
      setShowAuth(false);
      setShowForgot(false);
      setShowLogin(true);
    } catch (error) {
      setErrorMessage(resetFailedText);
    }
    setIsLoading(false);
    setTimeout(() => setErrorMessage(''), 3000);
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      setShowAuth(false);
    } catch (error) {
      setErrorMessage('Logout failed.');
    }
    setIsLoading(false);
    setTimeout(() => setErrorMessage(''), 3000);
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
    setShowLogin(true);
    setShowRegister(false);
    setShowForgot(false);
  };

  return (
    <>
      {showAuth && (
        <div className='auth-overlay'>
          <section
            ref={authContainerRef}
            className={`auth-container ${showAuth ? 'fade-in' : 'fade-out'}`}
          >
            <div className='auth-language-toggle'>
              {language === 'FR' && (
                <p
                  className='auth-lang-toggle'
                  onClick={() => handleLanguageChange('EN')}
                >
                  EN
                </p>
              )}
              {language === 'EN' && (
                <p
                  className='auth-lang-toggle'
                  onClick={() => handleLanguageChange('FR')}
                >
                  FR
                </p>
              )}
            </div>
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
                  {isLoading ? <LinearProgress color='inherit' /> : logoutText}
                </button>
              </>
            )}
            {!authToken && showLogin && (
              <>
                <div className='login-header'>
                  <TitleFlair className='auth-flair-left' />
                  <p className='auth-header-text'>{loginText}</p>
                  <TitleFlair className='auth-flair-right' />
                </div>
                <p className='auth-header-subtext'>{signInText}</p>
                <form onSubmit={handleLogin}>
                  <div>
                    <input
                      type='text'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder={emailPlaceholder}
                      className='auth-input'
                    />
                  </div>
                  <div>
                    <input
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder={passwordPlaceholder}
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
                    {isLoading ? <LinearProgress color='inherit' /> : loginText}
                  </button>
                  <div className='auth-footer'>
                    <p
                      className='auth-footer-text'
                      onMouseDown={(e) => handleShowRegister(e)}
                    >
                      {createAccountText}
                    </p>
                    <p
                      className='auth-footer-text'
                      onMouseDown={(e) => handleShowForgot(e)}
                    >
                      {forgotText}
                    </p>
                  </div>
                </form>
              </>
            )}
            {!authToken && showRegister && (
              <>
                <div className='login-header'>
                  <TitleFlair className='auth-flair-left' />
                  <p className='auth-header-text'>{registerText}</p>
                  <TitleFlair className='auth-flair-right' />
                </div>
                <p className='auth-header-subtext'>{signUpText}</p>
                <form onSubmit={handleRegister}>
                  <div className='auth-name-inputs'>
                    <div>
                      <input
                        type='text'
                        name='fname'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder={firstNamePlaceholder}
                        className='auth-name-input first'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        name='lname'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder={lastNamePlaceholder}
                        className='auth-name-input last'
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type='text'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder={emailPlaceholder + '*'}
                      className='auth-input'
                    />
                  </div>
                  <div>
                    <input
                      type='password'
                      name='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder={passwordPlaceholder + '*'}
                      className='auth-input'
                    />
                  </div>
                  <div>
                    <input
                      type='password'
                      name='password'
                      value={password2}
                      onChange={(e) => setPassword2(e.target.value)}
                      required
                      placeholder={confirmPasswordPlaceholder + '*'}
                      className='auth-input'
                    />
                  </div>
                  {!registerButtonActive && (
                    <p className='auth-required'>{requiredText}</p>
                  )}
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
                    {isLoading ? (
                      <LinearProgress color='inherit' />
                    ) : (
                      registerButtonText
                    )}
                  </button>
                  <div className='auth-footer'>
                    <p
                      className='auth-footer-text'
                      onMouseDown={(e) => handleShowLogin(e)}
                    >
                      {loginText}
                    </p>
                    <p
                      className='auth-footer-text'
                      onMouseDown={(e) => handleShowForgot(e)}
                    >
                      {forgotText}
                    </p>
                  </div>
                </form>
              </>
            )}
            {!authToken && showForgot && (
              <>
                <div className='login-header'>
                  <TitleFlair className='auth-flair-left' />
                  <p className='auth-header-text'>{loginText}</p>
                  <TitleFlair className='auth-flair-right' />
                </div>
                <p className='auth-header-subtext'>{forgotDescText}</p>
                <form onSubmit={handleForgot}>
                  <div>
                    <input
                      type='text'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder={emailPlaceholder}
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
                    {isLoading ? <LinearProgress color='inherit' /> : resetText}
                  </button>
                  <div className='auth-footer'>
                    <p
                      className='auth-footer-text'
                      onMouseDown={(e) => handleShowLogin(e)}
                    >
                      {loginText}
                    </p>
                    <p
                      className='auth-footer-text'
                      onMouseDown={(e) => handleShowRegister(e)}
                    >
                      {createAccountText}
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
