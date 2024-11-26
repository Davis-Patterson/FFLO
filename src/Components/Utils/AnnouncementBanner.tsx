import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link, useLocation } from 'react-router-dom';
import XIcon from 'Svgs/XIcon';
import AnnouncementIcon from 'Svgs/AnnouncementIcon';
import 'Styles/Utils/AnnouncementBanner.css';

interface Banner {
  content: React.ReactNode;
  shouldShow: () => boolean;
  timeout: number | null;
  background_color: string;
}

const AnnouncementBanner: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }

  const {
    authUser,
    language,
    setShowAuth,
    membershipBannerDismissed,
    setMembershipBannerDismissed,
  } = context;

  const [currentBanner, setCurrentBanner] = useState<Banner | null>(null);
  const [visible, setVisible] = useState(false);
  const [renderDelay, setRenderDelay] = useState(true);
  const [autoDismissTimeout, setAutoDismissTimeout] =
    useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Translations
  const currentBannerText =
    language === 'EN'
      ? 'Become a member to reserve books from the FFLO Story Space library today!'
      : "Devenez membre pour réserver des livres de la bibliothèque de l'espace d'histoires FFLO dès aujourd'hui !";

  const handleShowLogin = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowAuth(true);
  };

  // Define banners
  const banners: { [key: string]: Banner } = {
    membership: {
      content: authUser ? (
        <Link to='/membership' className='announcement-banner-text'>
          {currentBannerText}
        </Link>
      ) : (
        <div
          onMouseDown={(e) => handleShowLogin(e)}
          className='announcement-banner-text'
        >
          {currentBannerText}
        </div>
      ),
      shouldShow: () =>
        (authUser === null ||
          (!authUser.is_staff &&
            (!authUser.membership || authUser.membership.active === false))) &&
        location.pathname !== '/membership' &&
        location.pathname !== '/construction',
      timeout: null,
      background_color: 'var(--clr-text-blue)',
    },
  };

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setRenderDelay(false);
    }, 1000);

    return () => clearTimeout(delayTimeout);
  }, []);

  useEffect(() => {
    if (renderDelay || membershipBannerDismissed) return;

    const bannerToShow = Object.values(banners).find((banner) =>
      banner.shouldShow()
    );

    if (bannerToShow) {
      setCurrentBanner(bannerToShow);

      if (!visible) {
        setTimeout(() => setVisible(true), 10);
      }

      if (bannerToShow.timeout !== null) {
        const timeout = setTimeout(
          () => setMembershipBannerDismissed(true),
          bannerToShow.timeout
        );
        setAutoDismissTimeout(timeout);
      }
    } else {
      if (visible) {
        setVisible(false);
      }
      setCurrentBanner(null);
    }

    return () => {
      if (autoDismissTimeout) {
        clearTimeout(autoDismissTimeout);
      }
    };
  }, [renderDelay, location.pathname, authUser, membershipBannerDismissed]);

  const handleBannerClose = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setVisible(false);
    setTimeout(() => setMembershipBannerDismissed(true), 400);

    if (autoDismissTimeout) {
      clearTimeout(autoDismissTimeout);
      setAutoDismissTimeout(null);
    }
  };

  if (renderDelay || membershipBannerDismissed) return null;

  return (
    <aside
      className='announcement-container'
      style={{
        padding: visible && currentBanner ? '34px 0px 0px 0px' : '0px',
      }}
    >
      {currentBanner && (
        <div
          className={`announcement-banner ${visible ? 'show' : 'hide'}`}
          style={{
            backgroundColor: currentBanner.background_color,
          }}
        >
          <div className='announcement-banner-content'>
            <div className='announcement-banner-icon-container'>
              <AnnouncementIcon className='announcement-banner-announcement-icon' />
            </div>
            <div className='announcement-banner-text-container'>
              {currentBanner.content}
            </div>
            <div className='announcement-banner-dismiss-container'>
              {currentBanner.timeout && (
                <div className='announcement-banner-auto-dismiss'></div>
              )}
              <div className='announcement-banner-x-container'>
                <XIcon
                  className='announcement-banner-x-icon'
                  onMouseDown={(e) => handleBannerClose(e)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default AnnouncementBanner;
