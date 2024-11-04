import { useContext, useState, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { useParams, useNavigate } from 'react-router-dom';
import ServerApi from 'Utilities/ServerApi';
import TitleFlair from 'Svgs/TitleFlair';
import BookList from 'Components/BookList';
import FrenchBookIcon from 'Svgs/FrenchBookIcon';
import EnglishBookIcon from 'Svgs/EnglishBookIcon';
import DefaultBookIcon from 'Svgs/DefaultBookIcon';
import BookmarkOutline from 'Svgs/BookmarkOutline';
import BookmarkSolid from 'Svgs/BookmarkSolid';
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/Book.css';
import UKFlag from 'Svgs/UKFlag';
import FrenchFlag from 'Svgs/FrenchFlag';
import StarColor from 'Svgs/StarColor';
import StarGrey from 'Svgs/StarGrey';
import BookOpenIcon from 'Svgs/BookOpenIcon';

('https://www.npmjs.com/package/react-simple-image-slider');

type IconProps = React.SVGProps<SVGSVGElement>;

const Book: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const { createBookmark, deleteBookmark } = ServerApi();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authToken,
    authUser,
    setShowAuth,
    setShowBookEditWindow,
    setShowPolicyWindow,
    allBooks,
    categories,
    bookmarkedBooks,
    setBookmarkedBooks,
    setSelectedBook,
    setCategoryFilter,
    formatTitleForURL,
    language,
    fullscreenOpen,
    categoryIconOptions,
  } = context;
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const book = allBooks.find((book) => formatTitleForURL(book.title) === title);
  const isBookmarked =
    bookmarkedBooks &&
    Array.isArray(bookmarkedBooks) &&
    bookmarkedBooks.some((b) => b.id === book?.id);

  // Translations
  const noBookText = language === 'EN' ? 'No Book Found' : 'Aucun Livre Trouvé';
  const headerText =
    language === 'EN' ? 'Book Information' : 'Informations sur le Livre';
  const moreBooksText = language === 'EN' ? 'More Books' : 'Plus de Livres';
  const reserveBookText =
    language === 'EN' ? 'Reserve book' : 'Réserver un livre';
  const holdBookText = language === 'EN' ? 'Hold book' : 'Tenir le livre';
  const editBookText = language === 'EN' ? 'Edit book' : 'Modifier le livre';
  const bookPolicyButtonText =
    language === 'EN' ? 'Book Policies' : 'Politiques du livre';
  const bookDescriptionHeader =
    language === 'EN' ? 'Book Description:' : 'Description du livre :';
  const availableCopiesText = language === 'EN' ? 'Available:' : 'Disponible:';
  const bookLanguageHeader = language === 'EN' ? 'Language:' : 'Langue :';
  const bookRatingHeader = language === 'EN' ? 'Rating:' : 'Notation :';
  const noRatingText = language === 'EN' ? 'No rating' : 'Aucune note';
  const categoriesText = language === 'EN' ? 'Categories:' : 'Catégories :';

  const getBookIcon = () => {
    if (book?.language === 'French') {
      return <FrenchBookIcon className='book-detail-cover-icon' />;
    } else if (book?.language === 'English') {
      return <EnglishBookIcon className='book-detail-cover-icon' />;
    } else {
      return <DefaultBookIcon className='book-detail-cover-icon' />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [book]);

  const handleButtonClick = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setIsLoading(true);
    if (!authToken) {
      setShowAuth(true);
      console.log('handle login');
      setIsLoading(false);
    } else if (authUser && authUser.membership && !authUser.membership.active) {
      setTimeout(() => {
        console.log('handle membership');
        setIsLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        console.log('Book reserved');
        setIsLoading(false);
      }, 1000);
    }
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
    navigate('/books');
  };

  if (!book) {
    return (
      <main className='page-container'>
        <header className='book-header'>
          <div className='book-header-title'>
            <TitleFlair className='title-flair-left' />
            <p className='book-title-text'>{noBookText}</p>
            <TitleFlair className='title-flair-right' />
          </div>
        </header>
        <section className='no-book-content'>
          <p className='book-description'>description</p>
        </section>
      </main>
    );
  }

  const hasImage = !!book.images[0]?.image_url;

  const bookCategories = categories
    .filter((category) => book.categories.includes(category.id))
    .sort((a, b) => a.sort_order - b.sort_order);

  return (
    <main className='page-container'>
      <header className='book-header'>
        <div className='book-header-title'>
          <TitleFlair className='title-flair-left' />
          <p className='book-title-text'>{headerText}</p>
          <TitleFlair className='title-flair-right' />
        </div>
      </header>
      <section className='book-details'>
        <div className='book-details-header'>
          <div className='book-detail-image-container'>
            {book.flair && (
              <div className='book-detail-flair-container'>
                <p className='book-detail-flair'>{book.flair}</p>
              </div>
            )}
            {book.images.length > 0 && book.images[0].image_url ? (
              <div
                className={`book-detail-image-wrapper ${
                  hasImage ? 'blur-load' : ''
                }`}
                style={{
                  backgroundImage: `url(${book.images[0]?.image_small})`,
                }}
              >
                <img
                  src={book.images[0].image_url}
                  alt={book.title}
                  className='book-detail-image'
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
              getBookIcon()
            )}
          </div>
          <div className='book-detail-info-container'>
            <div className='book-detail-info-header'>
              <h2 className='book-detail-title-text'>{book.title}</h2>
              <p className='book-detail-author-text'>{book.author}</p>
            </div>
            <div className='book-detail-checkout-container'>
              <div className='book-detail-rating-'></div>
              {!authUser?.is_staff && (
                <button
                  className='submit-button'
                  onMouseDown={(e) => handleButtonClick(e)}
                >
                  {isLoading ? (
                    <LinearProgress color='inherit' />
                  ) : (
                    reserveBookText
                  )}
                </button>
              )}
              {authUser?.is_staff && (
                <div className='staff-book-buttons'>
                  <button
                    className='submit-half-button'
                    onMouseDown={(e) => handleButtonClick(e)}
                  >
                    {isLoading ? (
                      <LinearProgress color='inherit' />
                    ) : (
                      holdBookText
                    )}
                  </button>
                  <button
                    className='edit-button'
                    onMouseDown={(e) => handleShowBookEditWindow(e)}
                  >
                    {editBookText}
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className='book-bookmark-toggle-container'>
            {isBookmarked ? (
              <BookmarkSolid
                className='bookmark-icon'
                onClick={(e) => handleRemoveBookmark(e, book.id)}
              />
            ) : (
              <BookmarkOutline
                className='bookmark-icon'
                onClick={(e) => handleAddBookmark(e, book.id)}
              />
            )}
          </div>
        </div>
        <div className='book-details-info-container'>
          {book.description && (
            <div className='book-details-item-container'>
              <p className='book-details-label-text'>{bookDescriptionHeader}</p>
              <p className='book-details-text'>{book.description}</p>
            </div>
          )}
          <div className='book-details-item-container'>
            <p className='book-details-label-text'>{bookLanguageHeader}</p>
            <div className='book-details-multi-item'>
              {book.language === 'English' && (
                <UKFlag className='book-details-language-flag' />
              )}
              {book.language === 'French' && (
                <FrenchFlag className='book-details-language-flag' />
              )}
              <p className='book-details-text'>{book.language}</p>
            </div>
          </div>
          <div className='book-details-item-container'>
            <p className='book-details-label-text'>{bookRatingHeader}</p>
            <div className='book-details-multi-item'>
              {!book.rating && (
                <>
                  <StarGrey className='book-details-star-icon' />
                  <p className='book-details-no-rating-text'>{noRatingText}</p>
                </>
              )}
              {book.rating && (
                <>
                  <StarColor className='book-details-star-icon' />
                  <p className='book-details-number-text'>{book.rating}</p>
                </>
              )}
            </div>
          </div>
          {bookCategories.length > 0 && (
            <div className='book-details-item-container'>
              <p className='book-details-label-text'>{categoriesText}</p>
              <div className='book-details-category-list'>
                {bookCategories.map((category) => {
                  const IconComponent = categoryIconOptions[
                    category.icon
                  ] as React.FC<IconProps>;
                  return (
                    <div className='book-details-multi-item' key={category.id}>
                      <IconComponent
                        className='book-details-category-icon'
                        onMouseDown={(e) => handleCategoryClick(e, category.id)}
                      />
                      <p
                        className='book-details-category-text'
                        onMouseDown={(e) => handleCategoryClick(e, category.id)}
                      >
                        {category.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className='book-details-item-container'>
            <p className='book-details-label-text'>{availableCopiesText}</p>
            <div className='book-details-multi-item'>
              <BookOpenIcon className='book-details-book-open-icon' />
              <p className='book-details-number-text'>{book.available}</p>
            </div>
          </div>
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
          <p className='more-books-title-text'>{moreBooksText}</p>
          <TitleFlair className='more-books-title-flair-right' />
        </div>
        <BookList />
      </section>
    </main>
  );
};

export default Book;
