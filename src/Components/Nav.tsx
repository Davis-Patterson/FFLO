import React from 'react';
import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link } from 'react-router-dom';
import ffloLogo from 'Assets/Logos/fflo-logo.webp';
import UserIcon from 'Svgs/UserIcon';
import 'Styles/Nav.css';

const Nav: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }

  const { setShowAuth, authUser, language, handleLanguageChange } = context;

  const handleLogin = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    setShowAuth(true);
  };

  const loginText = language === 'EN' ? 'Login' : 'Se Connecter';

  return (
    <nav className='nav-container'>
      <section className='nav-header'>
        {/* Language Toggle */}
        <div className='nav-language'>
          <div className='language-toggle'>
            <p
              className={`en-toggle ${language === 'EN' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('EN')}
            >
              EN
            </p>
            <p
              className={`fr-toggle ${language === 'FR' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('FR')}
            >
              FR
            </p>
          </div>
        </div>

        <div className='nav-logo'>
          <Link to='/'>
            <img src={ffloLogo} alt='FFLO Logo' className='logo-img' />
          </Link>
        </div>

        <div className='nav-profile'>
          {!authUser && (
            <p className='login-text' onMouseDown={(e) => handleLogin(e)}>
              {loginText}
            </p>
          )}
          {authUser && (
            <Link to='/profile'>
              {authUser.image ? (
                <img
                  src={authUser.image}
                  alt='User'
                  className='nav-user-image'
                />
              ) : (
                <div>
                  <UserIcon className='nav-user-icon' />
                </div>
              )}
            </Link>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Nav;
