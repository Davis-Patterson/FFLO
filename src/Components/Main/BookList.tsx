import React, { useContext, useState, useEffect } from 'react';
import { AppContext, Book } from 'Contexts/AppContext';
import { Link, useParams } from 'react-router-dom';
import Sidebar from 'Utils/Sidebar';
import BookImage from 'Utils/BookImage';
import GridIcon from 'Svgs/GridIcon';
import ListIcon from 'Svgs/ListIcon';
import SidebarOpen from 'Svgs/SidebarOpen';
import SidebarClose from 'Svgs/SidebarClose';
import BookClipart from 'Svgs/BookClipart';
import FrenchFlag from 'Svgs/FrenchFlag';
import UKFlag from 'Svgs/UKFlag';
import StarColor from 'Svgs/StarColor';
import StarGrey from 'Svgs/StarGrey';
import 'Styles/Main/BookList.css';

const BookList: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    language,
    allBooks,
    categoryFilter,
    bookmarkedBooks,
    mobileWidth,
    visibleBooks,
    bookRows,
    setBookRows,
    formatTitleForURL,
  } = context;

  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [viewSetting, setViewSetting] = useState<string>('grid');
  const [filterSetting, setFilterSetting] = useState<string>('title-asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [showUnavailable, setShowUnavailable] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  const [updatedVisibleBooks, setUpdatedVisibleBooks] = useState(2);
  const [visibleListBooks, setVisibleListBooks] = useState(10);

  const [previousViewSetting, setPreviousViewSetting] =
    useState<string>('grid');

  // translations
  const gridViewText = language === 'EN' ? 'Grid' : 'Grille';
  const listViewText = language === 'EN' ? 'List' : 'Liste';
  const titleText = language === 'EN' ? 'Title' : 'Titre';
  const authorText = language === 'EN' ? 'Author' : 'Auteur';
  const ratingText = language === 'EN' ? 'Rating' : 'Notation';
  const randomText = language === 'EN' ? 'Random' : 'Aléatoire';
  const noBooksFoundText =
    language === 'EN'
      ? 'No books match your search.'
      : 'Aucun livre ne correspond à votre recherche.';
  const noBooksFoundSubtext =
    language === 'EN'
      ? 'Your search did not match the title or author of any book. Please try again.'
      : "Votre recherche ne correspond au titre ou à l'auteur d'aucun livre. Veuillez réessayer.";

  useEffect(() => {
    setBookRows(2);
  }, []);

  useEffect(() => {
    if (mobileWidth) {
      if (viewSetting !== 'mobile') {
        setPreviousViewSetting(viewSetting);
      }
      setViewSetting('mobile');
    } else if (viewSetting === 'mobile') {
      setViewSetting(previousViewSetting || 'grid');
    }
  }, [mobileWidth]);

  useEffect(() => {
    if (showSidebar) {
      setUpdatedVisibleBooks(visibleBooks - 1);
    } else {
      setUpdatedVisibleBooks(visibleBooks);
    }
  }, [visibleBooks]);

  const handleToggleViewSetting = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    if (viewSetting !== 'mobile') {
      setPreviousViewSetting(viewSetting);
    }

    if (viewSetting === 'grid') {
      setViewSetting('list');
      setVisibleListBooks(10);
    } else if (viewSetting === 'list') {
      setViewSetting('grid');
      setVisibleListBooks(10);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setVisibleListBooks(10);
    setBookRows(2);
  };

  const handleViewMoreList = () => {
    setVisibleListBooks((prev) => prev + 10);
  };

  const handleViewMore = () => {
    setBookRows(bookRows + 2);
  };

  const handleOpenSidebar = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowSidebar(true);
    setTimeout(() => {
      setUpdatedVisibleBooks((prev) => prev - 1);
    }, 300);
  };

  const handleCloseSidebar = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowSidebar(false);
    setTimeout(() => {
      setUpdatedVisibleBooks((prev) => prev + 1);
    }, 700);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSetting(event.target.value);
  };

  const handleTouchStart = (e: React.TouchEvent, bookId: number) => {
    const touch = e.touches[0];
    if (touch) {
      setHovered(bookId);
    }
  };

  const handleTouchEnd = () => {
    setHovered(null);
  };

  const getLanguageIcon = (language: string) => {
    const normalizedLanguage = language.toLowerCase();
    if (normalizedLanguage === 'french' || normalizedLanguage === 'français') {
      return <FrenchFlag className='book-language-flag' />;
    } else if (normalizedLanguage === 'english') {
      return <UKFlag className='book-language-flag' />;
    }
    return null;
  };

  const getLanguageText = (language: string) => {
    const normalizedLanguage = language.toLowerCase();
    if (normalizedLanguage === 'french' || normalizedLanguage === 'français') {
      return 'Fr';
    } else if (normalizedLanguage === 'english') {
      return 'En';
    } else {
      return language;
    }
  };

  const baseBooks = showBookmarks ? bookmarkedBooks : allBooks;
  const availableBooks = showUnavailable
    ? baseBooks
    : baseBooks.filter((book) => book.available > 0);

  const shuffleArray = (array: Book[]) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const filteredBookList = availableBooks
    .filter((book) => {
      const matchesCategory = categoryFilter
        ? book.categories.includes(categoryFilter)
        : true;
      const matchesLanguage = selectedLanguage
        ? book.language === selectedLanguage
        : true;
      const matchesSearch = searchQuery
        ? book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      const isCurrentBook = showBookmarks
        ? null
        : title && formatTitleForURL(book.title) === title;
      return (
        matchesCategory && matchesLanguage && matchesSearch && !isCurrentBook
      );
    })
    .sort((a, b) => {
      if (filterSetting === 'title-asc') return a.title.localeCompare(b.title);
      if (filterSetting === 'title-desc') return b.title.localeCompare(a.title);
      if (filterSetting === 'auth-asc') return a.author.localeCompare(b.author);
      if (filterSetting === 'auth-desc')
        return b.author.localeCompare(a.author);
      if (filterSetting === 'rating') return (b.rating || 0) - (a.rating || 0);
      return 0;
    });

  const listDisplayedBooks =
    filterSetting === 'random'
      ? shuffleArray(filteredBookList).slice(0, visibleListBooks)
      : filteredBookList.slice(0, visibleListBooks);

  const displayedBooks =
    filterSetting === 'random'
      ? shuffleArray(filteredBookList)
      : filteredBookList;

  const calculateBookRows = () => {
    const rows: { books: Book[]; placeholders: number }[] = [];

    for (let i = 0; i < bookRows; i++) {
      const start = i * updatedVisibleBooks;
      const end = start + updatedVisibleBooks;
      const rowBooks = displayedBooks.slice(start, end);

      const placeholders = Math.max(0, updatedVisibleBooks - rowBooks.length);

      rows.push({ books: rowBooks, placeholders });
    }

    return rows;
  };

  const bookRowsData = calculateBookRows();

  return (
    <section className='book-list-container'>
      <header className='page-toggles-container'>
        <div className='sidebar-toggle-container'>
          {showSidebar ? (
            <SidebarClose
              className='close-sidebar-icon'
              onMouseDown={(e) => handleCloseSidebar(e)}
            />
          ) : (
            <SidebarOpen
              className='open-sidebar-icon'
              onMouseDown={(e) => handleOpenSidebar(e)}
            />
          )}
        </div>
        <svg className='book-list-line-divider'>
          <line x1='0' y1='50%' x2='100%' y2='50%' />
        </svg>
        <div className='search-container'>
          <input
            type='text'
            className='search-input'
            placeholder='Search'
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className='filter-setting'>
            <select
              value={filterSetting}
              onChange={handleFilterChange}
              className='filter-dropdown'
            >
              <option value='title-asc'>{titleText} (A-Z)</option>
              <option value='title-desc'>{titleText} (Z-A)</option>
              <option value='auth-asc'>{authorText} (A-Z)</option>
              <option value='auth-desc'>{authorText} (Z-A)</option>
              <option value='rating'>{ratingText}</option>
              <option value='random'>{randomText}</option>
            </select>
          </div>
        </div>
        <div className='view-setting-toggle'>
          {viewSetting === 'grid' && (
            <div className='toggle-container'>
              <p className='toggle-text'>{listViewText}</p>
              <ListIcon
                className='toggle-icon'
                onMouseDown={(e) => handleToggleViewSetting(e)}
              />
            </div>
          )}
          {viewSetting === 'list' && (
            <div className='toggle-container'>
              <p className='toggle-text'>{gridViewText}</p>
              <GridIcon
                className='toggle-icon'
                onMouseDown={(e) => handleToggleViewSetting(e)}
              />
            </div>
          )}
        </div>
      </header>
      <div className='books-main-container'>
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          viewSetting={viewSetting}
          setViewSetting={setViewSetting}
          filterSetting={filterSetting}
          setFilterSetting={setFilterSetting}
          setVisibleListBooks={setVisibleListBooks}
          showBookmarks={showBookmarks}
          setShowBookmarks={setShowBookmarks}
          showUnavailable={showUnavailable}
          setShowUnavailable={setShowUnavailable}
          setUpdatedVisibleBooks={setUpdatedVisibleBooks}
        />
        {filteredBookList.length === 0 ? (
          <div
            className='book-list-submit-container'
            style={{
              padding: showSidebar ? '0px 0px 0px 5px' : '0px 0px 0px 0px',
              width: showSidebar ? 'calc(100% - 200px)' : '100%',
            }}
          >
            <div className='book-grid-view' style={{ alignItems: 'center' }}>
              <div className='no-books-message'>
                <BookClipart className='no-book-found-clipart' />
                <div className='no-book-info'>
                  <p className='no-book-info-text-header'>{noBooksFoundText}</p>
                  <p className='no-book-info-subtext'>{noBooksFoundSubtext}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {(viewSetting === 'grid' || viewSetting === 'mobile') && (
              <div
                className='book-list-submit-container'
                style={{
                  padding: showSidebar ? '0px 0px 0px 5px' : '0px 0px 0px 0px',
                  width: !showSidebar ? '100%' : 'calc(100% - 160px)',
                }}
              >
                <div className='book-grid-view'>
                  {bookRowsData.map((row, rowIndex) => (
                    <div key={rowIndex} className='book-grid-row'>
                      {row.books.map((book: Book) => {
                        const bookUrl = `/library/${formatTitleForURL(
                          book.title
                        )}`;
                        return (
                          <Link
                            key={book.id}
                            to={bookUrl}
                            className={`${
                              book.available < 1
                                ? 'book-card-unavailable'
                                : 'book-card'
                            }`}
                            onMouseEnter={() => setHovered(book.id)}
                            onMouseLeave={() => setHovered(null)}
                            onTouchStart={(e) => handleTouchStart(e, book.id)}
                            onTouchEnd={() => handleTouchEnd()}
                          >
                            <BookImage
                              book={book}
                              viewSetting={viewSetting}
                              hovered={hovered}
                              setHovered={setHovered}
                            />
                            <div className='book-info'>
                              <h3
                                className={`${
                                  book.available < 1
                                    ? 'book-title-unavailable'
                                    : 'book-title'
                                }`}
                              >
                                {book.title}
                              </h3>
                              <p className='book-author'>{book.author}</p>
                              <div className='book-language-rating-container'>
                                <p className='book-language'>
                                  {getLanguageText(book.language)}
                                </p>
                                {getLanguageIcon(book.language)}
                                <p className='pipe-icon'>|</p>
                                <div className='rating-container'>
                                  {!book.rating && (
                                    <StarGrey className='book-grid-star-icon' />
                                  )}
                                  {book.rating && (
                                    <>
                                      <StarColor className='book-grid-star-icon' />
                                      <p className='book-grid-rating'>
                                        {book.rating}
                                      </p>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                      {Array.from({ length: row.placeholders }).map(
                        (_, index) => (
                          <div
                            key={`placeholder-${rowIndex}-${index}`}
                            className='book-card-placeholder'
                          />
                        )
                      )}
                    </div>
                  ))}
                </div>
                {bookRows * updatedVisibleBooks < filteredBookList.length && (
                  <div className='view-more-button-container'>
                    <button
                      onClick={handleViewMore}
                      className='view-more-button'
                    >
                      View More
                    </button>
                  </div>
                )}
              </div>
            )}
            {viewSetting === 'list' && (
              <div
                className='book-list-submit-container'
                style={{ width: showSidebar ? 'calc(100% - 160px)' : '100%' }}
              >
                <div className='book-list-view'>
                  {listDisplayedBooks.map((book: Book) => {
                    const bookUrl = `/library/${formatTitleForURL(book.title)}`;
                    return (
                      <Link
                        key={book.id}
                        to={bookUrl}
                        className={`${
                          book.available < 1
                            ? 'book-card-list-unavailable'
                            : 'book-card-list'
                        }`}
                        onMouseEnter={() => setHovered(book.id)}
                        onMouseLeave={() => setHovered(null)}
                        onTouchStart={(e) => handleTouchStart(e, book.id)}
                        onTouchEnd={() => handleTouchEnd()}
                      >
                        <BookImage
                          book={book}
                          viewSetting={viewSetting}
                          hovered={hovered}
                          setHovered={setHovered}
                        />
                        <div className='book-list-info'>
                          <div className='book-list-title-author'>
                            <h3
                              className={`${
                                book.available < 1
                                  ? 'book-list-title-unavailable'
                                  : 'book-list-title'
                              }`}
                            >
                              {book.title}
                            </h3>
                            <p className='book-list-author'>{book.author}</p>
                            <div className='book-list-language-rating-container'>
                              <p className='book-list-language'>
                                {book.language}
                              </p>
                              {(book.language.toLowerCase() === 'french' ||
                                book.language.toLowerCase() === 'français') && (
                                <FrenchFlag className='book-list-language-flag' />
                              )}
                              {book.language.toLowerCase() === 'english' && (
                                <UKFlag className='book-list-language-flag' />
                              )}
                              <p className='pipe-icon'>|</p>
                              <div className='rating-container'>
                                {!book.rating && (
                                  <StarGrey className='book-list-star-icon' />
                                )}
                                {book.rating && (
                                  <>
                                    <StarColor className='book-list-star-icon' />
                                    <p className='book-list-rating'>
                                      {book.rating}
                                    </p>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className='book-list-desc'>
                            <p className='book-list-desc-text'>
                              {book.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                {visibleListBooks < filteredBookList.length && (
                  <div className='view-more-button-container'>
                    <button
                      onClick={handleViewMoreList}
                      className='view-more-button'
                    >
                      View More
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default BookList;
