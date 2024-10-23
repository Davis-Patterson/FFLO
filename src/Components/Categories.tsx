import { useContext, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import BookList from 'Components/BookList';
import 'Styles/Categories.css';
import BunnyIcon from 'Svgs/BunnyIcon';
import FrogIcon from 'Svgs/FrogIcon';
import HedgehogIcon from 'Svgs/HedgehogIcon';

const Categories: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { language, allBooks, fetchError, isFetched } = context;

  // translations
  const headerText = language === 'EN' ? 'Categories' : 'Catégories';
  const toutePetiteSubtext =
    language === 'EN'
      ? "Books suitable for children in the 2's program"
      : 'Livres adaptés aux enfants du programme 2';
  const petiteSubtext =
    language === 'EN'
      ? "Books suitable for children in the 3's program"
      : 'Livres adaptés aux enfants du programme 3';
  const moyenneSubtext =
    language === 'EN'
      ? "Books suitable for children in the 4's program"
      : 'Livres adaptés aux enfants du programme 4';
  const categoryButtonText =
    language === 'EN' ? 'View Books' : 'Voir les Livres';

  const availableBooks = allBooks.filter((book) => book.available > 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className='page-container'>
        <header className='categories-header'>
          <div className='categories-header-title'>
            <TitleFlair className='title-flair-left' />
            <p className='categories-title-text'>{headerText}</p>
            <TitleFlair className='title-flair-right' />
          </div>
        </header>
        <div className='categories-container'>
          <div className='category-card toute'>
            <div className='category-card-header'>
              <BunnyIcon className='bunny-icon' />
              <p className='category-card-header-text'>Toute Petite</p>
            </div>
            <div className='category-card-subtext-container'>
              <p className='category-card-subtext'>{toutePetiteSubtext}</p>
            </div>
            <button className='category-button toute'>
              {categoryButtonText}
            </button>
          </div>
          <div className='category-card petite'>
            <div className='category-card-header'>
              <FrogIcon className='frog-icon' />
              <p className='category-card-header-text'>Petite</p>
            </div>
            <div className='category-card-subtext-container'>
              <p className='category-card-subtext'>{petiteSubtext}</p>
            </div>
            <button className='category-button petite'>
              {categoryButtonText}
            </button>
          </div>
          <div className='category-card moyenne'>
            <div className='category-card-header'>
              <HedgehogIcon className='hedgehog-icon' />
              <p className='category-card-header-text'>Moyenne</p>
            </div>
            <div className='category-card-subtext-container'>
              <p className='category-card-subtext'>{moyenneSubtext}</p>
            </div>
            <button className='category-button moyenne'>
              {categoryButtonText}
            </button>
          </div>
        </div>
        <div className='categories-books-container'>
          {fetchError ? (
            <p>Error fetching books. Please try again later.</p>
          ) : isFetched && allBooks.length === 0 ? (
            <p>No books available.</p>
          ) : (
            <BookList bookList={availableBooks} />
          )}
        </div>
      </main>
    </>
  );
};

export default Categories;
