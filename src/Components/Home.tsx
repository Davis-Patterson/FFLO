import { useContext, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import BookList from 'Components/BookList';
import 'Styles/Home.css';

const Home: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { language, allBooks, fetchError, isFetched } = context;

  // translations
  const headerText = language === 'EN' ? 'Story Space' : "Espace d'Histoire";

  const availableBooks = allBooks.filter((book) => book.available > 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className='page-container'>
        <header className='home-header'>
          <div className='home-header-title'>
            <TitleFlair className='title-flair-left' />
            <p className='home-title-text'>{headerText}</p>
            <TitleFlair className='title-flair-right' />
          </div>
        </header>

        {fetchError ? (
          <p>Error fetching books. Please try again later.</p>
        ) : isFetched && allBooks.length === 0 ? (
          <p>No books available.</p>
        ) : (
          <BookList bookList={availableBooks} />
        )}
      </main>
    </>
  );
};

export default Home;
