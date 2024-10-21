import { useContext, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { useParams } from 'react-router-dom';
import TitleFlair from 'Svgs/TitleFlair';
import BookList from 'Components/BookList';
import BookCoverIcon from 'Svgs/BookCoverIcon';
import 'Styles/Book.css';

const Book: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('No Context');
  }

  const { allBooks, formatTitleForURL, language } = context;

  const book = allBooks.find((book) => formatTitleForURL(book.title) === title);

  // Translations
  const noBookText = language === 'EN' ? 'No Book Found' : 'Aucun Livre Trouvé';
  const headerText =
    language === 'EN' ? 'Book Information' : 'Informations sur le Livre';
  const availableCopiesText =
    language === 'EN' ? 'Available copies' : 'Exemplaires disponibles';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [book]);

  if (!book) {
    return (
      <main className='page-container'>
        <header className='book-header'>
          <div className='book-header-title'>
            <TitleFlair className='title-flair-left' />
            <p className='book-title-text'>{noBookText}</p>
            <TitleFlair className='title-flair-right' />
          </div>
        </header>

        <section className='book-details'></section>
      </main>
    );
  }

  const hasImage = !!book.images[0]?.image_url;

  return (
    <main className='page-container'>
      <header className='book-header'>
        <div className='book-header-title'>
          <TitleFlair className='title-flair-left' />
          <p className='book-title-text'>{headerText}</p>
          <TitleFlair className='title-flair-right' />
        </div>
      </header>

      <section className='book-details'>
        <div className='book-details-header'>
          <div className='book-detail-image-container'>
            {book.flair && (
              <div className='book-detail-flair-container'>
                <p className='book-detail-flair'>{book.flair}</p>
              </div>
            )}
            {book.images.length > 0 && book.images[0].image_url ? (
              <div
                className={`book-detail-image-wrapper ${
                  hasImage ? 'blur-load' : ''
                }`}
                style={{
                  backgroundImage: `url(${book.images[0]?.image_small})`,
                }}
              >
                <img
                  src={book.images[0].image_url}
                  alt={book.title}
                  className='book-detail-image'
                  onLoad={(e) => {
                    const imgElement = e.target as HTMLImageElement;
                    imgElement.parentElement?.classList.add('loaded');
                  }}
                />
              </div>
            ) : (
              <BookCoverIcon />
            )}
          </div>
          <div className='book-detail-info-container'>
            <div className='book-detail-info-header'>
              <h2 className='book-detail-title-text'>{book.title}</h2>
              <p className='book-detail-author-text'>{book.author}</p>
            </div>
            <div className='book-detail-checkout-container'>
              <p className='book-detail-quantity'>
                {availableCopiesText}: {book.available}
              </p>
              <button className='submit-button'>Reserve Book</button>
            </div>
          </div>
        </div>
        <div className='book-details-description-container'>
          <p className='book-details-description-text'>{book.description}</p>
        </div>
      </section>

      <section className='more-books-container'>
        <h3>More Books</h3>
        <BookList bookList={allBooks.filter((b) => b.id !== book.id)} />
      </section>
    </main>
  );
};

export default Book;
