import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link, useLocation } from 'react-router-dom';
import XIcon from 'Svgs/XIcon';
import AnnouncementIcon from 'Svgs/AnnouncementIcon';
import 'Styles/Utils/AnnouncementBanner.css';

const AnnouncementBanner: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }

  const { authUser, language } = context;

  const [bannerOpen, setBannerOpen] = useState(true);
  const [dismissed, setDismissed] = useState(true);

  const location = useLocation();

  // translations
  const membershipBannerText =
    language === 'EN'
      ? 'Become a member to reserve books from the FFLO Story Space library today!'
      : "Devenez membre pour réserver des livres de la bibliothèque de l'espace d'histoires FFLO dès aujourd'hui !";

  const handleBannerClose = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setDismissed(true);

    setTimeout(() => setBannerOpen(false), 400);
  };

  const shouldBannerBeShown =
    (!authUser || !authUser?.membership?.active) &&
    location.pathname !== '/membership' &&
    location.pathname !== '/construction';

  const isBannerVisible = shouldBannerBeShown && bannerOpen;

  useEffect(() => {
    if (isBannerVisible) {
      setDismissed(true);
      setTimeout(() => setDismissed(false), 10);
    }
  }, [isBannerVisible]);

  return (
    <>
      <aside
        className='announcement-container'
        style={{
          padding:
            !dismissed && isBannerVisible
              ? '34px 0px 0px 0px'
              : '0px 0px 0px 0px',
        }}
      >
        {isBannerVisible && (
          <div
            className='announcement-banner'
            style={{
              top: !dismissed && isBannerVisible ? '20px' : '-40px',
            }}
          >
            <div className='announcement-banner-content'>
              <div className='announcement-banner-icon-container'>
                <AnnouncementIcon className='announcement-banner-announcement-icon' />
              </div>
              <div className='announcement-banner-text-container'>
                <Link to='/membership' className='announcement-banner-text'>
                  {membershipBannerText}
                </Link>
              </div>
              <div className='announcement-banner-icon-container'>
                <XIcon
                  className='announcement-banner-x-icon'
                  onMouseDown={(e) => handleBannerClose(e)}
                />
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default AnnouncementBanner;
