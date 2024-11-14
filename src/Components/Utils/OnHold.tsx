import React, { useContext, useState } from 'react';
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
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/Utils/OnHold.css';

const OnHold: React.FC = () => {
  const { removeHold } = ReservationApi();
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

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Translations
  const noBookText =
    language === 'EN'
      ? 'No book currently on hold.'
      : 'Aucun livre en attente actuellement';
  const currentOnHoldText =
    language === 'EN' ? 'Currently on hold' : 'Actuellement en attente';
  const holdDateText = language === 'EN' ? 'Hold Date:' : 'Date de début:';
  const activeText = language === 'EN' ? 'Active' : 'Active';
  const removeHoldText =
    language === 'EN' ? 'Remove Hold' : 'Supprimer la retenue';

  const getBookIcon = (book: Book) => {
    if (book?.language === 'French') {
      return <FrenchBookIcon className='book-clipart-placeholder' />;
    } else if (book?.language === 'English') {
      return <EnglishBookIcon className='book-clipart-placeholder' />;
    } else {
      return <DefaultBookIcon className='book-clipart-placeholder' />;
    }
  };

  const handleRemoveHold = async (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setIsLoading(true);
    try {
      const result = await removeHold(onHoldBook.id);
      if (result.success && result.data) {
        console.log('Reservation canceled successfully');

        setAuthUser(result.data.user);
        updateSingleBook(result.data.book);
      } else {
        console.error(result.error || 'Failed to cancel reservation');
      }
    } catch (error) {
      console.error('Error canceling reservation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!authUser?.on_hold || authUser.on_hold.length === 0) {
    return (
      <div className='no-on-hold-header'>
        <BookClipart className='book-clipart' />
        <p className='no-on-hold-header-text'>{noBookText}</p>
        <div className='no-on-hold-header-icons'>
          <Pencil2 className='pencil-icon' />
          <TapeIcon className='tape-icon' />
          <RulerIcon className='ruler-icon' />
        </div>
      </div>
    );
  }

  const onHoldData = authUser.on_hold[0];
  const onHoldBook = onHoldData.book;
  const bookUrl = `/library/${formatTitleForURL(onHoldBook.title)}`;
  const hasImage = onHoldBook.images && onHoldBook.images.length > 0;

  return (
    <>
      <section className='on-hold-container'>
        <div className='on-hold-info-icons-container'>
          <div className='on-hold-info-container'>
            <header className='on-hold-header-text'>{currentOnHoldText}</header>
            <div className='on-hold-book-container'>
              <div className='on-hold-book-image-container'>
                <Link to={bookUrl}>
                  <div
                    className={`on-hold-book-image-wrapper ${
                      hasImage ? 'blur-load' : ''
                    }`}
                    style={{
                      backgroundImage: hasImage
                        ? `url(${onHoldBook.images[0].image_small})`
                        : 'none',
                    }}
                  >
                    {hasImage ? (
                      <img
                        src={onHoldBook.images[0].image_url || undefined}
                        alt={onHoldBook.title}
                        className='on-hold-book-image'
                        onLoad={(e) => {
                          const imgElement = e.target as HTMLImageElement;
                          imgElement.parentElement?.classList.add('loaded');
                        }}
                      />
                    ) : (
                      getBookIcon(onHoldBook)
                    )}
                  </div>
                </Link>
              </div>
              <div className='on-hold-book-info'>
                <Link to={bookUrl}>
                  <h3 className='on-hold-book-title'>{onHoldBook.title}</h3>
                </Link>
                <p className='on-hold-book-author'>{onHoldBook.author}</p>
                <div className='on-hold-book-language-rating'>
                  <p className='on-hold-book-language'>{onHoldBook.language}</p>
                  {(onHoldBook.language.toLowerCase() === 'french' ||
                    onHoldBook.language.toLowerCase() === 'français') && (
                    <FrenchFlag className='book-language-flag' />
                  )}
                  {onHoldBook.language.toLowerCase() === 'english' && (
                    <UKFlag className='book-language-flag' />
                  )}
                  <p className='pipe-icon'>|</p>
                  <div className='rating-container'>
                    {!onHoldBook.rating ? (
                      <StarGrey className='on-hold-star-icon' />
                    ) : (
                      <>
                        <StarColor className='on-hold-star-icon' />
                        <p className='on-hold-book-rating'>
                          {onHoldBook.rating.toFixed(1)}
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <div className='on-hold-book-status'>
                  <div className='status-active'>
                    <span>{activeText}</span>
                  </div>
                </div>
                <div className='on-hold-dates-container'>
                  <div className='on-hold-date-container'>
                    <p className='on-hold-book-date-text'>{holdDateText}</p>
                    <p className='on-hold-book-date'>
                      {formatDate(onHoldData.hold_date)}
                    </p>
                  </div>
                </div>
                <button
                  className='remove-hold-button'
                  onClick={handleRemoveHold}
                >
                  {isLoading ? (
                    <LinearProgress color='inherit' />
                  ) : (
                    removeHoldText
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className='on-hold-icons-container'>
            <Pencil2 className='pencil-icon' />
            <TapeIcon className='tape-icon' />
            <RulerIcon className='ruler-icon' />
          </div>
        </div>
      </section>
    </>
  );
};

export default OnHold;
