import React, { useContext, useState } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link } from 'react-router-dom';
import BookImage from 'Utils/BookImage';
import StarColor from 'Svgs/StarColor';
import StarGrey from 'Svgs/StarGrey';
import FrenchFlag from 'Svgs/FrenchFlag';
import UKFlag from 'Svgs/UKFlag';
import 'Styles/Utils/BookmarkedBooks.css';

const BookmarkedBooks: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }

  const { authToken, authUser, language, bookmarkedBooks } = context;

  const [hovered, setHovered] = useState<number | null>(null);

  // translations
  const headerText = language === 'EN' ? 'Bookmarked Books' : 'Livres favoris';

  const getLanguageIcon = (language: string) => {
    const normalizedLanguage = language.toLowerCase();
    if (normalizedLanguage === 'french' || normalizedLanguage === 'français') {
      return <FrenchFlag className='book-language-flag' />;
    } else if (normalizedLanguage === 'english') {
      return <UKFlag className='book-language-flag' />;
    }
    return null;
  };

  if (!authToken || !authUser || !bookmarkedBooks) {
    return (
      <section className='bookmarked-books-container'>
        <header className='bookmarked-books-header'>
          <h3 className='bookmarked-books-header-text'>{headerText}</h3>
        </header>
        <p>Log In</p>
      </section>
    );
  }

  if (bookmarkedBooks.length === 0) {
    return (
      <section className='bookmarked-books-container'>
        <header className='bookmarked-books-header'>
          <h3 className='bookmarked-books-header-text'>{headerText}</h3>
        </header>
        <p>No Bookmarked Books</p>
      </section>
    );
  }

  return (
    <section className='bookmarked-books-container'>
      <header className='bookmarked-books-header'>
        <h3 className='bookmarked-books-header-text'>{headerText}</h3>
      </header>
      <div className='bookmarked-books-grid'>
        {bookmarkedBooks.map((book) => {
          const bookUrl = `/library/${encodeURIComponent(
            book.title.replace(/\s+/g, '-').toLowerCase()
          )}`;

          return (
            <Link
              key={book.id}
              to={bookUrl}
              className={`${
                book.available < 1
                  ? 'bookmarked-book-card-unavailable'
                  : 'bookmarked-book-card'
              }`}
              onMouseEnter={() => setHovered(book.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <BookImage book={book} viewSetting={'grid'} hovered={hovered} />
              <div className='book-info'>
                <h3
                  className={`${
                    book.available < 1 ? 'book-title-unavailable' : 'book-title'
                  }`}
                >
                  {book.title}
                </h3>
                <p className='book-author'>{book.author}</p>
                <div className='book-language-rating-container'>
                  <p className='book-language'>{book.language}</p>
                  {getLanguageIcon(book.language)}
                  <p className='pipe-icon'>|</p>
                  <div className='rating-container'>
                    {!book.rating && (
                      <StarGrey className='book-grid-star-icon' />
                    )}
                    {book.rating && (
                      <>
                        <StarColor className='book-grid-star-icon' />
                        <p className='book-grid-rating'>{book.rating}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default BookmarkedBooks;
