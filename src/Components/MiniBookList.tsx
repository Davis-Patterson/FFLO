import React, { useContext, useState } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link } from 'react-router-dom';
import { Book } from 'Contexts/AppContext';
import ServerApi from 'Utilities/ServerApi';
import ChevronRight from 'Svgs/ChevronRight';
import BookCoverIcon from 'Svgs/BookCoverIcon';
import BookmarkSolid from 'Svgs/BookmarkSolid';
import BookmarkOutline from 'Svgs/BookmarkOutline';
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/MiniBookList.css';

const MiniBookList: React.FC = () => {
  const { createBookmark, deleteBookmark } = ServerApi();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { allBooks, bookmarkedBooks, setBookmarkedBooks, formatTitleForURL } =
    context;

  const [currentIndex, setCurrentIndex] = useState(0);
  const booksPerPage = 4;

  const handleAddBookmark = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    bookId: number
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    try {
      const result = await createBookmark(bookId);
      if (result.success) {
        setBookmarkedBooks(result.data.bookmarks);
      } else {
        console.error(result.error || 'Failed to add bookmark');
      }
    } catch (error) {
      console.error('Error in handleAddBookmark:', error);
    }
  };

  const handleRemoveBookmark = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    bookId: number
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    try {
      const result = await deleteBookmark(bookId);
      if (result.success && result.data) {
        setBookmarkedBooks(result.data.bookmarks);
      } else {
        console.error(result.error || 'Failed to remove bookmark');
      }
    } catch (error) {
      console.error('Error in handleRemoveBookmark:', error);
    }
  };

  const handleNext = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    if (currentIndex + booksPerPage < allBooks.length) {
      setCurrentIndex(currentIndex + booksPerPage);
    }
  };

  const handlePrev = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    if (currentIndex - booksPerPage >= 0) {
      setCurrentIndex(currentIndex - booksPerPage);
    }
  };

  const shuffleArray = (array: Book[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const randomBooks = shuffleArray(allBooks);

  const displayedBooks = [];
  for (let i = 0; i < booksPerPage; i++) {
    const bookIndex = (currentIndex + i) % randomBooks.length;
    displayedBooks.push(randomBooks[bookIndex]);
  }

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex + booksPerPage >= allBooks.length;

  if (!allBooks || allBooks.length === 0) {
    return <LinearProgress />;
  }

  return (
    <>
      <div className='mini-list-container'>
        <div className='mini-list-container-prev'>
          <ChevronRight
            className={`mini-list-prev ${isAtStart ? 'disabled' : ''}`}
            onMouseDown={(e) => handlePrev(e)}
          />
        </div>
        <div className='mini-list-slider-container'>
          <div className='mini-list-slider'>
            {displayedBooks.map((book: Book) => {
              const hasImage = !!book.images[0]?.image_url;
              const bookUrl = `/books/${formatTitleForURL(book.title)}`;
              const isBookmarked = bookmarkedBooks.some(
                (b) => b.id === book.id
              );
              return (
                <Link
                  key={book.id}
                  to={bookUrl}
                  className='mini-list-book-card'
                >
                  <div className='mini-list-image-container'>
                    <div className='mini-list-bookmark-toggle-container'>
                      {isBookmarked ? (
                        <BookmarkSolid
                          className='mini-list-bookmark-icon-bookmarked'
                          onClick={(e) => handleRemoveBookmark(e, book.id)}
                        />
                      ) : (
                        <BookmarkOutline
                          className='mini-list-bookmark-icon'
                          onClick={(e) => handleAddBookmark(e, book.id)}
                        />
                      )}
                    </div>
                    {book.flair && (
                      <div className='mini-list-flair-container'>
                        <p className='mini-list-flair'>{book.flair}</p>
                      </div>
                    )}
                    <div
                      className={`mini-list-image-wrapper ${
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
                          className='mini-list-image'
                          onLoad={(e) => {
                            const imgElement = e.target as HTMLImageElement;
                            imgElement.parentElement?.classList.add('loaded');
                          }}
                        />
                      ) : (
                        <BookCoverIcon className='mini-list-cover-icon' />
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className='mini-list-container-next'>
          <ChevronRight
            className={`mini-list-next ${isAtEnd ? 'disabled' : ''}`}
            onMouseDown={(e) => handleNext(e)}
          />
        </div>
      </div>
    </>
  );
};

export default MiniBookList;
