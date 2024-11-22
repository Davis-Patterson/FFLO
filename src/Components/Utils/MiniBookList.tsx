import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link } from 'react-router-dom';
import { Book } from 'Contexts/AppContext';
import ServerApi from 'Utilities/ServerApi';
import ChevronRight from 'Svgs/ChevronRight';
import FrenchBookIcon from 'Svgs/FrenchBookIcon';
import BookmarkedOutline from 'Svgs/BookmarkedOutline';
import BookmarkOutline from 'Svgs/BookmarkOutline';
import LinearProgress from '@mui/material/LinearProgress';
import EnglishBookIcon from 'Svgs/EnglishBookIcon';
import DefaultBookIcon from 'Svgs/DefaultBookIcon';
import 'Styles/Utils/MiniBookList.css';

const MiniBookList: React.FC = () => {
  const { createBookmark, deleteBookmark } = ServerApi();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authToken,
    authUser,
    allBooks,
    bookmarkedBooks,
    setBookmarkedBooks,
    setShowAuth,
    miniVisibleBooks,
    formatTitleForURL,
  } = context;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledBooks, setShuffledBooks] = useState<Book[]>([]);
  const showUnavailable = false;

  useEffect(() => {
    const shuffleArray = (array: Book[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const availableBooks = showUnavailable
      ? allBooks
      : allBooks.filter((book) => book.available > 0);

    const checkedOutBookId = authUser?.checked_out?.[0]?.book?.id ?? null;
    const filteredBookList = availableBooks.filter(
      (book) => book.id !== checkedOutBookId
    );

    setShuffledBooks(shuffleArray(filteredBookList));
  }, [allBooks, authUser, showUnavailable]);

  const handleAddBookmark = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    bookId: number
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    if (!authToken || !authUser) {
      setShowAuth(true);
    } else {
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

    if (currentIndex + miniVisibleBooks < allBooks.length) {
      setCurrentIndex(currentIndex + miniVisibleBooks);
    }
  };

  const handlePrev = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    if (currentIndex - miniVisibleBooks >= 0) {
      setCurrentIndex(currentIndex - miniVisibleBooks);
    }
  };

  if (!allBooks || !shuffledBooks || shuffledBooks.length === 0) {
    return (
      <>
        <div className='mini-list-wrapper'>
          <div className='mini-list-container'>
            <div className='mini-list-container-prev'>
              <ChevronRight
                className='mini-list-prev disabled'
                onMouseDown={(e) => handlePrev(e)}
              />
            </div>
            <div className='mini-list-slider-container'>
              <div className='mini-list-slider'>
                <LinearProgress color='inherit' />
              </div>
            </div>
            <div className='mini-list-container-next'>
              <ChevronRight
                className='mini-list-next disabled'
                onMouseDown={(e) => handleNext(e)}
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  const displayedBooks = [];
  for (let i = 0; i < miniVisibleBooks; i++) {
    const bookIndex = (currentIndex + i) % shuffledBooks.length;
    displayedBooks.push(shuffledBooks[bookIndex]);
  }

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex + miniVisibleBooks >= allBooks.length;

  return (
    <>
      <div className='mini-list-wrapper'>
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
                const bookUrl = `/library/${formatTitleForURL(book.title)}`;
                const isBookmarked = bookmarkedBooks.some(
                  (b) => b.id === book.id
                );

                const getBookIcon = () => {
                  if (book?.language === 'French') {
                    return <FrenchBookIcon className='mini-list-cover-icon' />;
                  } else if (book?.language === 'English') {
                    return <EnglishBookIcon className='mini-list-cover-icon' />;
                  } else {
                    return <DefaultBookIcon className='mini-list-cover-icon' />;
                  }
                };
                return (
                  <Link
                    key={book.id}
                    to={bookUrl}
                    className='mini-list-book-card'
                  >
                    <div className='mini-list-image-container'>
                      <div className='mini-list-bookmark-toggle-container'>
                        {isBookmarked ? (
                          <BookmarkedOutline
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
                          getBookIcon()
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
      </div>
    </>
  );
};

export default MiniBookList;
