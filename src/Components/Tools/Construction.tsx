import React, { useContext, useState } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link } from 'react-router-dom';
import ConeIcon from 'Svgs/ConeIcon';
import PointingIcon from 'Svgs/PointingIcon';
import BulletPoint from 'Svgs/BulletPoint';
import CraneClipart from 'Svgs/CraneClipart';
import BookList from 'Components/Main/BookList';
import 'Styles/Tools/Construction.css';

const Construction: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authToken, language } = context;

  const [hoveredCategoryId, setHoveredCategoryId] = useState('');

  // Translations
  const constructionText = language === 'EN' ? 'Construction' : 'Construction';
  const constructionSubtext =
    language === 'EN'
      ? 'This page is currently undergoing maintenance.'
      : 'Cette page est actuellement en maintenance.';
  const constructionSubtext2 =
    language === 'EN'
      ? 'Please contact a staff member for questions relating to your membership.'
      : 'Veuillez contacter un membre du personnel pour toute question relative à votre adhésion.';
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
  const contactText =
    language === 'EN'
      ? 'Contact us with questions or comments'
      : 'Contactez-nous pour toute question ou commentaire';
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
        <div className='construction-wrapper'>
          <div className='construction-container'>
            <div className='construction-header'>
              <div className='construction-header-text-container'>
                <ConeIcon className='construction-alert-left' />
                <h1 className='construction-header-text'>{constructionText}</h1>
                <ConeIcon className='construction-alert-right' />
              </div>
              <div className='construction-header-subtext-container'>
                <p className='construction-header-subtext'>
                  {constructionSubtext}
                </p>
                <p className='construction-header-subtext'>
                  {constructionSubtext2}
                </p>
              </div>
            </div>
            <div className='construction-content-container'>
              <div className='construction-content'>
                <CraneClipart className='construction-stop-clipart' />
                <div className='construction-content-links-container'>
                  <p className='construction-text-hand'>
                    {alternativesSubtext}
                  </p>
                  <div className='construction-content-links'>
                    <Link to={'/'}>
                      <div
                        className='construction-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('homepage')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`construction-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'homepage'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`construction-content-link-text ${
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
                          className={`construction-hand-icon ${
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
                        className='construction-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('about')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`construction-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'about'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`construction-content-link-text ${
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
                          className={`construction-hand-icon ${
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
                        className='construction-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('profile')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`construction-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'profile'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`construction-content-link-text ${
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
                          className={`construction-hand-icon ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'profile'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                      </div>
                    </Link>
                    <Link to={'/contact'}>
                      <div
                        className='not-found-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('contact')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`not-found-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'contact'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`not-found-content-link-text ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'contact'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        >
                          {contactText}
                        </p>
                        <PointingIcon
                          className={`not-found-hand-icon ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'contact'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                      </div>
                    </Link>
                    <Link to={'/library'}>
                      <div
                        className='construction-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('library')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`construction-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'library'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`construction-content-link-text ${
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
                          className={`construction-hand-icon ${
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

export default Construction;
