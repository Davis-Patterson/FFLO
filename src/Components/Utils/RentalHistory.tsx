import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link } from 'react-router-dom';
import StarGrey from 'Svgs/StarGrey';
import StarColor from 'Svgs/StarColor';
import FrenchFlag from 'Svgs/FrenchFlag';
import UKFlag from 'Svgs/UKFlag';
import FrenchBookIcon from 'Svgs/FrenchBookIcon';
import EnglishBookIcon from 'Svgs/EnglishBookIcon';
import DefaultBookIcon from 'Svgs/DefaultBookIcon';
import BookStack from 'Svgs/BookStack';
import 'Styles/Utils/RentalHistory.css';

type IconProps = React.SVGProps<SVGSVGElement>;

const RentalHistory: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }

  const { authUser, language, formatTitleForURL, formatDate, natureIcons } =
    context;
  const [visibleCount, setVisibleCount] = useState(3);
  const [shuffledIcons, setShuffledIcons] = useState<React.FC[]>([]);
  const [filterSetting, setFilterSetting] = useState<string>('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const loadMore = () => setVisibleCount((prev) => prev + 3);

  useEffect(() => {
    const shuffled = Object.values(natureIcons)
      .map((icon) => ({ icon, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ icon }) => icon);

    setShuffledIcons(shuffled);
  }, [natureIcons]);

  const rentalHistoryText =
    language === 'EN' ? 'Rental History' : 'Historique de location';
  const noBooksFoundText =
    language === 'EN'
      ? 'No books match your search.'
      : 'Aucun livre ne correspond à votre recherche.';
  const noBooksFoundSubtext =
    language === 'EN'
      ? 'Your search did not match the information of any book. Please try again.'
      : 'Votre recherche ne correspond aux informations d’aucun livre. Veuillez réessayer.';
  const noRentalHistoryHeader =
    language === 'EN'
      ? 'No rental history found.'
      : 'Aucun historique de location trouvé.';
  const noRentalHistoryFound =
    language === 'EN'
      ? 'We did not find any rental history for your account. Please try again.'
      : "Nous n'avons trouvé aucun historique de location pour votre compte. Veuillez réessayer.";
  const activeText = language === 'EN' ? 'Active' : 'Active';
  const reservedText = language === 'EN' ? 'Reserved' : 'Réservée';
  const lateText = language === 'EN' ? 'Late' : 'En retard';
  const returnedText = language === 'EN' ? 'Returned:' : 'Retourné:';
  const showingText = language === 'EN' ? 'Showing:' : 'Montrant :';
  const startText = language === 'EN' ? 'Reserved:' : 'Réservée:';
  const dueText = language === 'EN' ? 'Due Date:' : 'Exigible:';
  const newestText = language === 'EN' ? 'Newest' : 'Récente';
  const oldestText = language === 'EN' ? 'Oldest' : 'Vieille';

  const getBookIcon = (language: string) => {
    switch (language) {
      case 'French':
        return <FrenchBookIcon className='history-book-icon' />;
      case 'English':
        return <EnglishBookIcon className='history-book-icon' />;
      default:
        return <DefaultBookIcon className='history-book-icon' />;
    }
  };

  const getStatusLabel = (historyItem: any) => {
    if (historyItem.return_date) {
      return { text: returnedText, className: 'status-returned' };
    } else if (historyItem.late) {
      return { text: lateText, className: 'status-late' };
    } else if (historyItem.is_active) {
      return { text: activeText, className: 'status-active' };
    } else if (historyItem.reserved) {
      return { text: reservedText, className: 'status-reserved' };
    }
    return { text: '', className: '' };
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setVisibleCount(10);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSetting(event.target.value);
  };

  if (!authUser || !authUser.book_history) {
    return (
      <section className='rental-history-container'>
        <header className='rental-history-header'>
          <h3 className='rental-history-header-text'>{rentalHistoryText}</h3>
          <div className='history-search-container'>
            <input
              type='text'
              className='history-search-input'
              placeholder='Search'
              value={searchQuery}
              onChange={handleSearchChange}
              disabled={true}
            />
            <div className='history-filter-setting'>
              <select
                value={filterSetting}
                onChange={handleFilterChange}
                className='history-filter-dropdown'
              >
                <option value='newest'>-</option>
              </select>
            </div>
          </div>
        </header>

        <div className='book-grid-view'>
          <div className='no-books-message'>
            <div className='book-image-list-container'>
              <div className='book-image-wrapper'>
                <BookStack className='book-list-cover-icon' />
              </div>
            </div>
            <div className='no-book-info'>
              <p className='no-book-info-text-header'>
                {noRentalHistoryHeader}
              </p>
              <p className='no-book-info-subtext'>{noRentalHistoryFound}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const filteredHistory = authUser.book_history.filter((historyItem) => {
    const title = historyItem.book.title.toLowerCase();
    const author = historyItem.book.author.toLowerCase();
    const rentalDate = formatDate(historyItem.rental_date).toLowerCase();
    const query = searchQuery.toLowerCase();
    return (
      title.includes(query) ||
      author.includes(query) ||
      rentalDate.includes(query)
    );
  });

  const sortedHistory = filteredHistory.sort((a, b) => {
    if (!a.return_date) return -1;
    if (!b.return_date) return 1;
    if (filterSetting === 'newest') {
      return (
        new Date(b.return_date).getTime() - new Date(a.return_date).getTime()
      );
    } else {
      return (
        new Date(a.return_date).getTime() - new Date(b.return_date).getTime()
      );
    }
  });

  const visibleHistory = sortedHistory.slice(0, visibleCount);

  if (authUser.book_history.length === 0) {
    return (
      <section className='rental-history-container'>
        <header className='rental-history-header'>
          <h3 className='rental-history-header-text'>
            {language === 'EN' ? 'Rental History' : 'Historique de location'}
          </h3>
          <div className='history-search-container'>
            <input
              type='text'
              className='history-search-input'
              placeholder='Search'
              value={searchQuery}
              onChange={handleSearchChange}
              disabled={true}
            />
            <div className='history-filter-setting'>
              <select
                value={filterSetting}
                onChange={handleFilterChange}
                className='history-filter-dropdown'
              >
                <option value='newest'>-</option>
              </select>
            </div>
          </div>
        </header>

        <div className='book-grid-view'>
          <div className='no-books-message'>
            <div className='book-image-list-container'>
              <div className='book-image-wrapper'>
                <BookStack className='book-list-cover-icon' />
              </div>
            </div>
            <div className='no-book-info'>
              <p className='no-book-info-text-header'>
                {noRentalHistoryHeader}
              </p>
              <p className='no-book-info-subtext'>{noRentalHistoryFound}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='rental-history-container'>
      <header className='rental-history-header'>
        <h3 className='rental-history-header-text'>{rentalHistoryText}</h3>
        <div className='history-search-container'>
          <input
            type='text'
            className='history-search-input'
            placeholder='Search'
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className='history-filter-setting'>
            <select
              value={filterSetting}
              onChange={handleFilterChange}
              className='history-filter-dropdown'
            >
              <option value='newest'>{newestText}</option>
              <option value='oldest'>{oldestText}</option>
            </select>
          </div>
        </div>
      </header>

      {filteredHistory.length === 0 && searchQuery ? (
        <div className='book-grid-view'>
          <div className='no-books-message'>
            <div className='book-image-list-container'>
              <div className='book-image-wrapper'>
                <BookStack className='book-list-cover-icon' />
              </div>
            </div>
            <div className='no-book-info'>
              <p className='no-book-info-text-header'>{noBooksFoundText}</p>
              <p className='no-book-info-subtext'>{noBooksFoundSubtext}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className='rental-history-list'>
          {visibleHistory.map((historyItem, index) => {
            const { text: statusText, className: statusClass } =
              getStatusLabel(historyItem);
            const bookUrl = `/books/${formatTitleForURL(
              historyItem.book.title
            )}`;
            const IconComponent = shuffledIcons[
              index % shuffledIcons.length
            ] as React.FC<IconProps>;
            if (!IconComponent) return null;

            return (
              <React.Fragment key={index}>
                <div className='rental-history-item'>
                  <div className='history-book-info'>
                    <Link to={bookUrl}>
                      <div className='history-book-image-container'>
                        {historyItem.book.images[0]?.image_url ? (
                          <div
                            className='history-book-image-wrapper'
                            style={{
                              backgroundImage: historyItem.book.images[0]
                                ?.image_small
                                ? `url(${historyItem.book.images[0].image_small})`
                                : 'none',
                            }}
                          >
                            <img
                              src={historyItem.book.images[0].image_url}
                              alt={historyItem.book.title}
                              className='history-book-image'
                              onLoad={(e) => {
                                const imgElement = e.target as HTMLImageElement;
                                imgElement.parentElement?.classList.add(
                                  'loaded'
                                );
                              }}
                            />
                          </div>
                        ) : (
                          getBookIcon(historyItem.book.language)
                        )}
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
                          <div className='history-book-language-container'>
                            <p className='history-book-language'>
                              {historyItem.book.language}
                            </p>
                            {historyItem.book.language === 'French' && (
                              <FrenchFlag className='history-language-flag' />
                            )}
                            {historyItem.book.language === 'English' && (
                              <UKFlag className='history-language-flag' />
                            )}
                          </div>
                          <div className='rating-container'>
                            {!historyItem.book.rating ? (
                              <StarGrey className='history-star-icon-grey' />
                            ) : (
                              <>
                                <p className='history-book-rating'>
                                  {historyItem.book.rating.toFixed(1)}
                                </p>
                                <StarColor className='history-star-icon' />
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className='history-book-dates-status-container'>
                        <div className='history-book-status'>
                          <div className={statusClass}>
                            <span>{statusText}</span>
                          </div>
                        </div>
                        <div className='history-book-dates'>
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
                              <p className='history-date-label'>
                                {returnedText}
                              </p>
                              <p className='history-date-value'>
                                {formatDate(historyItem.return_date)}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='history-icons-container'>
                    <IconComponent className='history-icon' />
                  </div>
                </div>
                {index < visibleHistory.length - 1 && (
                  <svg className='rental-history-line-divider'>
                    <line x1='0' y1='50%' x2='100%' y2='50%' />
                  </svg>
                )}
              </React.Fragment>
            );
          })}

          {sortedHistory.length > 0 && (
            <div className='history-item-count-container'>
              <p className='history-item-count-text'>{showingText}</p>
              <p className='history-item-count'>
                {visibleCount < sortedHistory.length
                  ? visibleCount
                  : sortedHistory.length}
                /{sortedHistory.length}
              </p>
            </div>
          )}
          {visibleCount < sortedHistory.length && (
            <div className='history-load-more-container'>
              <button className='load-more-button' onClick={loadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default RentalHistory;
