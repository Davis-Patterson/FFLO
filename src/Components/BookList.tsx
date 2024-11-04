import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from 'Contexts/AppContext';
import { Book } from 'Contexts/AppContext';
import ServerApi from 'Utilities/ServerApi';
import FrenchBookIcon from 'Svgs/FrenchBookIcon';
import EnglishBookIcon from 'Svgs/EnglishBookIcon';
import DefaultBookIcon from 'Svgs/DefaultBookIcon';
import GridIcon from 'Svgs/GridIcon';
import ListIcon from 'Svgs/ListIcon';
import SidebarOpen from 'Svgs/SidebarOpen';
import SidebarClose from 'Svgs/SidebarClose';
import GearIcon from 'Svgs/GearIcon';
import BookmarkSolid from 'Svgs/BookmarkSolid';
import BookmarkOutline from 'Svgs/BookmarkOutline';
import RulerIcon from 'Svgs/RulerIcon';
import ScissorsIcon from 'Svgs/ScissorsIcon';
import GlueIcon from 'Svgs/GlueIcon';
import TapeIcon from 'Svgs/TapeIcon';
import Marker2 from 'Svgs/Marker2';
import Pencil2 from 'Svgs/Pencil2';
import BookClipart from 'Svgs/BookClipart';
import Paperclip3 from 'Svgs/Paperclip3';
import Marker4 from 'Svgs/Marker4';
import FrenchFlag from 'Svgs/FrenchFlag';
import UKFlag from 'Svgs/UKFlag';
import 'Styles/BookList.css';
import StarColor from 'Svgs/StarColor';
import StarGrey from 'Svgs/StarGrey';
import EyeShown from 'Svgs/EyeShown';
import EyeHidden from 'Svgs/EyeHidden';

