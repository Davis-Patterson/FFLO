import React, { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link, useLocation } from 'react-router-dom';
import ffloLogo from 'Assets/Logos/fflo-logo.webp';
import LinkIcon from 'Svgs/LinkIcon';
import MenuIcon from 'Svgs/MenuIcon';
import 'Styles/Main/Nav.css';

const Nav: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }

  const {
    setShowMenu,
    setShowAuth,
    authUser,
    language,
    handleLanguageChange,
    mobileWidth,
  } = context;

  const location = useLocation();

  // translations
  const loginText = language === 'EN' ? 'Login' : 'Se Connecter';
  const homeText = language === 'EN' ? 'Home' : 'Maison';
  const libraryText = language === 'EN' ? 'Library' : 'Bibliothèque';
  const aboutText = language === 'EN' ? 'About' : 'À propos';
  const contactText = language === 'EN' ? 'Contact' : 'Contact';
  const ffloMainText = language === 'EN' ? 'FFLO' : 'Contact';
  const flairText = language === 'EN' ? 'NEW' : 'NEW';

  const handleLogin = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowAuth(true);
  };

  const handleMenuOpen = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowMenu(true);
  };

  return (
    <>
      <nav className='nav-container'>
        <header className='nav-header'>
          <div className='nav-language'>
            <div className='language-toggle'>
              <p
                className={`en-toggle ${
                  language === 'EN' ? 'language-active' : ''
                }`}
                onMouseDown={(e) => handleLanguageChange(e, 'EN')}
              >
                EN
              </p>
              <p
                className={`fr-toggle ${
                  language === 'FR' ? 'language-active' : ''
                }`}
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
          {mobileWidth ? (
            <div className='nav-menu-toggle-container'>
              <MenuIcon
                className='nav-menu-toggle'
                onMouseDown={(e) => handleMenuOpen(e)}
              />
            </div>
          ) : !authUser ? (
            <div className='nav-profile'>
              <p className='login-text' onMouseDown={(e) => handleLogin(e)}>
                {loginText}
              </p>
            </div>
          ) : (
            <div className='nav-profile'>
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
            </div>
          )}
        </header>
        {!mobileWidth && (
          <div className='nav-links'>
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
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
