import React, { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Book } from 'Contexts/AppContext';
import { Link } from 'react-router-dom';
import BookClipart from 'Svgs/BookClipart';
import Pencil2 from 'Svgs/Pencil2';
import RulerIcon from 'Svgs/RulerIcon';
import TapeIcon from 'Svgs/TapeIcon';
import FrenchFlag from 'Svgs/FrenchFlag';
import UKFlag from 'Svgs/UKFlag';
import StarGrey from 'Svgs/StarGrey';
import StarColor from 'Svgs/StarColor';
import FrenchBookIcon from 'Svgs/FrenchBookIcon';
import EnglishBookIcon from 'Svgs/EnglishBookIcon';
import DefaultBookIcon from 'Svgs/DefaultBookIcon';
import 'Styles/Utils/CheckedOut.css';

const CheckedOut: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authUser, language, formatTitleForURL, formatDate } = context;

  // Translations
  const noBookText =
    language === 'EN'
      ? 'No book currently checked out.'
      : 'Aucun livre actuellement extrait.';
  const startText = language === 'EN' ? 'Start:' : 'Commencer:';
  const dueText = language === 'EN' ? 'Due:' : 'Exigible:';

  const getBookIcon = (book: Book) => {
    if (book?.language === 'French') {
      return <FrenchBookIcon className='book-clipart-placeholder' />;
    } else if (book?.language === 'English') {
      return <EnglishBookIcon className='book-clipart-placeholder' />;
    } else {
      return <DefaultBookIcon className='book-clipart-placeholder' />;
    }
  };

  if (!authUser?.checked_out || authUser.checked_out.length === 0) {
    return (
      <div className='no-checked-out-header'>
        <BookClipart className='book-clipart' />
        <p className='no-checked-out-header-text'>{noBookText}</p>
        <div className='no-checked-out-header-icons'>
          <Pencil2 className='pencil-icon' />
          <TapeIcon className='tape-icon' />
          <RulerIcon className='ruler-icon' />
        </div>
      </div>
    );
  }

  const checkedOutData = authUser.checked_out[0];
  const checkedOutBook = checkedOutData.book;
  const bookUrl = `/books/${formatTitleForURL(checkedOutBook.title)}`;
  const hasImage = checkedOutBook.images && checkedOutBook.images.length > 0;

  // Determine status to display
  let statusText = '';
  let statusClass = '';
  if (checkedOutData.late) {
    statusText = 'Late';
    statusClass = 'status-late';
  } else if (checkedOutData.is_active) {
    statusText = 'Active Rental';
    statusClass = 'status-active';
  } else if (checkedOutData.reserved) {
    statusText = 'Reserved';
    statusClass = 'status-reserved';
  }

  return (
    <div className='checked-out-book-container'>
      <Link to={bookUrl} className='checked-out-book-link'>
        <div className='checked-out-book-image-container'>
          <div
            className={`checked-out-book-image-wrapper ${
              hasImage ? 'blur-load' : ''
            }`}
            style={{
              backgroundImage: hasImage
                ? `url(${checkedOutBook.images[0].image_small})`
                : 'none',
            }}
          >
            {hasImage ? (
              <img
                src={checkedOutBook.images[0].image_url || undefined}
                alt={checkedOutBook.title}
                className='checked-out-book-image'
                onLoad={(e) => {
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.parentElement?.classList.add('loaded');
                }}
              />
            ) : (
              getBookIcon(checkedOutBook)
            )}
          </div>
        </div>
        <div className='checked-out-book-info'>
          <div className={`checked-out-book-status ${statusClass}`}>
            <span>{statusText}</span>
          </div>
          <h3 className='checked-out-book-title'>{checkedOutBook.title}</h3>
          <p className='checked-out-book-author'>{checkedOutBook.author}</p>
          <div className='checked-out-book-language-rating'>
            <p className='checked-out-book-language'>
              {checkedOutBook.language}
            </p>
            {checkedOutBook.language === 'French' && (
              <FrenchFlag className='book-language-flag' />
            )}
            {checkedOutBook.language === 'English' && (
              <UKFlag className='book-language-flag' />
            )}
            <p className='pipe-icon'>|</p>
            <div className='rating-container'>
              {!checkedOutBook.rating ? (
                <StarGrey className='checked-out-star-icon' />
              ) : (
                <>
                  <StarColor className='checked-out-star-icon' />
                  <p className='checked-out-book-rating'>
                    {checkedOutBook.rating.toFixed(1)}
                  </p>
                </>
              )}
            </div>
          </div>
          <p className='checked-out-book-date'>
            {startText} {formatDate(checkedOutData.rental_date)}
          </p>
          <p className='checked-out-book-due-date'>
            {dueText} {formatDate(checkedOutData.due_date)}
          </p>
        </div>
      </Link>
      <div className='no-checked-out-header-icons'>
        <Pencil2 className='pencil-icon' />
        <TapeIcon className='tape-icon' />
        <RulerIcon className='ruler-icon' />
      </div>
    </div>
  );
};

export default CheckedOut;
