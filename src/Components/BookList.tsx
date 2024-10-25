import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from 'Contexts/AppContext';
import { Book } from 'Contexts/AppContext';
import BookCoverIcon from 'Svgs/BookCoverIcon';
import GridIcon from 'Svgs/GridIcon';
import ListIcon from 'Svgs/ListIcon';
import 'Styles/BookList.css';

interface BookListProps {
  bookList: Book[];
}

const BookList: React.FC<BookListProps> = ({ bookList }) => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    language,
    categoryFilter,
    formatTitleForURL,
    viewSetting,
    setViewSetting,
    filterSetting,
    setFilterSetting,
  } = context;

  // translations
  const gridViewText = language === 'EN' ? 'Grid' : 'Grille';
  const listViewText = language === 'EN' ? 'List' : 'Liste';

  const handleToggleViewSetting = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    if (viewSetting === 'grid') {
      setViewSetting('list');
    }
    if (viewSetting === 'list') {
      setViewSetting('grid');
    }
  };

  const filteredBookList = categoryFilter
    ? bookList.filter((book) => book.categories.includes(categoryFilter))
    : bookList;

  const sortedBookList = [...filteredBookList].sort((a, b) => {
    if (filterSetting === 'title-asc') {
      return a.title.localeCompare(b.title);
    } else if (filterSetting === 'title-desc') {
      return b.title.localeCompare(a.title);
    } else if (filterSetting === 'auth-asc') {
      return a.author.localeCompare(b.author);
    } else if (filterSetting === 'auth-desc') {
      return b.author.localeCompare(a.author);
    }
    return 0;
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSetting(event.target.value);
  };

  return (
    <section className='book-list-container'>
      <div className='page-toggles-container'>
        <div className='filter-setting'>
          <select
            value={filterSetting}
            onChange={handleFilterChange}
            className='filter-dropdown'
          >
            <option value='title-asc'>Title (A-Z)</option>
            <option value='title-desc'>Title (Z-A)</option>
            <option value='auth-asc'>Author (A-Z)</option>
            <option value='auth-desc'>Author (Z-A)</option>
          </select>
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
      </div>
      {viewSetting === 'grid' && (
        <div className='book-grid-view'>
          {sortedBookList.map((book: Book) => {
            const hasImage = !!book.images[0]?.image_url;
            const bookUrl = `/books/${formatTitleForURL(book.title)}`;

            return (
              <Link key={book.id} to={bookUrl} className='book-card-link'>
                <div className='book-card'>
                  <div className='book-image-container'>
                    {book.flair && (
                      <div className='book-flair-container'>
                        <p className='book-flair'>{book.flair}</p>
                      </div>
                    )}
                    <div
                      className={`book-image-wrapper ${
                        hasImage ? 'blur-load' : ''
                      }`}
                      style={{
                        backgroundImage: `url(${book.images[0]?.image_small})`,
                      }}
                    >
                      {hasImage ? (
                        <img
                          src={book.images[0]?.image_url ?? undefined}
                          alt={book.title}
                          className='book-image'
                          onLoad={(e) => {
                            const imgElement = e.target as HTMLImageElement;
                            imgElement.parentElement?.classList.add('loaded');
                          }}
                        />
                      ) : (
                        <BookCoverIcon className='book-list-cover-icon' />
                      )}
                    </div>
                  </div>
                  <div className='book-info'>
                    <h3 className='book-title'>{book.title}</h3>
                    <p className='book-author'>{book.author}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      {viewSetting === 'list' && (
        <div className='book-list-view'>
          {sortedBookList.map((book: Book) => {
            const hasImage = !!book.images[0]?.image_url;
            const bookUrl = `/books/${formatTitleForURL(book.title)}`;

            return (
              <Link key={book.id} to={bookUrl} className='book-card-link'>
                <div className='book-card'>
                  <div className='book-image-container'>
                    {book.flair && (
                      <div className='book-flair-container'>
                        <p className='book-flair'>{book.flair}</p>
                      </div>
                    )}
                    <div
                      className={`book-image-wrapper ${
                        hasImage ? 'blur-load' : ''
                      }`}
                      style={{
                        backgroundImage: `url(${book.images[0]?.image_small})`,
                      }}
                    >
                      {hasImage ? (
                        <img
                          src={book.images[0]?.image_url ?? undefined}
                          alt={book.title}
                          className='book-image'
                          onLoad={(e) => {
                            const imgElement = e.target as HTMLImageElement;
                            imgElement.parentElement?.classList.add('loaded');
                          }}
                        />
                      ) : (
                        <BookCoverIcon className='book-cover-icon' />
                      )}
                    </div>
                  </div>
                  <div className='book-info'>
                    <h3 className='book-title'>{book.title}</h3>
                    <p className='book-author'>{book.author}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default BookList;