const BookList: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const { getCategories, createBookmark, deleteBookmark } = ServerApi();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authUser,
    setShowCategoryEditWindow,
    language,
    allBooks,
    categories,
    setCategories,
    categoryFilter,
    setCategoryFilter,
    bookmarkedBooks,
    setBookmarkedBooks,
    formatTitleForURL,
  } = context;

  const [showSidebar, setShowSidebar] = useState(false);
  const [fetchedCategories, setFetchedCategories] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [viewSetting, setViewSetting] = useState<string>('grid');
  const [filterSetting, setFilterSetting] = useState<string>('title-asc');
  const [visibleBooks, setVisibleBooks] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [showUnavailable, setShowUnavailable] = useState(false);

  const uniqueLanguages = Array.from(
    new Set(allBooks.map((book) => book.language))
  );

  // translations
  const gridViewText = language === 'EN' ? 'Grid' : 'Grille';
  const gridViewTextView = language === 'EN' ? 'Grid View' : 'Vue Grille';
  const listViewText = language === 'EN' ? 'List' : 'Liste';
  const listViewTextView = language === 'EN' ? 'List View' : 'Vue en liste';
  const titleText = language === 'EN' ? 'Title' : 'Titre';
  const authorText = language === 'EN' ? 'Author' : 'Auteur';
  const sidebarHeaderText = language === 'EN' ? 'Categories' : 'Catégories';
  const editCategoriesToggleText =
    language === 'EN' ? 'Categories' : 'Catégories';
  const allBooksText = language === 'EN' ? 'All Books' : 'Tous les livres';
  const bookmarksText = language === 'EN' ? 'Bookmarks' : 'Signets';
  const languageText = language === 'EN' ? 'Language' : 'Langue';
  const ratingText = language === 'EN' ? 'Rating' : 'Notation';
  const allLanguagesText =
    language === 'EN' ? 'All Languages' : 'Toutes les langues';
  const sortByText = language === 'EN' ? 'Sort By' : 'Trier Par';
  const viewModeText =
    language === 'EN' ? 'View Settings' : 'Afficher les paramètres';
  const unavailableText = language === 'EN' ? 'Unavailable' : 'Indisponible';
  const noBooksFoundText =
    language === 'EN'
      ? 'No books match your search.'
      : 'Aucun livre ne correspond à votre recherche.';
  const noBooksFoundSubtext =
    language === 'EN'
      ? 'Your search did not match the title or author of any book. Please try again.'
      : "Votre recherche ne correspond au titre ou à l'auteur d'aucun livre. Veuillez réessayer.";

  const getBookIcon = (book: Book) => {
    if (book?.language === 'French') {
      return <FrenchBookIcon className='book-detail-cover-icon' />;
    } else if (book?.language === 'English') {
      return <EnglishBookIcon className='book-detail-cover-icon' />;
    } else {
      return <DefaultBookIcon className='book-detail-cover-icon' />;
    }
  };

  const handleToggleViewSetting = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    if (viewSetting === 'grid') {
      setViewSetting('list');
    }
    if (viewSetting === 'list') {
      setViewSetting('grid');
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setVisibleBooks(10);
  };

  const handleViewMore = () => {
    setVisibleBooks((prev) => prev + 10);
  };

  const handleShowSidebar = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    if (!fetchedCategories) {
      getCategories().then((result) => {
        if (result.success) {
          setCategories(result.data);
          setFetchedCategories(true);
        } else {
          console.error('Failed to fetch categories');
          setFetchedCategories(true);
        }
      });
    }

    setShowSidebar(!showSidebar);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSetting(event.target.value);
  };

  const handleCategoryFilter = (
    event: React.MouseEvent,
    categoryId: number
  ) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowBookmarks(false);
    if (categoryId === categoryFilter) {
      setCategoryFilter(null);
    } else {
      setCategoryFilter(categoryId);
    }
  };

  const handleShowEditCategories = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowCategoryEditWindow(true);
  };

  const handleShowAllBooks = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowBookmarks(false);
    setCategoryFilter(null);
  };

  const handleShowBookmarks = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    if (showBookmarks) {
      setCategoryFilter(null);
      setShowBookmarks(false);
    } else {
      setCategoryFilter(null);
      setShowBookmarks(true);
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

  const handleLanguageFilter = (language: string | null) => {
    setSelectedLanguage(language);
    setVisibleBooks(10);
  };

  const handleToggleUnavailable = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowUnavailable(!showUnavailable);
  };

  const baseBooks = showBookmarks ? bookmarkedBooks : allBooks;
  const availableBooks = showUnavailable
    ? baseBooks
    : baseBooks.filter((book) => book.available > 0);

  const filteredBookList = availableBooks
    .filter((book) => {
      const matchesCategory = categoryFilter
        ? book.categories.includes(categoryFilter)
        : true;
      const matchesLanguage = selectedLanguage
        ? book.language === selectedLanguage
        : true;
      const matchesSearch = searchQuery
        ? book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      const isCurrentBook = showBookmarks
        ? null
        : title && formatTitleForURL(book.title) === title;
      return (
        matchesCategory && matchesLanguage && matchesSearch && !isCurrentBook
      );
    })
    .sort((a, b) => {
      if (filterSetting === 'title-asc') return a.title.localeCompare(b.title);
      if (filterSetting === 'title-desc') return b.title.localeCompare(a.title);
      if (filterSetting === 'auth-asc') return a.author.localeCompare(b.author);
      if (filterSetting === 'auth-desc')
        return b.author.localeCompare(a.author);
      if (filterSetting === 'rating') return (b.rating || 0) - (a.rating || 0);
      return 0;
    });

  const displayedBooks = filteredBookList.slice(0, visibleBooks);

  return (
    <section className='book-list-container'>
      <div className='page-toggles-container'>
        <div className='sidebar-toggle-container'>
          {showSidebar ? (
            <SidebarClose
              className='close-sidebar-icon'
              onMouseDown={(e) => handleShowSidebar(e)}
            />
          ) : (
            <SidebarOpen
              className='open-sidebar-icon'
              onMouseDown={(e) => handleShowSidebar(e)}
            />
          )}
        </div>
        <svg className='line-divider'>
          <line x1='0' y1='50%' x2='100%' y2='50%' />
        </svg>
        <div className='search-container'>
          <input
            type='text'
            className='search-input'
            placeholder='Search'
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className='filter-setting'>
            <select
              value={filterSetting}
              onChange={handleFilterChange}
              className='filter-dropdown'
            >
              <option value='title-asc'>{titleText} (A-Z)</option>
              <option value='title-desc'>{titleText} (Z-A)</option>
              <option value='auth-asc'>{authorText} (A-Z)</option>
              <option value='auth-desc'>{authorText} (Z-A)</option>
              <option value='rating'>{ratingText}</option>
            </select>
          </div>
        </div>
        <div className='view-setting-toggle'>
          {viewSetting === 'grid' && (
            <div className='toggle-container'>
              <p className='toggle-text'>{listViewText}</p>
              <ListIcon
                className='toggle-icon'
                onMouseDown={(e) => handleToggleViewSetting(e)}
              />
            </div>
          )}
          {viewSetting === 'list' && (
            <div className='toggle-container'>
              <p className='toggle-text'>{gridViewText}</p>
              <GridIcon
                className='toggle-icon'
                onMouseDown={(e) => handleToggleViewSetting(e)}
              />
            </div>
          )}
        </div>
      </div>
      <div className='books-main-container'>
        <div
          className='sidebar-wrapper'
          style={{ width: showSidebar ? '200px' : '0px' }}
        >
          <div
            className='books-sidebar-container'
            style={{
              transform: showSidebar ? 'translateX(0%)' : 'translateX(-100%)',
            }}
          >
            <div className='sidebar-content'>
              <p className='sidebar-content-header-text'>{sidebarHeaderText}</p>
              <div className='sidebar-content-categories'>
                <div className='sidebar-categories-container'>
                  <p
                    className={`${
                      categoryFilter === null && !showBookmarks
                        ? 'sidebar-content-item-selected'
                        : 'sidebar-content-item-deselected'
                    }`}
                    onMouseDown={(e) => handleShowAllBooks(e)}
                  >
                    {allBooksText}
                  </p>
                  <p
                    className={`${
                      !showBookmarks && categoryFilter === null
                        ? 'sidebar-content-item'
                        : showBookmarks
                        ? 'sidebar-content-item-selected'
                        : 'sidebar-content-item-deselected'
                    }`}
                    onMouseDown={(e) => handleShowBookmarks(e)}
                  >
                    {bookmarksText}
                  </p>
                  {categories.map((category) => {
                    const isSelected = categoryFilter === category.id;
                    const className = `${
                      categoryFilter === null
                        ? 'sidebar-content-item'
                        : isSelected
                        ? 'sidebar-content-item-selected'
                        : 'sidebar-content-item-deselected'
                    }`;
                    return (
                      <div
                        key={category.id}
                        className='sidebar-content-item-container'
                      >
                        <p
                          className={className}
                          onMouseDown={(e) =>
                            handleCategoryFilter(e, category.id)
                          }
                        >
                          {category.name}
                        </p>
                        {category.flair && (
                          <p className='sidebar-category-flair'>
                            {category.flair}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
                {authUser?.is_staff && (
                  <div className='edit-categories-sidebar-toggle-container'>
                    <p
                      className='edit-categories-sidebar-toggle-text'
                      onMouseDown={(e) => handleShowEditCategories(e)}
                    >
                      {editCategoriesToggleText}
                    </p>
                    <GearIcon
                      className='gear-icon-sidebar'
                      onMouseDown={(e) => handleShowEditCategories(e)}
                    />
                  </div>
                )}
                <div className='sidebar-icon-container'>
                  <Marker2 className='sidebar-marker2' />
                  <GlueIcon className='sidebar-glue' />
                </div>
                <div className='sidebar-language-container'>
                  <p className='sidebar-content-header-text'>{languageText}</p>
                  <div className='sidebar-language-options'>
                    <p
                      className={`sidebar-content-item ${
                        !selectedLanguage
                          ? 'sidebar-content-item-selected'
                          : 'sidebar-content-item-deselected'
                      }`}
                      onMouseDown={() => handleLanguageFilter(null)}
                    >
                      {allLanguagesText}
                    </p>
                    {uniqueLanguages.map((lang) => (
                      <p
                        key={lang}
                        className={`sidebar-content-item ${
                          selectedLanguage === lang
                            ? 'sidebar-content-item-selected'
                            : 'sidebar-content-item-deselected'
                        }`}
                        onMouseDown={() => handleLanguageFilter(lang)}
                      >
                        {lang}
                      </p>
                    ))}
                  </div>
                  <div className='sidebar-icon-container'>
                    <Paperclip3 className='sidebar-paperclip' />
                    <Marker4 className='sidebar-marker4' />
                  </div>
                </div>
                <div className='sidebar-sorting-container'>
                  <p className='sidebar-content-header-text'>{sortByText}</p>
                  <div className='sidebar-sorting-options'>
                    <p
                      className={`${
                        filterSetting === 'title-asc'
                          ? 'sidebar-content-item-selected'
                          : 'sidebar-content-item-deselected'
                      }`}
                      onMouseDown={() => setFilterSetting('title-asc')}
                    >
                      {titleText} (A-Z)
                    </p>
                    <p
                      className={`${
                        filterSetting === 'title-desc'
                          ? 'sidebar-content-item-selected'
                          : 'sidebar-content-item-deselected'
                      }`}
                      onMouseDown={() => setFilterSetting('title-desc')}
                    >
                      {titleText} (Z-A)
                    </p>
                    <p
                      className={`${
                        filterSetting === 'auth-asc'
                          ? 'sidebar-content-item-selected'
                          : 'sidebar-content-item-deselected'
                      }`}
                      onMouseDown={() => setFilterSetting('auth-asc')}
                    >
                      {authorText} (A-Z)
                    </p>
                    <p
                      className={`${
                        filterSetting === 'auth-desc'
                          ? 'sidebar-content-item-selected'
                          : 'sidebar-content-item-deselected'
                      }`}
                      onMouseDown={() => setFilterSetting('auth-desc')}
                    >
                      {authorText} (Z-A)
                    </p>
                    <p
                      className={`${
                        filterSetting === 'rating'
                          ? 'sidebar-content-item-selected'
                          : 'sidebar-content-item-deselected'
                      }`}
                      onMouseDown={() => setFilterSetting('rating')}
                    >
                      {ratingText}
                    </p>
                  </div>
                </div>
                <div className='sidebar-icon-container'>
                  <ScissorsIcon className='sidebar-scissors' />
                  <TapeIcon className='sidebar-tape' />
                </div>
                <div className='sidebar-view-setting'>
                  <p className='sidebar-content-header-text-view-mode'>
                    {viewModeText}
                  </p>
                  <div className='sidebar-view-options'>
                    <div className='sidebar-unavailable-toggle-container'>
                      <p
                        className={`${
                          showUnavailable
                            ? 'sidebar-content-unavailable-selected'
                            : 'sidebar-content-unavailable-deselected'
                        }`}
                        onMouseDown={(e) => handleToggleUnavailable(e)}
                      >
                        {unavailableText}
                      </p>
                      <div className='hidden-icon-container'>
                        {showUnavailable ? (
                          <EyeShown
                            className='shown-icon'
                            onMouseDown={(e) => handleToggleUnavailable(e)}
                          />
                        ) : (
                          <EyeHidden
                            className='hidden-icon'
                            onMouseDown={(e) => handleToggleUnavailable(e)}
                          />
                        )}
                      </div>
                    </div>
                    <p
                      className={`${
                        viewSetting === 'grid'
                          ? 'sidebar-content-item-selected'
                          : 'sidebar-content-item-deselected'
                      }`}
                      onMouseDown={() => setViewSetting('grid')}
                    >
                      {gridViewTextView}
                    </p>
                    <p
                      className={`${
                        viewSetting === 'list'
                          ? 'sidebar-content-item-selected'
                          : 'sidebar-content-item-deselected'
                      }`}
                      onMouseDown={() => setViewSetting('list')}
                    >
                      {listViewTextView}
                    </p>
                  </div>
                </div>
                <div className='sidebar-icon-container'>
                  <Pencil2 className='sidebar-pencil' />
                  <RulerIcon className='sidebar-ruler' />
                </div>
              </div>
            </div>
          </div>
        </div>
        {filteredBookList.length === 0 ? (
          <div className='book-grid-view'>
            <div className='no-books-message'>
              <div className='book-image-list-container'>
                <div className='book-image-wrapper'>
                  <BookClipart className='book-list-cover-icon' />
                </div>
              </div>
              <div className='no-book-info'>
                <p className='no-book-info-text-header'>{noBooksFoundText}</p>
                <p className='no-book-info-subtext'>{noBooksFoundSubtext}</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {viewSetting === 'grid' && (
              <div className='book-grid-view'>
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
                      className={`${
                        book.available < 1
                          ? 'book-card-unavailable'
                          : 'book-card'
                      }`}
                    >
                      <div className='book-image-container'>
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
                          className={`book-image-wrapper ${
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
                              className='book-image'
                              onLoad={(e) => {
                                const imgElement = e.target as HTMLImageElement;
                                imgElement.parentElement?.classList.add(
                                  'loaded'
                                );
                              }}
                            />
                          ) : (
                            getBookIcon(book)
                          )}
                        </div>
                      </div>
                      <div className='book-info'>
                        <h3
                          className={`${
                            book.available < 1
                              ? 'book-title-unavailable'
                              : 'book-title'
                          }`}
                        >
                          {book.title}
                        </h3>
                        <p className='book-author'>{book.author}</p>
                        <div className='book-language-rating-container'>
                          <p className='book-language'>{book.language}</p>
                          {book.language === 'French' && (
                            <FrenchFlag className='book-language-flag' />
                          )}
                          {book.language === 'English' && (
                            <UKFlag className='book-language-flag' />
                          )}
                          <p className='pipe-icon'>|</p>
                          <div className='rating-container'>
                            {!book.rating && (
                              <StarGrey className='book-grid-star-icon' />
                            )}
                            {book.rating && (
                              <>
                                <StarColor className='book-grid-star-icon' />
                                <p className='book-grid-rating'>
                                  {book.rating}
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
            {viewSetting === 'list' && (
              <div className='book-list-view'>
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
                      className={`${
                        book.available < 1
                          ? 'book-card-list-unavailable'
                          : 'book-card-list'
                      }`}
                    >
                      <div className='book-image-list-container'>
                        <div className='book-list-bookmark-toggle-container'>
                          {isBookmarked ? (
                            <BookmarkSolid
                              className='book-list-bookmark-icon-bookmarked'
                              onClick={(e) => handleRemoveBookmark(e, book.id)}
                            />
                          ) : (
                            <BookmarkSolid
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
                          className={`book-image-wrapper ${
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
                              className='book-image'
                              onLoad={(e) => {
                                const imgElement = e.target as HTMLImageElement;
                                imgElement.parentElement?.classList.add(
                                  'loaded'
                                );
                              }}
                            />
                          ) : (
                            getBookIcon(book)
                          )}
                        </div>
                      </div>
                      <div className='book-list-info'>
                        <div className='book-list-title-author'>
                          <h3
                            className={`${
                              book.available < 1
                                ? 'book-list-title-unavailable'
                                : 'book-list-title'
                            }`}
                          >
                            {book.title}
                          </h3>
                          <p className='book-list-author'>{book.author}</p>
                          <div className='book-list-language-rating-container'>
                            <p className='book-list-language'>
                              {book.language}
                            </p>
                            {book.language === 'French' && (
                              <FrenchFlag className='book-list-language-flag' />
                            )}
                            {book.language === 'English' && (
                              <UKFlag className='book-list-language-flag' />
                            )}
                            <p className='pipe-icon'>|</p>
                            <div className='rating-container'>
                              {!book.rating && (
                                <StarGrey className='book-list-star-icon' />
                              )}
                              {book.rating && (
                                <>
                                  <StarColor className='book-list-star-icon' />
                                  <p className='book-list-rating'>
                                    {book.rating}
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className='book-list-desc'>
                          <p className='book-list-desc-text'>
                            {book.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
      {visibleBooks < filteredBookList.length && (
        <div className='view-more-button-container'>
          <button onClick={handleViewMore} className='view-more-button'>
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default BookList;
