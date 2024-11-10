import React, { useContext, useState } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link } from 'react-router-dom';
import TitleFlair from 'Svgs/TitleFlair';
import PointingIcon from 'Svgs/PointingIcon';
import BulletPoint from 'Svgs/BulletPoint';
import GlobeClipart from 'Svgs/GlobeClipart';
import BookList from 'Components/BookList';
import 'Styles/Tools/Restricted.css';

const Restricted: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authToken, language } = context;

  const [hoveredCategoryId, setHoveredCategoryId] = useState('');

  // Translations
  const notFoundText =
    language === 'EN' ? 'Page Not Found' : 'Page Introuvable';
  const notFoundSubtext =
    language === 'EN'
      ? 'Sorry, the page you are looking for does not exist.'
      : "Désolé, la page que vous recherchez n'existe pas.";
  const alternativesSubtext =
    language === 'EN'
      ? 'Here are some links to help you find your way:'
      : 'Voici quelques liens pour vous aider à vous repérer :';
  const homepageText =
    language === 'EN' ? 'Visit our homepage' : "Visitez notre page d'accueil";
  const aboutText =
    language === 'EN'
      ? 'More about FFLO Story Space'
      : "En savoir plus sur l'espace d'histoire FFLO";
  const profileText =
    language === 'EN'
      ? 'Visit your user profile'
      : 'Visitez votre profil utilisateur';
  const loginText =
    language === 'EN'
      ? 'Login to visit your profile'
      : 'Connectez-vous pour visiter votre profil';
  const libraryText =
    language === 'EN'
      ? 'Browse our library for your next book'
      : 'Parcourez notre bibliothèque pour votre prochain livre';

  return (
    <>
      <div className='page-container'>
        <div className='restricted-wrapper'>
          <div className='restricted-container'>
            <div className='restricted-header'>
              <div className='restricted-header-text-container'>
                <TitleFlair className='restricted-flair-left' />
                <h1 className='restricted-header-text'>{notFoundText}</h1>
                <TitleFlair className='restricted-flair-right' />
              </div>
              <div className='restricted-header-subtext-container'>
                <p className='restricted-header-subtext'>{notFoundSubtext}</p>
              </div>
            </div>
            <div className='restricted-content-container'>
              <div className='restricted-content'>
                <GlobeClipart className='restricted-globe-clipart' />
                <div className='restricted-content-links-container'>
                  <p className='restricted-text-hand'>{alternativesSubtext}</p>
                  <div className='restricted-content-links'>
                    <Link to={'/'}>
                      <div
                        className='restricted-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('homepage')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`restricted-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'homepage'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`restricted-content-link-text ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'homepage'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        >
                          {homepageText}
                        </p>
                        <PointingIcon
                          className={`restricted-hand-icon ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'homepage'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                      </div>
                    </Link>
                    <Link to={'/about'}>
                      <div
                        className='restricted-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('about')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`restricted-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'about'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`restricted-content-link-text ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'about'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        >
                          {aboutText}
                        </p>
                        <PointingIcon
                          className={`restricted-hand-icon ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'about'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                      </div>
                    </Link>
                    <Link to={'/profile'}>
                      <div
                        className='restricted-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('profile')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`restricted-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'profile'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`restricted-content-link-text ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'profile'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        >
                          {authToken ? profileText : loginText}
                        </p>
                        <PointingIcon
                          className={`restricted-hand-icon ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'profile'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                      </div>
                    </Link>
                    <Link to={'/library'}>
                      <div
                        className='restricted-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('library')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`restricted-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'library'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`restricted-content-link-text ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'library'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        >
                          {libraryText}
                        </p>
                        <PointingIcon
                          className={`restricted-hand-icon ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'library'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BookList />
      </div>
    </>
  );
};

export default Restricted;