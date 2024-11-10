import React from 'react';
import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link, useLocation } from 'react-router-dom';
import ffloLogo from 'Assets/Logos/fflo-logo.webp';
import 'Styles/Nav.css';
import LinkIcon from 'Svgs/LinkIcon';

const Nav: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }

  const { setShowAuth, authUser, language, handleLanguageChange } = context;

  const location = useLocation();

  const handleLogin = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    setShowAuth(true);
  };

  // translations
  const loginText = language === 'EN' ? 'Login' : 'Se Connecter';
  const homeText = language === 'EN' ? 'Home' : 'Maison';
  const libraryText = language === 'EN' ? 'Library' : 'Bibliothèque';
  const aboutText = language === 'EN' ? 'About' : 'À propos';
  const contactText = language === 'EN' ? 'Contact' : 'Contact';
  const ffloMainText = language === 'EN' ? 'FFLO' : 'Contact';
  const flairText = language === 'EN' ? 'NEW' : 'NEW';

  return (
    <nav className='nav-container'>
      <section className='nav-header'>
        <div className='nav-language'>
          <div className='language-toggle'>
            <p
              className={`en-toggle ${language === 'EN' ? 'active' : ''}`}
              onMouseDown={(e) => handleLanguageChange(e, 'EN')}
            >
              EN
            </p>
            <p
              className={`fr-toggle ${language === 'FR' ? 'active' : ''}`}
              onMouseDown={(e) => handleLanguageChange(e, 'FR')}
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
              {authUser.image && authUser.image.image_small ? (
                <div className='nav-user-image-container'>
                  <img
                    src={authUser.image.image_small}
                    alt='User'
                    className='nav-user-image'
                  />
                </div>
              ) : (
                // If authUser exists but has no image, display Robohash avatar
                <div className='nav-user-image-container'>
                  <img
                    src={`https://robohash.org/set_set4/${authUser.email}`}
                    alt='User'
                    className='nav-user-image'
                  />
                  <div className='nav-user-image-background' />
                </div>
              )}
            </Link>
          )}
        </div>
      </section>
      <section className='nav-links'>
        <Link to='/'>
          <div className='nav-link'>
            <p
              className={`${
                location.pathname === '/'
                  ? 'nav-link-text-current'
                  : 'nav-link-text'
              }`}
            >
              {homeText}
            </p>
          </div>
        </Link>
        <Link to='/library'>
          <div className='nav-link'>
            <p
              className={`${
                location.pathname === '/library'
                  ? 'nav-link-text-current'
                  : 'nav-link-text'
              }`}
            >
              {libraryText}
            </p>
            <p className='nav-link-flair'>{flairText}</p>
          </div>
        </Link>
        <Link to='/about'>
          <div className='nav-link'>
            <p
              className={`${
                location.pathname === '/about'
                  ? 'nav-link-text-current'
                  : 'nav-link-text'
              }`}
            >
              {aboutText}
            </p>
          </div>
        </Link>
        <Link to='/contact'>
          <div className='nav-link'>
            <p
              className={`${
                location.pathname === '/contact'
                  ? 'nav-link-text-current'
                  : 'nav-link-text'
              }`}
            >
              {contactText}
            </p>
          </div>
        </Link>
        <a
          href='https://www.frenchforlittleones.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='nav-link'>
            <p className='nav-link-text'>{ffloMainText}</p>
            <LinkIcon className='nav-link-icon' />
          </div>
        </a>
      </section>
    </nav>
  );
};

export default Nav;
