import React, { useContext, useState } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link } from 'react-router-dom';
import AlertIcon from 'Svgs/AlertIcon';
import PointingIcon from 'Svgs/PointingIcon';
import BulletPoint from 'Svgs/BulletPoint';
import SadBookIcon from 'Svgs/SadBookIcon';
import BookList from 'Components/Main/BookList';
import 'Styles/Tools/BookNotFound.css';

const BookNotFound: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authToken, language } = context;

  const [hoveredCategoryId, setHoveredCategoryId] = useState('');

  // Translations
  const notFoundText =
    language === 'EN' ? 'Book Not Found' : 'Page Introuvable';
  const notFoundSubtext =
    language === 'EN'
      ? 'Sorry, the book you are looking for could not be found in our library.'
      : 'Désolé, le livre que vous recherchez est introuvable dans notre bibliothèque.';
  const alternativesSubtext =
    language === 'EN'
      ? 'Here are some links to help you find your way:'
      : 'Voici quelques liens pour vous aider à vous repérer :';
  const homepageText =
    language === 'EN' ? 'Back to the homepage' : "Retour à la page d'accueil";
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
        <div className='book-not-found-wrapper'>
          <div className='book-not-found-container'>
            <div className='book-not-found-header'>
              <div className='book-not-found-header-text-container'>
                <AlertIcon className='book-not-found-flair-left' />
                <h1 className='book-not-found-header-text'>{notFoundText}</h1>
                <AlertIcon className='book-not-found-flair-right' />
              </div>
              <div className='book-not-found-header-subtext-container'>
                <p className='book-not-found-header-subtext'>
                  {notFoundSubtext}
                </p>
              </div>
            </div>
            <div className='book-not-found-content-container'>
              <div className='book-not-found-content'>
                <SadBookIcon className='book-not-found-globe-clipart' />
                <div className='book-not-found-content-links-container'>
                  <p className='book-not-found-text-hand'>
                    {alternativesSubtext}
                  </p>
                  <div className='book-not-found-content-links'>
                    <Link to={'/'}>
                      <div
                        className='book-not-found-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('homepage')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`book-not-found-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'homepage'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`book-not-found-content-link-text ${
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
                          className={`book-not-found-hand-icon ${
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
                        className='book-not-found-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('about')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`book-not-found-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'about'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`book-not-found-content-link-text ${
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
                          className={`book-not-found-hand-icon ${
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
                        className='book-not-found-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('profile')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`book-not-found-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'profile'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`book-not-found-content-link-text ${
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
                          className={`book-not-found-hand-icon ${
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
                        className='book-not-found-content-link-item'
                        onMouseEnter={() => setHoveredCategoryId('library')}
                        onMouseLeave={() => setHoveredCategoryId('')}
                      >
                        <BulletPoint
                          className={`book-not-found-bullet-point ${
                            !hoveredCategoryId
                              ? ''
                              : hoveredCategoryId === 'library'
                              ? 'selected'
                              : 'deselected'
                          }`}
                        />
                        <p
                          className={`book-not-found-content-link-text ${
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
                          className={`book-not-found-hand-icon ${
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

export default BookNotFound;
