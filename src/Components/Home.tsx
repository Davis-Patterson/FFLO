import { useContext, useEffect } from 'react';
import { AppContext, Book } from 'Contexts/AppContext';
import ServerApi from 'Utilities/ServerApi';
import TitleFlair from 'Svgs/TitleFlair';
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
      const result = await getBooks();
      if (result.success) {
        setAllBooks(result.data ?? []);
      } else {
        console.error('Failed to load books');
      }
    };

    fetchBooks();
  }, [getBooks, setAllBooks]);

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
        <section className='book-list'>
          <div className='book-grid'>
            {allBooks.map((book: Book) => (
              <div key={book.id} className='book-card'>
                <img
                  src={book.images[0]?.image_url || '/placeholder-image.jpg'}
                  alt={book.title}
                  className='book-image'
                />
                <div className='book-info'>
                  <h3 className='book-title'>{book.title}</h3>
                  <p className='book-author'>{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
