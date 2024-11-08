import React, { useContext, useState } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link } from 'react-router-dom';
import TitleFlair from 'Svgs/TitleFlair';
import PointingIcon from 'Svgs/PointingIcon';
import BulletPoint from 'Svgs/BulletPoint';
import GlobeClipart from 'Svgs/GlobeClipart';
import 'Styles/Tools/NotFound.css';
import BookList from 'Components/BookList';

const NotFound: React.FC = () => {
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
        <div className='not-found-wrapper'>
          <div className='not-found-container'>
            <div className='not-found-header'>
              <div className='not-found-header-text-container'>
                <TitleFlair className='not-found-flair-left' />
                <h1 className='not-found-header-text'>{notFoundText}</h1>
                <TitleFlair className='not-found-flair-right' />
              </div>
              <div className='not-found-header-subtext-container'>
                <p className='not-found-header-subtext'>{notFoundSubtext}</p>
              </div>
            </div>
            <div className='not-found-content-container'>
              <div className='not-found-content'>
                <GlobeClipart className='not-found-globe-clipart' />
                <div className='not-found-content-links-container'>
                  <p className='not-found-text-hand'>{alternativesSubtext}</p>
                  <div className='not-found-content-links'>
                    <Link to={'/'}>
                      <div
                        className='not-found-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('homepage')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`not-found-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'homepage'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`not-found-content-link-text ${
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
                          className={`not-found-hand-icon ${
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
                        className='not-found-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('about')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`not-found-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'about'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`not-found-content-link-text ${
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
                          className={`not-found-hand-icon ${
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
                        className='not-found-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('profile')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`not-found-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'profile'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`not-found-content-link-text ${
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
                          className={`not-found-hand-icon ${
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
                        className='not-found-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('library')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`not-found-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'library'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`not-found-content-link-text ${
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
                          className={`not-found-hand-icon ${
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

export default NotFound;
