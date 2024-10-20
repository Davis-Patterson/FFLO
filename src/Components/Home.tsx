import { useContext, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import ServerApi from 'Utilities/ServerApi';
import TitleFlair from 'Svgs/TitleFlair';
import BookList from 'Components/BookList';
import 'Styles/Home.css';

const Home: React.FC = () => {
  const { getBooks } = ServerApi();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { language, allBooks, setAllBooks } = context;

  // translations
  const headerText = language === 'EN' ? 'Story Space' : "Espace d'Histoire";

  useEffect(() => {
    const fetchBooks = async () => {
      if (allBooks.length === 0) {
        const result = await getBooks();
        if (result.success) {
          setAllBooks(result.data ?? []);
        } else {
          console.error('Failed to load books');
        }
      }
    };

    fetchBooks();
  }, [getBooks, allBooks, setAllBooks]);

  const availableBooks = allBooks.filter((book) => book.available > 0);

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
        <BookList bookList={availableBooks} />
      </main>
    </>
  );
};

export default Home;
