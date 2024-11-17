import { useContext, useState, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { useParams, useNavigate } from 'react-router-dom';
import ServerApi from 'Utilities/ServerApi';
import ReservationApi from 'Utilities/ReservationApi';
import Slideshow from 'Utils/Slideshow';
import BookList from 'Components/BookList';
import BookNotFound from 'Tools/BookNotFound';
import BookRating from 'Utils/BookRating';
import TitleFlair from 'Svgs/TitleFlair';
import FrenchBookIcon from 'Svgs/FrenchBookIcon';
import EnglishBookIcon from 'Svgs/EnglishBookIcon';
import DefaultBookIcon from 'Svgs/DefaultBookIcon';
import BookmarkIcon from 'Svgs/BookmarkIcon';
import BookmarkedIcon from 'Svgs/BookmarkedIcon';
import UKFlag from 'Svgs/UKFlag';
import FrenchFlag from 'Svgs/FrenchFlag';
import StarColor from 'Svgs/StarColor';
import StarGrey from 'Svgs/StarGrey';
import BookOpenIcon from 'Svgs/BookOpenIcon';
import BookFallback from 'Tools/BookFallback';
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/Book.css';

type IconProps = React.SVGProps<SVGSVGElement>;

const Book: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const { createBookmark, deleteBookmark } = ServerApi();
  const { reserveBook, cancelReservation, holdBook, removeHold } =
    ReservationApi();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authToken,
    authUser,
    setAuthUser,
    setShowAuth,
    setShowBookEditWindow,
    setShowPolicyWindow,
    allBooks,
    updateSingleBook,
    categories,
    bookmarkedBooks,
    setBookmarkedBooks,
    setSelectedBook,
    setCategoryFilter,
    formatTitleForURL,
    language,
    fullscreenOpen,
    categoryIconOptions,
    categoryColorOptions,
  } = context;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hoveredCategoryId, setHoveredCategoryId] = useState<number | null>(
    null
  );
  const [isLoadingBooks, setIsLoadingBooks] = useState(true);
  const [currentBookId, setCurrentBookId] = useState<number | null>(null);

  const navigate = useNavigate();

  const book = allBooks.find((book) => formatTitleForURL(book.title) === title);
  const isBookmarked =
    bookmarkedBooks &&
    Array.isArray(bookmarkedBooks) &&
    bookmarkedBooks.some((b) => b.id === book?.id);

  // Translations
  const headerText =
    language === 'EN' ? 'Book Information' : 'Informations sur le Livre';
  const headerPretext = language === 'EN' ? 'Library' : 'Bibliothèque';
  const moreBooksText = language === 'EN' ? 'More Books' : 'Plus de Livres';
  const reserveBookText =
    language === 'EN' ? 'Reserve Book' : 'Réserver un livre';
  const cancelReservationText =
    language === 'EN' ? 'Cancel Reservation' : 'Annuler la réservation';
  const anotherReservationActiveText =
    language === 'EN'
      ? 'Another reservation active'
      : 'Une autre réservation active';
  const returnBookFirstText =
    language === 'EN'
      ? 'Return book before reserving another'
      : "Retournez avant d'en réserver un autre";
  const holdBookText = language === 'EN' ? 'Hold book' : 'Tenir le livre';
  const removeHoldText = language === 'EN' ? 'Remove Hold' : 'Livre de retour';
  const anotherBookOnHoldText =
    language === 'EN' ? 'Another Hold Active' : 'Une autre attente';
  const bookUnavailableText =
    language === 'EN' ? 'Book Unavailable' : 'Livre indisponible';
  const editBookText = language === 'EN' ? 'Edit book' : 'Modifier le livre';
  const bookPolicyButtonText =
    language === 'EN' ? 'Book Policies' : 'Politiques du livre';
  const bookDescriptionHeader =
    language === 'EN' ? 'Book Description:' : 'Description du livre :';
  const availableText = language === 'EN' ? 'Available' : 'Disponible';
  const unavailableText = language === 'EN' ? 'Unavailable' : 'Indisponible';
  const bookLanguageHeader = language === 'EN' ? 'Language:' : 'Langue :';
  const bookRatingHeader = language === 'EN' ? 'Rating:' : 'Notation :';
  const noRatingText = language === 'EN' ? 'No rating' : 'Aucune note';
  const categoriesText = language === 'EN' ? 'Categories:' : 'Catégories :';

  const getBookIcon = () => {
    if (!book) {
      return null;
    }
    if (
      book.language.toLowerCase() === 'french' ||
      book.language.toLowerCase() === 'français'
    ) {
      return (
        <FrenchBookIcon
          className={`book-detail-cover-icon ${
            !book.available ? 'inactive' : ''
          }`}
        />
      );
    } else if (book.language.toLowerCase() === 'english') {
      return (
        <EnglishBookIcon
          className={`book-detail-cover-icon ${
            !book.available ? 'inactive' : ''
          }`}
        />
      );
    } else {
      return (
        <DefaultBookIcon
          className={`book-detail-cover-icon ${
            !book.available ? 'inactive' : ''
          }`}
        />
      );
    }
  };

  const getLanguageIcon = (language: string) => {
    const normalizedLanguage = language.toLowerCase();
    if (normalizedLanguage === 'french' || normalizedLanguage === 'français') {
      return <FrenchFlag className='book-details-language-flag' />;
    } else if (normalizedLanguage === 'english') {
      return <UKFlag className='book-details-language-flag' />;
    }
    return null;
  };

  useEffect(() => {
    if (book?.id !== currentBookId) {
      window.scrollTo(0, 0);
      setCurrentBookId(book?.id || null);
    }
  }, [book, currentBookId]);

  useEffect(() => {
    if (allBooks.length > 0) {
      setIsLoadingBooks(false);
    }
  }, [allBooks]);

  useEffect(() => {
    if (!isLoadingBooks && !book) {
      navigate('/library/not_found');
    }
  }, [isLoadingBooks, book, navigate]);

  const handleHoldBook = async (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setIsLoading(true);
    try {
      const result = await holdBook(book?.id!);
      if (result.success && result.data) {
        console.log('Book held successfully');

        setAuthUser(result.data.user);
        updateSingleBook(result.data.book);
      } else {
        console.error(result.error || 'Failed to hold book');
      }
    } catch (error) {
      console.error('Error holding book:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveHold = async (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setIsLoading(true);
    try {
      const result = await removeHold(book?.id!);
      if (result.success && result.data) {
        console.log('Hold removed successfully');

        setAuthUser(result.data.user);
        updateSingleBook(result.data.book);
      } else {
        console.error(result.error || 'Failed to remove hold');
      }
    } catch (error) {
      console.error('Error removing hold:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReserveBook = async (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setIsLoading(true);
    try {
      const result = await reserveBook(book?.id!);
      if (result.success && result.data) {
        console.log('Book reserved successfully');

        setAuthUser(result.data.user);
        updateSingleBook(result.data.book);
      } else {
        console.error(result.error || 'Failed to reserve book');
      }
    } catch (error) {
      console.error('Error reserving book:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelReservation = async (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setIsLoading(true);
    try {
      const result = await cancelReservation(book?.id!);
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

  const handleShowAuth = async (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setIsLoading(true);
    setTimeout(() => {
      console.log('Show auth');
      setShowAuth(true);
      setIsLoading(false);
    }, 200);
  };

  const handleShowMembership = async (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setIsLoading(true);
    setTimeout(() => {
      console.log('Show membership');
      navigate('/membership');
      setIsLoading(false);
    }, 200);
  };

  const handleShowBookEditWindow = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    if (book) {
      setSelectedBook(book);
    } else {
      setSelectedBook(null);
    }

    setShowBookEditWindow(true);
  };

  const handleShowPolicyWindow = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowPolicyWindow(true);
  };

  const handleShowFullscreen = (
    event: React.MouseEvent,
    imageSrc: string,
    imageAlt: string,
    title: string,
    author: string,
    desc: string
  ) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    fullscreenOpen(imageSrc, imageAlt, title, author, desc);
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

  const handleCategoryClick = (event: React.MouseEvent, categoryId: number) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setCategoryFilter(categoryId);
    navigate('/library');
  };

  if (isLoadingBooks) {
    return (
      <>
        <BookFallback />
      </>
    );
  }

  if (!book) {
    return (
      <>
        <BookNotFound />
      </>
    );
  }

  const hasImage = !!book.images[0]?.image_url;
  const isBookReserved =
    authUser?.checked_out?.length && authUser.checked_out[0].reserved;
  const isBookOnHold = authUser?.on_hold?.length && authUser.on_hold[0].book;

  const bookCategories = categories
    .filter((category) => book.categories.includes(category.id))
    .sort((a, b) => a.sort_order - b.sort_order);

  const renderSubmitButton = () => {
    if (book?.available === 0) {
      if (!authToken || !authUser) {
        return (
          <button className='inactive-button' disabled>
            {bookUnavailableText}
          </button>
        );
      }

      if (
        !authUser.is_staff &&
        (!authUser.membership || !authUser.membership.active)
      ) {
        return (
          <button className='inactive-button' disabled>
            {bookUnavailableText}
          </button>
        );
      }

      if (
        !authUser.is_staff &&
        authUser.membership &&
        authUser.checked_out.length === 0
      ) {
        return (
          <button className='inactive-button' disabled>
            {bookUnavailableText}
          </button>
        );
      }

      if (!authUser.is_staff && authUser.checked_out.length > 0) {
        const checkedOutBook = authUser.checked_out[0];

        if (checkedOutBook.book.id !== book?.id) {
          return (
            <button className='inactive-button' disabled>
              {anotherReservationActiveText}
            </button>
          );
        }

        if (checkedOutBook.book.id === book?.id) {
          if (!checkedOutBook.is_active && checkedOutBook.reserved) {
            return (
              <button
                className='submit-button'
                onMouseDown={(e) => handleCancelReservation(e)}
              >
                {isLoading ? (
                  <LinearProgress color='inherit' />
                ) : (
                  cancelReservationText
                )}
              </button>
            );
          } else if (checkedOutBook.is_active) {
            return (
              <button className='inactive-button' disabled>
                {returnBookFirstText}
              </button>
            );
          }
        }
      }

      if (
        authUser.is_staff &&
        (!authUser.on_hold || authUser.on_hold.length === 0)
      ) {
        return (
          <button className='inactive-button' disabled>
            {bookUnavailableText}
          </button>
        );
      }

      if (authUser.is_staff && authUser.on_hold.length > 0) {
        const onHoldBook = authUser.on_hold[0];
        if (onHoldBook.book.id === book?.id) {
          return (
            <div className='staff-book-buttons'>
              <button
                className='edit-button'
                onMouseDown={(e) => handleShowBookEditWindow(e)}
              >
                {editBookText}
              </button>
              <button
                className='submit-half-button'
                onMouseDown={(e) => handleRemoveHold(e)}
              >
                {isLoading ? (
                  <LinearProgress color='inherit' />
                ) : (
                  removeHoldText
                )}
              </button>
            </div>
          );
        } else {
          return (
            <div className='staff-book-buttons'>
              <button
                className='edit-button'
                onMouseDown={(e) => handleShowBookEditWindow(e)}
              >
                {editBookText}
              </button>
              <button className='inactive-half-button' disabled>
                {anotherBookOnHoldText}
              </button>
            </div>
          );
        }
      }
      return (
        <button className='inactive-button' disabled>
          {bookUnavailableText}
        </button>
      );
    }

    if (!authToken || !authUser) {
      return (
        <button
          className='submit-button'
          onMouseDown={(e) => handleShowAuth(e)}
        >
          {isLoading ? <LinearProgress color='inherit' /> : reserveBookText}
        </button>
      );
    }

    if (authUser.is_staff) {
      const staffButtons = (
        <button
          className='edit-button'
          onMouseDown={(e) => handleShowBookEditWindow(e)}
        >
          {editBookText}
        </button>
      );

      if (authUser.on_hold && authUser.on_hold.length > 0) {
        const onHoldBook = authUser.on_hold[0];
        if (onHoldBook.book.id === book?.id) {
          return (
            <div className='staff-book-buttons'>
              {staffButtons}
              <button
                className='submit-half-button'
                onMouseDown={(e) => handleRemoveHold(e)}
              >
                {isLoading ? (
                  <LinearProgress color='inherit' />
                ) : (
                  removeHoldText
                )}
              </button>
            </div>
          );
        } else {
          return (
            <div className='staff-book-buttons'>
              {staffButtons}
              <button className='inactive-half-button' disabled>
                {anotherBookOnHoldText}
              </button>
            </div>
          );
        }
      } else {
        return (
          <div className='staff-book-buttons'>
            {staffButtons}
            <button
              className='submit-half-button'
              onMouseDown={(e) => handleHoldBook(e)}
            >
              {isLoading ? <LinearProgress color='inherit' /> : holdBookText}
            </button>
          </div>
        );
      }
    }

    if (
      !authUser.is_staff &&
      (!authUser.membership || !authUser.membership.active)
    ) {
      return (
        <button
          className='submit-button'
          onMouseDown={(e) => handleShowMembership(e)}
        >
          {isLoading ? <LinearProgress color='inherit' /> : reserveBookText}
        </button>
      );
    }

    if (!authUser.is_staff && authUser.checked_out.length > 0) {
      const checkedOutBook = authUser.checked_out[0];

      if (checkedOutBook.book.id !== book?.id) {
        return (
          <button className='inactive-button' disabled>
            {anotherReservationActiveText}
          </button>
        );
      }

      if (checkedOutBook.book.id === book.id) {
        if (!checkedOutBook.is_active && checkedOutBook.reserved) {
          return (
            <button
              className='submit-button'
              onMouseDown={(e) => handleCancelReservation(e)}
            >
              {isLoading ? (
                <LinearProgress color='inherit' />
              ) : (
                cancelReservationText
              )}
            </button>
          );
        } else if (checkedOutBook.is_active) {
          return (
            <button className='inactive-button' disabled>
              {returnBookFirstText}
            </button>
          );
        }
      }
    }

    if (
      !authUser.is_staff &&
      authUser.membership &&
      authUser.membership.monthly_books === 4 &&
      !authUser.checked_out.some((book) => book.reserved && !book.is_active)
    ) {
      return (
        <button className='inactive-button' disabled>
          Monthly book limit reached
        </button>
      );
    }

    return (
      <button
        className='submit-button'
        onMouseDown={(e) => handleReserveBook(e)}
      >
        {isLoading ? <LinearProgress color='inherit' /> : reserveBookText}
      </button>
    );
  };

  return (
    <>
      <main className='page-container'>
        <section className='book-container'>
          <header className='book-header'>
            <h2 className='book-header-pretext'>{headerPretext}</h2>
            <div className='book-header-title'>
              <TitleFlair className='title-flair-left' />
              <h1 className='book-title-text'>{headerText}</h1>
              <TitleFlair className='title-flair-right' />
            </div>
          </header>
          <svg className='book-line-divider'>
            <line x1='0' y1='50%' x2='100%' y2='50%' />
          </svg>
          <section className='book-details'>
            <div className='book-details-header'>
              <div className='book-detail-image-container'>
                {book.flair && (
                  <div className='book-detail-flair-container'>
                    <p className='book-detail-flair'>{book.flair}</p>
                  </div>
                )}
                {book.images.length === 0 ? (
                  getBookIcon()
                ) : book.images.length === 1 ? (
                  <div
                    className={`book-detail-image-wrapper ${
                      !book.available ? 'inactive' : hasImage ? 'blur-load' : ''
                    }`}
                    style={{
                      backgroundImage: `url(${book.images[0].image_small})`,
                    }}
                  >
                    <img
                      key={`${book.id}-${
                        isBookReserved ? 'reserved' : 'available'
                      }-${isBookOnHold ? 'on hold' : 'available'}`}
                      src={book.images[0].image_url || ''}
                      alt={book.title}
                      className={`book-detail-image ${
                        !book.available ? 'inactive' : ''
                      }`}
                      onLoad={(e) => {
                        const imgElement = e.target as HTMLImageElement;
                        imgElement.parentElement?.classList.add('loaded');
                      }}
                      onClick={(e) =>
                        handleShowFullscreen(
                          e,
                          book.images[0].image_url || '',
                          book.title,
                          book.title,
                          book.author,
                          book.description
                        )
                      }
                    />
                  </div>
                ) : (
                  <Slideshow data={book} />
                )}
              </div>
              <div className='book-detail-info-container'>
                <div className='book-detail-info-header'>
                  <h2 className='book-detail-title-text'>{book.title}</h2>
                  <p className='book-detail-author-text'>{book.author}</p>
                  {book.available ? (
                    <p className='book-detail-available'>{availableText}</p>
                  ) : (
                    <p className='book-detail-unavailable'>{unavailableText}</p>
                  )}
                </div>
                <div className='book-detail-checkout-container'>
                  <BookRating bookId={book.id} ratings={book.ratings || []} />
                  {renderSubmitButton()}
                </div>
              </div>
              <div className='book-bookmark-toggle-container'>
                {isBookmarked ? (
                  <BookmarkedIcon
                    className='bookmark-icon'
                    onClick={(e) => handleRemoveBookmark(e, book.id)}
                  />
                ) : (
                  <BookmarkIcon
                    className='bookmark-icon'
                    onClick={(e) => handleAddBookmark(e, book.id)}
                  />
                )}
              </div>
            </div>
            <div className='book-details-info-container'>
              {book.description && (
                <div className='book-details-column-container'>
                  <p className='book-details-label-text'>
                    {bookDescriptionHeader}
                  </p>
                  <p className='book-details-description'>{book.description}</p>
                </div>
              )}
              <div className='book-details-column-container'>
                <p className='book-details-label-text'>{bookLanguageHeader}</p>
                <div className='book-details-multi-item'>
                  <p className='book-details-text'>{book.language}</p>
                  {getLanguageIcon(book.language)}
                </div>
              </div>
              <div className='book-details-column-container'>
                <p className='book-details-label-text'>{bookRatingHeader}</p>
                <div className='book-details-multi-item'>
                  {!book.rating && (
                    <>
                      <p className='book-details-no-rating-text'>
                        {noRatingText}
                      </p>
                      <StarGrey className='book-details-star-icon' />
                    </>
                  )}
                  {book.rating && (
                    <>
                      <p className='book-details-number-text'>
                        {book.rating.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </p>
                      <StarColor className='book-details-star-icon' />
                    </>
                  )}
                </div>
              </div>
              <div className='book-details-column-container'>
                <p className='book-details-label-text'>{availableText}:</p>
                <div className='book-details-multi-item'>
                  <p className='book-details-number-text'>{book.available}</p>
                  <BookOpenIcon className='book-details-book-open-icon' />
                </div>
              </div>
              {bookCategories.length > 0 && (
                <div className='book-details-column-container'>
                  <p className='book-details-label-text'>{categoriesText}</p>
                  <div className='book-details-category-list'>
                    {bookCategories.map((category) => {
                      const IconComponent = categoryIconOptions[
                        category.icon
                      ] as React.FC<IconProps>;
                      const categoryColor =
                        categoryColorOptions[category.color];
                      return (
                        <div
                          className='book-details-multi-item'
                          key={category.id}
                        >
                          <div
                            className='book-details-category-wrapper'
                            onMouseEnter={() =>
                              setHoveredCategoryId(category.id)
                            }
                            onMouseLeave={() => setHoveredCategoryId(null)}
                            onMouseDown={(e) =>
                              handleCategoryClick(e, category.id)
                            }
                            style={{
                              border:
                                hoveredCategoryId === category.id
                                  ? `1px solid ${categoryColor}`
                                  : `1px solid var(--clr-transparent)`,
                              backgroundColor:
                                hoveredCategoryId === category.id
                                  ? categoryColor
                                  : undefined,
                            }}
                          >
                            <IconComponent className='book-details-category-icon' />
                            <p
                              className='book-details-category-text'
                              style={{
                                color:
                                  hoveredCategoryId === category.id
                                    ? 'var(--clr-light)'
                                    : categoryColor,
                              }}
                            >
                              {category.name}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className='book-details-policy-button'>
              <button
                className='policy-button'
                onMouseDown={(e) => handleShowPolicyWindow(e)}
              >
                {bookPolicyButtonText}
              </button>
            </div>
          </section>
          <section className='more-books-container'>
            <div className='more-books-header-title'>
              <TitleFlair className='more-books-title-flair-left' />
              <h1 className='more-books-title-text'>{moreBooksText}</h1>
              <TitleFlair className='more-books-title-flair-right' />
            </div>
            <BookList />
          </section>
        </section>
      </main>
    </>
  );
};

export default Book;
