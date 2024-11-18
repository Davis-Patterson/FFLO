import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import BookmarkedIcon from 'Svgs/BookmarkedIcon';
import BookStackClipart2 from 'Svgs/BookStackClipart2';
import 'Styles/Utils/BookmarkedBooks.css';
import BookImage from './BookImage';
import FrenchFlag from 'Svgs/FrenchFlag';
import UKFlag from 'Svgs/UKFlag';
import StarGrey from 'Svgs/StarGrey';
import StarColor from 'Svgs/StarColor';

const BookmarkedBooks: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }

  const { authToken, authUser, language, bookmarkedBooks } = context;

  const [filterSetting, setFilterSetting] = useState<string>('title-asc');
  const [hovered, setHovered] = useState<number | null>(null);
  const [bookRows, setLocalBookRows] = useState(1);

  const visibleBooks = 4;

  // translations
  const headerText = language === 'EN' ? 'Bookmarked Books' : 'Livres favoris';
  const noBookmarkedBookHeader =
    language === 'EN' ? 'No books found.' : 'Aucun livre trouvé.';
  const noBookmarkedBookFound =
    language === 'EN'
      ? 'We did not find any bookmarked books for your account. Please try again.'
      : "Nous n'avons trouvé aucun livre favori pour votre compte. Veuillez réessayer.";
  const loginBookmarkedText =
    language === 'EN'
      ? 'Create an account or login to see your bookmarked books.'
      : 'Créez un compte ou connectez-vous pour voir vos livres favoris.';
  const titleText = language === 'EN' ? 'Title' : 'Titre';
  const authorText = language === 'EN' ? 'Author' : 'Auteur';
  const ratingText = language === 'EN' ? 'Rating' : 'Notation';

  useEffect(() => {
    setLocalBookRows(1);
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSetting(event.target.value);
  };

  const handleViewMore = () => {
    setLocalBookRows((prevRows) => prevRows + 1);
  };

  const getFilteredBooks = () => {
    const booksCopy = [...bookmarkedBooks];
    switch (filterSetting) {
      case 'title-asc':
        return booksCopy.sort((a, b) => a.title.localeCompare(b.title));
      case 'title-desc':
        return booksCopy.sort((a, b) => b.title.localeCompare(a.title));
      case 'auth-asc':
        return booksCopy.sort((a, b) => a.author.localeCompare(b.author));
      case 'auth-desc':
        return booksCopy.sort((a, b) => b.author.localeCompare(a.author));
      case 'rating':
        return booksCopy.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      default:
        return booksCopy;
    }
  };

  const filteredBooks = getFilteredBooks();

  const calculateBookRows = () => {
    const rows: { books: typeof bookmarkedBooks; placeholders: number }[] = [];

    for (let i = 0; i < bookRows; i++) {
      const start = i * visibleBooks;
      const end = start + visibleBooks;
      const rowBooks = filteredBooks.slice(start, end);

      const placeholders = Math.max(0, visibleBooks - rowBooks.length);

      rows.push({ books: rowBooks, placeholders });
    }

    return rows;
  };

  const bookRowsData = calculateBookRows();

  if (!authToken || !authUser) {
    return (
      <section className='bookmarked-books-container'>
        <header className='bookmarked-books-header'>
          <div className='bookmarked-books-header-text-icon'>
            <h3 className='bookmarked-books-header-text'>{headerText}</h3>
            <BookmarkedIcon className='bookmarked-books-icon' />
          </div>
          <div className='bookmarked-search-container'>
            <div className='bookmarked-filter-setting'>
              <select
                value={filterSetting}
                onChange={handleFilterChange}
                className='bookmarked-filter-dropdown'
                disabled={true}
              >
                <option value='title-asc'>-</option>
              </select>
            </div>
          </div>
        </header>

        <div className='book-grid-view'>
          <div className='no-books-message'>
            <div className='book-image-list-container'>
              <div className='book-image-wrapper'>
                <BookStackClipart2 className='book-list-cover-icon' />
              </div>
            </div>
            <div className='no-book-info'>
              <p className='no-book-info-text-header'>
                {noBookmarkedBookHeader}
              </p>
              <p className='no-book-info-subtext'>{loginBookmarkedText}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (bookmarkedBooks.length === 0 || !bookmarkedBooks) {
    return (
      <section className='bookmarked-books-container'>
        <header className='bookmarked-books-header'>
          <div className='bookmarked-books-header-text-icon'>
            <h3 className='bookmarked-books-header-text'>{headerText}</h3>
            <BookmarkedIcon className='bookmarked-books-icon' />
          </div>
          <div className='bookmarked-search-container'>
            <div className='bookmarked-filter-setting'>
              <select
                value={filterSetting}
                onChange={handleFilterChange}
                className='bookmarked-filter-dropdown'
                disabled={true}
              >
                <option value='title-asc'>-</option>
              </select>
            </div>
          </div>
        </header>

        <div className='book-grid-view'>
          <div className='no-books-message'>
            <div className='book-image-list-container'>
              <div className='book-image-wrapper'>
                <BookStackClipart2 className='book-list-cover-icon' />
              </div>
            </div>
            <div className='no-book-info'>
              <p className='no-book-info-text-header'>
                {noBookmarkedBookHeader}
              </p>
              <p className='no-book-info-subtext'>{noBookmarkedBookFound}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='bookmarked-books-container'>
      <header className='bookmarked-books-header'>
        <div className='bookmarked-books-header-text-icon'>
          <h3 className='bookmarked-books-header-text'>{headerText}</h3>
          <BookmarkedIcon className='bookmarked-books-icon' />
        </div>
        <div className='bookmarked-search-container'>
          <div className='bookmarked-filter-setting'>
            <select
              value={filterSetting}
              onChange={handleFilterChange}
              className='bookmarked-filter-dropdown'
            >
              <option value='title-asc'>{titleText} (A-Z)</option>
              <option value='title-desc'>{titleText} (Z-A)</option>
              <option value='auth-asc'>{authorText} (A-Z)</option>
              <option value='auth-desc'>{authorText} (Z-A)</option>
              <option value='rating'>{ratingText}</option>
            </select>
          </div>
        </div>
      </header>
      <div className='bookmarked-books-content'>
        {bookRowsData.map((row, rowIndex) => (
          <div key={rowIndex} className='book-grid-row'>
            {row.books.map((book) => (
              <div
                className={`bookmarked-book-item ${
                  hovered === null
                    ? ''
                    : hovered === book.id
                    ? 'hovered'
                    : 'inactive'
                }`}
                key={book.id}
                onMouseEnter={() => setHovered(book.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <BookImage
                  book={book}
                  viewSetting='bookmarked'
                  hovered={hovered}
                  setHovered={setHovered}
                />
                <div className='bookmarked-book-info'>
                  <h4 className='bookmarked-book-title'>{book.title}</h4>
                  <p className='bookmarked-book-author'>{book.author}</p>
                  <div className='bookmarked-item-language-rating-container'>
                    <p className='bookmarked-item-language'>{book.language}</p>
                    {(book.language.toLowerCase() === 'french' ||
                      book.language.toLowerCase() === 'français') && (
                      <FrenchFlag className='bookmarked-item-language-flag' />
                    )}
                    {book.language.toLowerCase() === 'english' && (
                      <UKFlag className='bookmarked-item-language-flag' />
                    )}
                    <p className='bookmarked-pipe-icon'>|</p>
                    <div className='bookmarked-rating-container'>
                      {!book.rating && (
                        <StarGrey className='bookmarked-item-star-icon' />
                      )}
                      {book.rating && (
                        <>
                          <StarColor className='bookmarked-item-star-icon' />
                          <p className='bookmarked-item-rating'>
                            {book.rating}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {Array.from({ length: row.placeholders }).map((_, index) => (
              <div
                key={`placeholder-${rowIndex}-${index}`}
                className='bookmarked-item-placeholder'
              />
            ))}
          </div>
        ))}
      </div>
      {bookRows * visibleBooks < bookmarkedBooks.length && (
        <div className='bookmarked-view-more-button-container'>
          <button
            onClick={handleViewMore}
            className='bookmarked-view-more-button'
          >
            {language === 'EN' ? 'View More' : 'Voir plus'}
          </button>
        </div>
      )}
    </section>
  );
};

export default BookmarkedBooks;
