import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Book } from 'Contexts/AppContext';
import ServerApi from 'Utilities/ServerApi';
import FrenchBookIcon from 'Svgs/FrenchBookIcon';
import EnglishBookIcon from 'Svgs/EnglishBookIcon';
import DefaultBookIcon from 'Svgs/DefaultBookIcon';
import BookmarkSolid from 'Svgs/BookmarkSolid';
import BookmarkOutline from 'Svgs/BookmarkOutline';
import 'Styles/Utils/BookImage.css';

interface BookImageProps {
  book: Book;
  viewSetting: string;
}

const BookImage: React.FC<BookImageProps> = ({ book, viewSetting }) => {
  const { createBookmark, deleteBookmark } = ServerApi();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { bookmarkedBooks, setBookmarkedBooks } = context;

  const [imgIndex, setImgIndex] = useState(1);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const isBookmarked = bookmarkedBooks.some((b) => b.id === book.id);

  const hasImage = book.images && book.images.length > 0;

  const getBookIcon = (book: Book) => {
    if (book?.language === 'French') {
      return <FrenchBookIcon className='book-list-cover-icon' />;
    } else if (book?.language === 'English') {
      return <EnglishBookIcon className='book-list-cover-icon' />;
    } else {
      return <DefaultBookIcon className='book-list-cover-icon' />;
    }
  };

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

  const cycleImages = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setImgIndex(nextIndex); // Set the next image as the current image
      setNextIndex((nextIndex + 1) % book.images.length); // Update the next index
      setIsTransitioning(false);
    }, 500); // Matches the CSS transition duration
  };

  useEffect(() => {
    if (book.images.length > 1) {
      const interval = setInterval(() => {
        cycleImages();
      }, 2000); // Cycle every 2 seconds
      return () => clearInterval(interval);
    }
  }, [book.images.length, nextIndex]);

  return (
    <>
      <div
        className={
          viewSetting === 'grid'
            ? 'book-image-container'
            : 'book-image-list-container'
        }
      >
        <div className='book-list-bookmark-toggle-container'>
          {isBookmarked ? (
            <BookmarkSolid
              className='book-list-bookmark-icon-bookmarked'
              onClick={(e) => handleRemoveBookmark(e, book.id)}
            />
          ) : (
            <BookmarkOutline
              className='book-list-bookmark-icon'
              onClick={(e) => handleAddBookmark(e, book.id)}
            />
          )}
        </div>
        {book.flair && (
          <div className='book-flair-container'>
            <p className='book-flair'>{book.flair}</p>
          </div>
        )}
        <div
          className={`book-image-wrapper ${hasImage ? 'blur-load' : ''}`}
          style={{
            backgroundImage: `url(${book.images[0]?.image_small})`,
          }}
        >
          {!hasImage ? (
            getBookIcon(book)
          ) : book.images.length > 1 ? (
            <>
              {book.images.map(
                (image, index) =>
                  imgIndex === index && (
                    <img
                      key={index}
                      src={image.image_url || ''}
                      alt={`${book.title} - Image ${index + 1}`}
                      className={`book-slide-image ${
                        isTransitioning ? 'blur-transition' : 'visible'
                      }`}
                      onLoad={(e) => {
                        const imgElement = e.target as HTMLImageElement;
                        imgElement.parentElement?.classList.add('loaded');
                      }}
                    />
                  )
              )}
              {book.images.map(
                (image, index) =>
                  nextIndex === index && (
                    <img
                      key={index}
                      src={image.image_url || ''}
                      alt={`${book.title} - Image ${index + 1}`}
                      className='book-slide-image fade-in'
                      onLoad={(e) => {
                        const imgElement = e.target as HTMLImageElement;
                        imgElement.parentElement?.classList.add('loaded');
                      }}
                    />
                  )
              )}
            </>
          ) : (
            <img
              src={book.images[0]?.image_url ?? undefined}
              alt={book.title}
              className='book-image'
              onLoad={(e) => {
                const imgElement = e.target as HTMLImageElement;
                imgElement.parentElement?.classList.add('loaded');
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BookImage;
