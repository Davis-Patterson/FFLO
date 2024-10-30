import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from 'Contexts/AppContext';
import { Book } from 'Contexts/AppContext';
import ServerApi from 'Utilities/ServerApi';
import BookCoverIcon from 'Svgs/BookCoverIcon';
import GridIcon from 'Svgs/GridIcon';
import ListIcon from 'Svgs/ListIcon';
import SidebarOpen from 'Svgs/SidebarOpen';
import SidebarClose from 'Svgs/SidebarClose';
import GearIcon from 'Svgs/GearIcon';
import 'Styles/BookList.css';

interface BookListProps {
  bookList: Book[];
}

const BookList: React.FC<BookListProps> = ({ bookList }) => {
  const { getCategories } = ServerApi();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authUser,
    setShowCategoryEditWindow,
    language,
    categories,
    setCategories,
    categoryFilter,
    setCategoryFilter,
    formatTitleForURL,
  } = context;

  const [showSidebar, setShowSidebar] = useState(false);
  const [fetchedCategories, setFetchedCategories] = useState(false);

  const [viewSetting, setViewSetting] = useState<string>('grid');
  const [filterSetting, setFilterSetting] = useState<string>('title-asc');
  const [visibleBooks, setVisibleBooks] = useState(10);

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
  const sortByText = language === 'EN' ? 'Sort By' : 'Trier Par';
  const viewModeText = language === 'EN' ? 'View Mode' : "Mode d'Affichage";

  const handleViewMore = () => {
    setVisibleBooks((prev) => prev + 10);
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

  const filteredBookList = categoryFilter
    ? bookList.filter((book) => book.categories.includes(categoryFilter))
    : bookList;

  const sortedBookList = [...filteredBookList].sort((a, b) => {
    if (filterSetting === 'title-asc') {
      return a.title.localeCompare(b.title);
    } else if (filterSetting === 'title-desc') {
      return b.title.localeCompare(a.title);
    } else if (filterSetting === 'auth-asc') {
      return a.author.localeCompare(b.author);
    } else if (filterSetting === 'auth-desc') {
      return b.author.localeCompare(a.author);
    }
    return 0;
  });

  const displayedBooks = sortedBookList.slice(0, visibleBooks);

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

    setCategoryFilter(null);
  };

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
          </select>
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
                      categoryFilter === null
                        ? 'sidebar-content-item-selected'
                        : 'sidebar-content-item-deselected'
                    }`}
                    onMouseDown={(e) => handleShowAllBooks(e)}
                  >
                    {allBooksText}
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
                  </div>
                </div>
                <div className='sidebar-view-setting'>
                  <p className='sidebar-content-header-text-view-mode'>
                    {viewModeText}
                  </p>
                  <div className='sidebar-view-options'>
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
              </div>
            </div>
          </div>
        </div>
        {viewSetting === 'grid' && (
          <div className='book-grid-view'>
            {displayedBooks.map((book: Book) => {
              const hasImage = !!book.images[0]?.image_url;
              const bookUrl = `/books/${formatTitleForURL(book.title)}`;
              return (
                <Link key={book.id} to={bookUrl} className='book-card'>
                  <div className='book-image-container'>
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
                            imgElement.parentElement?.classList.add('loaded');
                          }}
                        />
                      ) : (
                        <BookCoverIcon className='book-list-cover-icon' />
                      )}
                    </div>
                  </div>
                  <div className='book-info'>
                    <h3 className='book-title'>{book.title}</h3>
                    <p className='book-author'>{book.author}</p>
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
              return (
                <Link key={book.id} to={bookUrl} className='book-card-list'>
                  <div className='book-image-list-container'>
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
                            imgElement.parentElement?.classList.add('loaded');
                          }}
                        />
                      ) : (
                        <BookCoverIcon className='book-cover-icon' />
                      )}
                    </div>
                  </div>
                  <div className='book-list-info'>
                    <div className='book-list-title-author'>
                      <h3 className='book-list-title'>{book.title}</h3>
                      <p className='book-list-author'>{book.author}</p>
                    </div>
                    <div className='book-list-desc'>
                      <p className='book-list-desc-text'>{book.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      {visibleBooks < sortedBookList.length && (
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
