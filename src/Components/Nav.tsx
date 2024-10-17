import React from 'react';
import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import 'Styles/Nav.css';
import ffloLogo from 'Assets/Logos/fflo-logo.webp';

const Nav: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }

  const { setShowAuth, language, handleLanguageChange } = context;

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
          <img src={ffloLogo} alt='FFLO Logo' className='logo-img' />
        </div>
        <div className='nav-profile'>
          <p className='login-text' onMouseDown={(e) => handleLogin(e)}>
            {loginText}
          </p>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
