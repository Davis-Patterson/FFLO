import React, { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link } from 'react-router-dom';
import StarGrey from 'Svgs/StarGrey';
import StarColor from 'Svgs/StarColor';
import FrenchFlag from 'Svgs/FrenchFlag';
import UKFlag from 'Svgs/UKFlag';
import FrenchBookIcon from 'Svgs/FrenchBookIcon';
import EnglishBookIcon from 'Svgs/EnglishBookIcon';
import DefaultBookIcon from 'Svgs/DefaultBookIcon';
import 'Styles/Utils/RentalHistory.css';

const RentalHistory: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }

  const { authUser, language, formatTitleForURL, formatDate } = context;

  // Translations
  const noRentalHistoryText =
    language === 'EN'
      ? 'No rental history available.'
      : 'Aucun historique de location disponible.';
  const returnedText = language === 'EN' ? 'Returned:' : 'Retourné:';
  const startText = language === 'EN' ? 'Reserved:' : 'Réservée:';
  const dueText = language === 'EN' ? 'Due Date:' : 'Exigible:';

  const getBookIcon = (language: string) => {
    switch (language) {
      case 'French':
        return <FrenchBookIcon className='book-icon' />;
      case 'English':
        return <EnglishBookIcon className='book-icon' />;
      default:
        return <DefaultBookIcon className='book-icon' />;
    }
  };

  const getStatusLabel = (historyItem: any) => {
    if (historyItem.return_date) {
      return { text: 'Returned', className: 'status-returned' };
    } else if (historyItem.late) {
      return { text: 'Late', className: 'status-late' };
    } else if (historyItem.is_active) {
      return { text: 'Active', className: 'status-active' };
    } else if (historyItem.reserved) {
      return { text: 'Reserved', className: 'status-reserved' };
    }
    return { text: '', className: '' };
  };

  if (
    !authUser ||
    !authUser.book_history ||
    authUser.book_history.length === 0
  ) {
    return <p className='no-history'>{noRentalHistoryText}</p>;
  }

  return (
    <section className='rental-history-container'>
      <h3>{language === 'EN' ? 'Rental History' : 'Historique de location'}</h3>
      <ul className='rental-history-list'>
        {authUser.book_history.map((historyItem, index) => {
          const { text: statusText, className: statusClass } =
            getStatusLabel(historyItem);
          const bookUrl = `/books/${formatTitleForURL(historyItem.book.title)}`;
          console.log('historyItem: ', historyItem);

          return (
            <React.Fragment key={index}>
              <div className='rental-history-item'>
                <div className='history-book-info'>
                  <Link to={bookUrl}>
                    <div className='history-book-image-container'>
                      <div
                        className='history-book-image-wrapper'
                        style={{
                          backgroundImage: historyItem.book.images[0]
                            ?.image_small
                            ? `url(${historyItem.book.images[0].image_small})`
                            : 'none',
                        }}
                      >
                        {historyItem.book.images[0]?.image_url ? (
                          <img
                            src={historyItem.book.images[0].image_url}
                            alt={historyItem.book.title}
                            className='history-book-image'
                            onLoad={(e) => {
                              const imgElement = e.target as HTMLImageElement;
                              imgElement.parentElement?.classList.add('loaded');
                            }}
                          />
                        ) : (
                          getBookIcon(historyItem.book.language)
                        )}
                      </div>
                    </div>
                  </Link>
                  <div className='history-book-details-container'>
                    <div className='history-book-details'>
                      <Link to={bookUrl}>
                        <h3 className='history-book-title'>
                          {historyItem.book.title}
                        </h3>
                      </Link>
                      <p className='history-book-author'>
                        {historyItem.book.author}
                      </p>
                      <div className='history-book-language-rating'>
                        <p className='history-book-language'>
                          {historyItem.book.language}
                        </p>
                        {historyItem.book.language === 'French' && (
                          <FrenchFlag className='book-language-flag' />
                        )}
                        {historyItem.book.language === 'English' && (
                          <UKFlag className='book-language-flag' />
                        )}
                        <p className='pipe-icon'>|</p>
                        <div className='rating-container'>
                          {!historyItem.book.rating ? (
                            <StarGrey className='history-star-icon' />
                          ) : (
                            <>
                              <StarColor className='history-star-icon' />
                              <p className='history-book-rating'>
                                {historyItem.book.rating.toFixed(1)}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='history-book-dates'>
                      <div className='history-book-status'>
                        <div className={statusClass}>
                          <span>{statusText}</span>
                        </div>
                      </div>
                      <div className='history-date-row'>
                        <p className='history-date-label'>{startText}</p>
                        <p className='history-date-value'>
                          {formatDate(historyItem.rental_date)}
                        </p>
                      </div>
                      {!historyItem.return_date && (
                        <div className='history-date-row'>
                          <p className='history-date-label'>{dueText}</p>
                          <p className='history-date-value'>
                            {formatDate(historyItem.due_date)}
                          </p>
                        </div>
                      )}
                      {historyItem.return_date && (
                        <div className='history-date-row'>
                          <p className='history-date-label'>{returnedText}</p>
                          <p className='history-date-value'>
                            {formatDate(historyItem.return_date)}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {index < authUser.book_history.length - 1 && (
                <svg className='rental-history-line-divider'>
                  <line x1='0' y1='50%' x2='100%' y2='50%' />
                </svg>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </section>
  );
};

export default RentalHistory;
