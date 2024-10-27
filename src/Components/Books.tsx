import { useContext, useState, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import ServerApi from 'Utilities/ServerApi';
import TitleFlair from 'Svgs/TitleFlair';
import BookList from 'Components/BookList';
import 'Styles/Books.css';
import GearIcon from 'Svgs/GearIcon';

type IconProps = React.SVGProps<SVGSVGElement>;

const Books: React.FC = () => {
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
    allBooks,
    fetchError,
    isFetched,
    categoryIconOptions,
    categoryColorOptions,
  } = context;

  const [fetchedCategories, setFetchedCategories] = useState(false);

  // translations
  const headerText = language === 'EN' ? 'Categories' : 'Catégories';
  const editCategoriesToggleText =
    language === 'EN' ? 'Edit Categories' : 'Modifier les catégories';
  const categoryButtonText =
    language === 'EN' ? 'View Books' : 'Voir les Livres';
  const allBooksText = language === 'EN' ? 'All Books' : 'Tous les Livres';

  const availableBooks = allBooks.filter((book) => book.available > 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
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
  }, [categories, getCategories, context]);
  console.log('categories:', categories);

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

  return (
    <>
      <main className='page-container'>
        <header className='categories-header'>
          <div className='categories-header-title'>
            <TitleFlair className='title-flair-left' />
            <p className='categories-title-text'>{headerText}</p>
            <TitleFlair className='title-flair-right' />
          </div>
        </header>
        <div className='categories-container'>
          {authUser?.is_staff && (
            <div className='edit-categories-toggle-container'>
              <p
                className='edit-categories-toggle-text'
                onMouseDown={(e) => handleShowEditCategories(e)}
              >
                {editCategoriesToggleText}
              </p>
              <GearIcon
                className='gear-icon'
                onMouseDown={(e) => handleShowEditCategories(e)}
              />
            </div>
          )}
          <div className='categories-map-container'>
            {categories.map((category) => {
              const IconComponent: React.ComponentType<IconProps> =
                categoryIconOptions[category.icon];
              const backgroundColor = categoryColorOptions[category.color];
              const isSelected = categoryFilter === category.id;
              const className = `${
                categoryFilter === null
                  ? 'category-card'
                  : isSelected
                  ? 'category-card'
                  : 'category-card category-inactive'
              }`;
              return (
                <div
                  key={category.id}
                  className={className}
                  style={{ backgroundColor }}
                >
                  <div className='category-card-header'>
                    {IconComponent && (
                      <IconComponent className='category-card-icon' />
                    )}
                    <p className='category-card-header-text'>{category.name}</p>
                  </div>
                  <div className='category-card-subtext-container'>
                    <p className='category-card-subtext'>
                      {category.description}
                    </p>
                  </div>
                  <button
                    className='category-button'
                    onMouseDown={(e) => handleCategoryFilter(e, category.id)}
                    style={{ backgroundColor }}
                  >
                    {isSelected ? allBooksText : categoryButtonText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className='categories-books-container'>
          {fetchError ? (
            <p>Error fetching books. Please try again later.</p>
          ) : isFetched && allBooks.length === 0 ? (
            <p>No books available.</p>
          ) : (
            <BookList bookList={availableBooks} />
          )}
        </div>
      </main>
    </>
  );
};

export default Books;
