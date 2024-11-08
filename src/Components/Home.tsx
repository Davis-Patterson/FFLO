import { useContext, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import BookList from 'Components/BookList';
import libraryShelfImg from 'Home/library_shelf.webp';
import libraryShelfSmall from 'Home/library_shelf_small.webp';
import 'Styles/Home.css';

const Home: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { language, allBooks, fetchError, isFetched } = context;

  // translations
  const headerText = language === 'EN' ? 'Story Space' : "Espace d'histoire";
  const welcomeText = language === 'EN' ? 'Welcome to' : 'Bienvenue à';
  const ffloText =
    language === 'EN'
      ? 'French For Little Ones'
      : 'Français pour les tout-petits';
  const readText = language === 'EN' ? 'Read.' : 'Lire.';
  const learnText = language === 'EN' ? 'Learn.' : 'Apprendre.';
  const growText = language === 'EN' ? 'Grow.' : 'Grandir.';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className='page-container'>
        <header className='home-header'>
          <div className='home-header-image-container'>
            <div
              className='home-header-image-wrapper blur-load'
              style={{
                backgroundImage: `url(${libraryShelfSmall})`,
              }}
            >
              <img
                src={libraryShelfImg}
                alt='library shelf image'
                className='home-header-image'
                onLoad={(e) => {
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.parentElement?.classList.add('loaded');
                }}
              />
            </div>
            <div className='home-header-text-container'>
              <p className='home-header-pretext'>{welcomeText}</p>
              <div className='home-header-title-container'>
                <div className='home-header-title-text-container'>
                  <p className='home-header-title-text'>{ffloText}</p>
                  <p className='home-header-title-subtext'>{headerText}</p>
                </div>
              </div>
              <div className='home-header-subtext-container'>
                <p className='home-header-subtext blue'>{readText}</p>
                <p className='home-header-subtext light-blue'>{learnText}</p>
                <p className='home-header-subtext orange'>{growText}</p>
              </div>
            </div>
          </div>
        </header>
        <div className='home-content-header'>
          <div className='home-content-header-title'>
            <TitleFlair className='title-flair-left' />
            <h1 className='home-content-title-text'>{headerText}</h1>
            <TitleFlair className='title-flair-right' />
          </div>
        </div>
        <div className='home-content-books-container'>
          {fetchError ? (
            <p>Error fetching books. Please try again later.</p>
          ) : isFetched && allBooks.length === 0 ? (
            <p>No books available.</p>
          ) : (
            <BookList />
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
