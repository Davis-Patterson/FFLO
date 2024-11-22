import React, { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import GearIcon from 'Svgs/GearIcon';
import TapeIcon from 'Svgs/TapeIcon';
import Marker2 from 'Svgs/Marker2';
import Pencil2 from 'Svgs/Pencil2';
import Paperclip3 from 'Svgs/Paperclip3';
import EyeShown from 'Svgs/EyeShown';
import EyeHidden from 'Svgs/EyeHidden';
import XIcon from 'Svgs/XIcon';
import 'Styles/Utils/Sidebar.css';

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLanguage: string | null;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string | null>>;
  viewSetting: string;
  setViewSetting: React.Dispatch<React.SetStateAction<string>>;
  filterSetting: string;
  setFilterSetting: React.Dispatch<React.SetStateAction<string>>;
  setVisibleListBooks: React.Dispatch<React.SetStateAction<number>>;
  showBookmarks: boolean;
  setShowBookmarks: React.Dispatch<React.SetStateAction<boolean>>;
  showUnavailable: boolean;
  setShowUnavailable: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdatedVisibleBooks: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  showSidebar,
  setShowSidebar,
  selectedLanguage,
  setSelectedLanguage,
  viewSetting,
  setViewSetting,
  filterSetting,
  setFilterSetting,
  setVisibleListBooks,
  showBookmarks,
  setShowBookmarks,
  showUnavailable,
  setShowUnavailable,
  setUpdatedVisibleBooks,
}) => {
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
    categoryFilter,
    setCategoryFilter,
    setBookRows,
  } = context;

  const uniqueLanguages = Array.from(
    new Set(allBooks.map((book) => book.language))
  );

  // translations
  const gridViewTextView = language === 'EN' ? 'Grid View' : 'Vue Grille';
  const listViewTextView = language === 'EN' ? 'List View' : 'Vue en liste';
  const titleText = language === 'EN' ? 'Title' : 'Titre';
  const authorText = language === 'EN' ? 'Author' : 'Auteur';
  const sidebarHeaderText = language === 'EN' ? 'Categories' : 'Catégories';
  const closeSidebarText = language === 'EN' ? 'Close' : 'Fermer';
  const editCategoriesToggleText =
    language === 'EN' ? 'Categories' : 'Catégories';
  const allBooksText = language === 'EN' ? 'All Books' : 'Tous les livres';
  const bookmarksText = language === 'EN' ? 'Bookmarks' : 'Signets';
  const languageText = language === 'EN' ? 'Language' : 'Langue';
  const ratingText = language === 'EN' ? 'Rating' : 'Notation';
  const randomText = language === 'EN' ? 'Random' : 'Aléatoire';
  const allLanguagesText =
    language === 'EN' ? 'All Languages' : 'Toutes les langues';
  const sortByText = language === 'EN' ? 'Sort By' : 'Trier Par';
  const viewModeText =
    language === 'EN' ? 'View Settings' : 'Afficher les paramètres';
  const unavailableText = language === 'EN' ? 'Unavailable' : 'Indisponible';

  const handleCloseSidebar = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowSidebar(false);
    setTimeout(() => {
      setUpdatedVisibleBooks((prev) => prev + 1);
    }, 700);
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
      setBookRows(2);
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
      setBookRows(2);
    } else {
      setCategoryFilter(null);
      setShowBookmarks(true);
      setBookRows(2);
    }
  };

  const handleLanguageFilter = (language: string | null) => {
    setSelectedLanguage(language);
    setVisibleListBooks(10);
    setBookRows(2);
  };

  const handleViewSettingChange = (
    event: React.MouseEvent,
    viewSetting: string
  ) => {
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

  const handleToggleUnavailable = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowUnavailable(!showUnavailable);
  };

  return (
    <>
      <div
        className='sidebar-wrapper'
        style={{ width: showSidebar ? '160px' : '0px' }}
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
                {categories
                  .slice()
                  .sort((a, b) => a.sort_order - b.sort_order)
                  .map((category) => {
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
                <Marker2
                  className='sidebar-marker2'
                  style={{ marginTop: '5px', marginBottom: '5px' }}
                />
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
                  <p
                    className={`${
                      filterSetting === 'random'
                        ? 'sidebar-content-item-selected'
                        : 'sidebar-content-item-deselected'
                    }`}
                    onMouseDown={() => setFilterSetting('random')}
                  >
                    {randomText}
                  </p>
                </div>
              </div>
              <div className='sidebar-icon-container'>
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
                  <p
                    className={`${
                      viewSetting === 'grid'
                        ? 'sidebar-content-item-selected'
                        : 'sidebar-content-item-deselected'
                    }`}
                    onMouseDown={(e) => handleViewSettingChange(e, 'grid')}
                  >
                    {gridViewTextView}
                  </p>
                  <p
                    className={`${
                      viewSetting === 'list'
                        ? 'sidebar-content-item-selected'
                        : 'sidebar-content-item-deselected'
                    }`}
                    onMouseDown={(e) => handleViewSettingChange(e, 'list')}
                  >
                    {listViewTextView}
                  </p>
                </div>
              </div>
              <div className='sidebar-icon-container'>
                <Pencil2 className='sidebar-pencil' />
              </div>
            </div>
          </div>
          <div
            className='close-sidebar-container'
            onMouseDown={(e) => handleCloseSidebar(e)}
            style={{
              transform: showSidebar ? 'translateX(0%)' : 'translateX(-100%)',
            }}
          >
            <p className='close-sidebar-text'>{closeSidebarText}</p>
            <XIcon className='sidebar-close-icon' />
          </div>
        </div>
        <svg
          className={`sidebar-line-divider ${showSidebar ? 'shown' : 'hidden'}`}
        >
          <line x1='0.5' y1='0' x2='0.5' y2='100%' strokeWidth='1' />
        </svg>
      </div>
    </>
  );
};

export default Sidebar;
