import React, { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Book } from 'Contexts/AppContext';
import { Link } from 'react-router-dom';
import ReservationApi from 'Utilities/ReservationApi';
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
import XIcon from 'Svgs/XIcon';

const CheckedOut: React.FC = () => {
  const { cancelReservation } = ReservationApi();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authUser,
    setAuthUser,
    updateSingleBook,
    language,
    formatTitleForURL,
    formatDate,
  } = context;

  // Translations
  const noBookText =
    language === 'EN'
      ? 'No book currently checked out.'
      : 'Aucun livre actuellement extrait.';
  const currentReservationText =
    language === 'EN' ? 'Current reservation' : 'Réservation en cours';
  const startText = language === 'EN' ? 'Reserved:' : 'Réservée:';
  const dueText = language === 'EN' ? 'Due Date:' : 'Exigible:';
  const activeText = language === 'EN' ? 'Active' : 'Active';
  const reservedText = language === 'EN' ? 'Reserved' : 'Réservée';
  const lateText = language === 'EN' ? 'Late' : 'En retard';

  const getBookIcon = (book: Book) => {
    if (book?.language === 'French') {
      return <FrenchBookIcon className='book-clipart-placeholder' />;
    } else if (book?.language === 'English') {
      return <EnglishBookIcon className='book-clipart-placeholder' />;
    } else {
      return <DefaultBookIcon className='book-clipart-placeholder' />;
    }
  };

  const handleCancelReservation = async () => {
    try {
      const result = await cancelReservation(checkedOutBook.id);
      if (result.success && result.data) {
        setAuthUser(result.data.user);
        updateSingleBook(result.data.book);
      } else {
        console.error(result.error || 'Failed to cancel reservation');
      }
    } catch (error) {
      console.error('Error canceling reservation:', error);
    }
  };

  if (!authUser?.checked_out || authUser.checked_out.length === 0) {
    return (
      <div className='no-checked-out-header'>
        <BookClipart className='book-clipart' />
        <p className='no-checked-out-header-text'>{noBookText}</p>
        <div className='no-checked-out-header-icons'>
          <Pencil2 className='checked-out-pencil-icon' />
          <TapeIcon className='checked-out-tape-icon' />
          <RulerIcon className='checked-out-ruler-icon' />
        </div>
      </div>
    );
  }

  const checkedOutData = authUser.checked_out[0];
  const checkedOutBook = checkedOutData.book;
  const bookUrl = `/library/${formatTitleForURL(checkedOutBook.title)}`;
  const hasImage = checkedOutBook.images && checkedOutBook.images.length > 0;

  // Determine status to display
  let statusText = '';
  let statusClass = '';
  if (checkedOutData.late) {
    statusText = lateText;
    statusClass = 'status-late';
  } else if (checkedOutData.is_active) {
    statusText = activeText;
    statusClass = 'status-active';
  } else if (checkedOutData.reserved) {
    statusText = reservedText;
    statusClass = 'status-reserved';
  }

  return (
    <>
      <section className='checked-out-container'>
        <div className='checked-out-info-icons-container'>
          <div className='checked-out-info-container'>
            <header className='checked-out-header-text'>
              {currentReservationText}
            </header>
            <div className='checked-out-book-container'>
              <div className='checked-out-book-image-container'>
                <Link to={bookUrl}>
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
                </Link>
              </div>
              <div className='checked-out-book-info'>
                <Link to={bookUrl}>
                  <h3 className='checked-out-book-title'>
                    {checkedOutBook.title}
                  </h3>
                </Link>
                <p className='checked-out-book-author'>
                  {checkedOutBook.author}
                </p>
                <div className='checked-out-book-language-rating'>
                  <p className='checked-out-book-language'>
                    {checkedOutBook.language}
                  </p>
                  {(checkedOutBook.language.toLowerCase() === 'french' ||
                    checkedOutBook.language.toLowerCase() === 'français') && (
                    <FrenchFlag className='book-language-flag' />
                  )}
                  {checkedOutBook.language.toLowerCase() === 'english' && (
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
                <div className='checked-out-book-status'>
                  <div className={statusClass}>
                    <span>{statusText}</span>
                  </div>
                  {checkedOutData.reserved && (
                    <XIcon
                      className='reserved-x-ixon'
                      onClick={handleCancelReservation}
                    />
                  )}
                </div>
                <div className='checked-out-dates-container'>
                  <div className='checked-out-date-container'>
                    <p className='checked-out-book-date-text'>{startText}</p>
                    <p className='checked-out-book-date'>
                      {formatDate(checkedOutData.rental_date)}
                    </p>
                  </div>
                  <div className='checked-out-date-container'>
                    <p className='checked-out-book-due-date-text'>{dueText}</p>
                    <p className='checked-out-book-due-date'>
                      {formatDate(checkedOutData.due_date)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='checked-out-icons-container'>
            <Pencil2 className='checked-out-pencil-icon' />
            <TapeIcon className='checked-out-tape-icon' />
            <RulerIcon className='checked-out-ruler-icon' />
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckedOut;
