import React, { useContext, useState, useEffect, useRef } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link, useLocation } from 'react-router-dom';
import TitleFlair from 'Svgs/TitleFlair';
import XIcon from 'Svgs/XIcon';
import UKFlag from 'Svgs/UKFlag';
import FrenchFlag from 'Svgs/FrenchFlag';
import LinkIcon from 'Svgs/LinkIcon';
import 'Styles/Main/Menu.css';
import UserIcon from 'Svgs/UserIcon';
import HomeIcon from 'Svgs/HomeIcon';
import BookLinkIcon from 'Svgs/BookLinkIcon';
import AboutIcon from 'Svgs/AboutIcon';
import EnvelopeIcon from 'Svgs/EnvelopeIcon';
import WebsiteIcon from 'Svgs/WebsiteIcon';

const Menu: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authUser,
    showMenu,
    setShowMenu,
    setShowAuth,
    language,
    handleLanguageChange,
    formatDate,
  } = context;

  const [renderContainer, setRenderContainer] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const authContainerRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  // Translations
  const logoutHeader = language === 'EN' ? 'Menu' : 'Menu';
  const homeText = language === 'EN' ? 'Home' : 'Maison';
  const libraryText = language === 'EN' ? 'Library' : 'Bibliothèque';
  const aboutText = language === 'EN' ? 'About' : 'À propos';
  const contactText = language === 'EN' ? 'Contact' : 'Contact';
  const ffloMainText = language === 'EN' ? 'FFLO' : 'FFLO';
  const staffMemberText = language === 'EN' ? 'Staff Member' : 'Personnelle';
  const activeMembership =
    language === 'EN' ? 'Active Member' : 'Adhésion active';
  const expiringMembership = language === 'EN' ? 'Expiring' : 'Expiration';
  const noMembership = language === 'EN' ? 'No Membership' : "Pas d'adhésion";

  useEffect(() => {
    if (showMenu) {
      setRenderContainer(true);
    }
  }, [showMenu]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        authContainerRef.current &&
        !authContainerRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
        setTimeout(() => {
          setRenderContainer(false);
        }, 350);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu, setShowMenu]);

  const handleClose = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowMenu(false);
    setTimeout(() => {
      setRenderContainer(false);
    }, 400);
  };

  const handleLinkClick = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowMenu(false);
    setTimeout(() => {
      setRenderContainer(false);
    }, 400);
  };

  const handleAuthClick = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowMenu(false);
    setTimeout(() => {
      setRenderContainer(false);
    }, 400);
    setTimeout(() => {
      setShowAuth(true);
    }, 500);
  };

  const renderMembershipStatus = () => {
    if (!authUser || !authUser.membership) {
      return <div className='menu-membership-none'>No Membership</div>;
    }

    if (authUser.is_staff) {
      return <div className='menu-user-staff'>{staffMemberText}</div>;
    }

    const { active, end_date } = authUser.membership;

    if (active) {
      if (end_date) {
        return (
          <div className='menu-membership-expiring'>
            {expiringMembership} {formatDate(end_date)}
          </div>
        );
      }
      return <div className='menu-membership-active'>{activeMembership}</div>;
    }

    return <div className='menu-membership-none'>{noMembership}</div>;
  };

  return (
    <>
      {renderContainer && (
        <main className={`menu-overlay ${showMenu ? 'fade-in' : 'fade-out'}`}>
          <section
            ref={authContainerRef}
            className={`menu-container ${showMenu ? 'fade-in' : 'fade-out'}`}
          >
            <div className='menu-portal-top-toggles'>
              <div className='menu-language-toggle'>
                {language === 'FR' ? (
                  <UKFlag
                    className='flag-icon'
                    onMouseDown={(e) => handleLanguageChange(e, 'EN')}
                  />
                ) : (
                  <FrenchFlag
                    className='flag-icon'
                    onMouseDown={(e) => handleLanguageChange(e, 'FR')}
                  />
                )}
              </div>
              <XIcon
                className='menu-x-icon'
                onMouseDown={(e) => handleClose(e)}
              />
            </div>
            <header className='menu-header'>
              <TitleFlair className='menu-flair-left' />
              <h1 className='menu-header-text'>{logoutHeader}</h1>
              <TitleFlair className='menu-flair-right' />
            </header>
            <div className='menu-content'>
              <Link
                to='/'
                className={`menu-link ${
                  hovered === null
                    ? ''
                    : hovered === '/'
                    ? 'hovered'
                    : 'inactive'
                }`}
                onMouseEnter={() => setHovered('/')}
                onMouseLeave={() => setHovered(null)}
                onMouseDown={(e) => handleLinkClick(e)}
              >
                <div className='menu-link-icons-text-container'>
                  <HomeIcon
                    className={`menu-link-type-icon ${
                      location.pathname === '/' ? 'active' : ''
                    } ${
                      hovered === null
                        ? ''
                        : hovered === '/'
                        ? 'hovered'
                        : 'inactive'
                    }`}
                  />
                  <p
                    className={`menu-link-text ${
                      location.pathname === '/' ? 'active' : ''
                    } ${
                      hovered === null
                        ? ''
                        : hovered === '/'
                        ? 'hovered'
                        : 'inactive'
                    }`}
                  >
                    {homeText}
                  </p>
                  <HomeIcon
                    className={`menu-link-type-icon ${
                      location.pathname === '/' ? 'active' : ''
                    } ${
                      hovered === null
                        ? ''
                        : hovered === '/'
                        ? 'hovered'
                        : 'inactive'
                    }`}
                  />
                </div>
                <svg
                  className={`menu-link-line-divider ${
                    location.pathname === '/' ? 'active' : ''
                  } ${
                    hovered === null
                      ? ''
                      : hovered === '/'
                      ? 'hovered'
                      : 'inactive'
                  }`}
                >
                  <line x1='0' y1='50%' x2='100%' y2='50%' />
                </svg>
              </Link>
              <Link
                to='/library'
                className={`menu-link ${
                  hovered === null
                    ? ''
                    : hovered === '/library'
                    ? 'hovered'
                    : 'inactive'
                }`}
                onMouseEnter={() => setHovered('/library')}
                onMouseLeave={() => setHovered(null)}
                onMouseDown={(e) => handleLinkClick(e)}
              >
                <div className='menu-link-icons-text-container'>
                  <BookLinkIcon
                    className={`menu-link-type-icon ${
                      location.pathname === '/library' ? 'active' : ''
                    } ${
                      hovered === null
                        ? ''
                        : hovered === '/library'
                        ? 'hovered'
                        : 'inactive'
                    }`}
                  />
                  <p
                    className={`menu-link-text ${
                      location.pathname === '/library' ? 'active' : ''
                    } ${
                      hovered === null
                        ? ''
                        : hovered === '/library'
                        ? 'hovered'
                        : 'inactive'
                    }`}
                  >
                    {libraryText}
                  </p>
                  <BookLinkIcon
                    className={`menu-link-type-icon ${
                      location.pathname === '/library' ? 'active' : ''
                    } ${
                      hovered === null
                        ? ''
                        : hovered === '/library'
                        ? 'hovered'
                        : 'inactive'
                    }`}
                  />
                </div>
                <svg
                  className={`menu-link-line-divider ${
                    location.pathname === '/library' ? 'active' : ''
                  } ${
                    hovered === null
                      ? ''
                      : hovered === '/library'
                      ? 'hovered'
                      : 'inactive'
                  }`}
                >
                  <line x1='0' y1='50%' x2='100%' y2='50%' />
                </svg>
              </Link>
              <Link
                to='/about'
                className={`menu-link ${
                  hovered === null
                    ? ''
                    : hovered === '/about'
                    ? 'hovered'
                    : 'inactive'
                }`}
                onMouseEnter={() => setHovered('/about')}
                onMouseLeave={() => setHovered(null)}
                onMouseDown={(e) => handleLinkClick(e)}
              >
                <div className='menu-link-icons-text-container'>
                  <AboutIcon
                    className={`menu-link-type-icon ${
                      location.pathname === '/about' ? 'active' : ''
                    } ${
                      hovered === null
                        ? ''
                        : hovered === '/about'
                        ? 'hovered'
                        : 'inactive'
                    }`}
                  />
                  <p
                    className={`menu-link-text ${
                      location.pathname === '/about' ? 'active' : ''
                    } ${
                      hovered === null
                        ? ''
                        : hovered === '/about'
                        ? 'hovered'
                        : 'inactive'
                    }`}
                  >
                    {aboutText}
                  </p>
                  <AboutIcon
                    className={`menu-link-type-icon ${
                      location.pathname === '/about' ? 'active' : ''
                    } ${
                      hovered === null
                        ? ''
                        : hovered === '/about'
                        ? 'hovered'
                        : 'inactive'
                    }`}
                  />
                </div>
                <svg
                  className={`menu-link-line-divider ${
                    location.pathname === '/about' ? 'active' : ''
                  } ${
                    hovered === null
                      ? ''
                      : hovered === '/about'
                      ? 'hovered'
                      : 'inactive'
                  }`}
                >
                  <line x1='0' y1='50%' x2='100%' y2='50%' />
                </svg>
              </Link>
              <Link
                to='/contact'
                className={`menu-link ${
                  hovered === null
                    ? ''
                    : hovered === '/contact'
                    ? 'hovered'
                    : 'inactive'
                }`}
                onMouseEnter={() => setHovered('/contact')}
                onMouseLeave={() => setHovered(null)}
                onMouseDown={(e) => handleLinkClick(e)}
              >
                <div className='menu-link-icons-text-container'>
                  <EnvelopeIcon
                    className={`menu-link-type-icon ${
                      location.pathname === '/contact' ? 'active' : ''
                    } ${
                      hovered === null
                        ? ''
                        : hovered === '/contact'
                        ? 'hovered'
                        : 'inactive'
                    }`}
                  />
                  <p
                    className={`menu-link-text ${
                      location.pathname === '/contact' ? 'active' : ''
                    } ${
                      hovered === null
                        ? ''
                        : hovered === '/contact'
                        ? 'hovered'
                        : 'inactive'
                    }`}
                  >
                    {contactText}
                  </p>
                  <EnvelopeIcon
                    className={`menu-link-type-icon ${
                      location.pathname === '/contact' ? 'active' : ''
                    } ${
                      hovered === null
                        ? ''
                        : hovered === '/contact'
                        ? 'hovered'
                        : 'inactive'
                    }`}
                  />
                </div>
                <svg
                  className={`menu-link-line-divider ${
                    location.pathname === '/contact' ? 'active' : ''
                  } ${
                    hovered === null
                      ? ''
                      : hovered === '/contact'
                      ? 'hovered'
                      : 'inactive'
                  }`}
                >
                  <line x1='0' y1='50%' x2='100%' y2='50%' />
                </svg>
              </Link>
              <a
                href='https://www.frenchforlittleones.com/'
                target='_blank'
                rel='noopener noreferrer'
                className={`menu-link ${
                  hovered === null
                    ? ''
                    : hovered === 'fflo'
                    ? 'hovered'
                    : 'inactive'
                }`}
                onMouseEnter={() => setHovered('fflo')}
                onMouseLeave={() => setHovered(null)}
                onMouseDown={(e) => handleLinkClick(e)}
              >
                <div className='menu-link-icons-text-container'>
                  <WebsiteIcon
                    className={`menu-link-type-icon ${
                      location.pathname === 'fflo' ? 'active' : ''
                    } ${
                      hovered === null
                        ? ''
                        : hovered === 'fflo'
                        ? 'hovered'
                        : 'inactive'
                    }`}
                  />
                  <div
                    className={`menu-link-text-container ${
                      hovered === 'fflo' ? 'hovered' : ''
                    } `}
                  >
                    <p
                      className={`menu-link-text ${
                        hovered === null
                          ? ''
                          : hovered === 'fflo'
                          ? 'hovered'
                          : 'inactive'
                      }`}
                    >
                      {ffloMainText}
                    </p>
                    <LinkIcon
                      className={`menu-link-icon ${
                        hovered === 'fflo' ? 'hovered' : ''
                      }`}
                    />
                  </div>
                  <WebsiteIcon
                    className={`menu-link-type-icon ${
                      location.pathname === 'fflo' ? 'active' : ''
                    } ${
                      hovered === null
                        ? ''
                        : hovered === 'fflo'
                        ? 'hovered'
                        : 'inactive'
                    }`}
                  />
                </div>
                <svg
                  className={`menu-link-line-divider ${
                    location.pathname === 'fflo' ? 'active' : ''
                  } ${
                    hovered === null
                      ? ''
                      : hovered === 'fflo'
                      ? 'hovered'
                      : 'inactive'
                  }`}
                >
                  <line x1='0' y1='50%' x2='100%' y2='50%' />
                </svg>
              </a>
              {!authUser && (
                <Link
                  to='/profile'
                  className={`profile-link ${
                    hovered !== null ? 'inactive' : ''
                  }`}
                  onMouseDown={(e) => handleAuthClick(e)}
                >
                  <UserIcon className='menu-user-icon' />
                  <div className='menu-user-info'>
                    <p className='menu-profile-link-text'>Create an account</p>
                    <p className='menu-profile-link-text'>or login</p>
                    <div className='menu-profile-membership-container'>
                      {renderMembershipStatus()}
                    </div>
                  </div>
                </Link>
              )}
              {authUser && (
                <Link
                  to='/profile'
                  onMouseDown={(e) => handleLinkClick(e)}
                  className={`profile-link ${
                    hovered !== null ? 'inactive' : ''
                  }`}
                >
                  {authUser.image && authUser.image.image_small ? (
                    <div className='menu-user-image-container'>
                      <img
                        src={authUser.image.image_small}
                        alt='User'
                        className='menu-user-image'
                      />
                    </div>
                  ) : (
                    <div className='menu-user-image-container'>
                      <img
                        src={`https://robohash.org/set_set4/${authUser.email}`}
                        alt='User'
                        className='menu-user-image'
                      />
                      <div className='menu-user-image-background' />
                    </div>
                  )}
                  <div className='menu-user-info'>
                    <p className='menu-profile-link-name'>
                      {authUser.first_name}{' '}
                      {authUser.last_name && authUser.last_name}
                    </p>
                    <p className='menu-profile-link-email'>{authUser.email}</p>
                    <div className='menu-profile-membership-container'>
                      {renderMembershipStatus()}
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Menu;
