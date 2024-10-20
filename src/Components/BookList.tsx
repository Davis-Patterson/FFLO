import React, { useState, useContext } from 'react';
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
  const { language } = context;

  const [viewSetting, setViewSetting] = useState<string>('grid');

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

  return (
    <section className='book-list-container'>
      <div className='view-setting-toggle'>
        {viewSetting === 'grid' && (
          <div className='toggle-container'>
            <p className='toggle-text'>{gridViewText}</p>
            <GridIcon
              className='toggle-icon'
              onMouseDown={(e) => handleToggleViewSetting(e)}
            />
          </div>
        )}
        {viewSetting === 'list' && (
          <div className='toggle-container'>
            <p className='toggle-text'>{listViewText}</p>
            <ListIcon
              className='toggle-icon'
              onMouseDown={(e) => handleToggleViewSetting(e)}
            />
          </div>
        )}
      </div>
      {viewSetting === 'grid' && (
        <div className='book-grid-view'>
          {bookList.map((book: Book) => {
            const hasImage = !!book.images[0]?.image_url;
            return (
              <div key={book.id} className='book-card'>
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
            );
          })}
        </div>
      )}
      {viewSetting === 'list' && (
        <div className='book-list-view'>
          {bookList.map((book: Book) => {
            const hasImage = !!book.images[0]?.image_url;
            return (
              <div key={book.id} className='book-card'>
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
            );
          })}
        </div>
      )}
    </section>
  );
};

export default BookList;
