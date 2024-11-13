import { useContext, useState, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import ServerApi from 'Utilities/ServerApi';
import TitleFlair from 'Svgs/TitleFlair';
import GearIcon from 'Svgs/GearIcon';
import BookList from 'Components/BookList';
import 'Styles/Books.css';

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
  const [slideIndex, setSlideIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const visibleCategories = 4;
  const cardWidth = 190;
  const maxSlideIndex = Math.max(0, categories.length - visibleCategories);

  const calculateTranslateValue = (index: number) => {
    return index === maxSlideIndex
      ? (index - 1) * cardWidth + 150
      : index * cardWidth;
  };

  // translations
  const headerPretext = language === 'EN' ? 'Library' : 'Bibliothèque';
  const headerText = language === 'EN' ? 'Story Space' : "Espace d'histoire";
  const editCategoriesToggleText =
    language === 'EN' ? 'Edit Categories' : 'Modifier les catégories';
  const categoryButtonText =
    language === 'EN' ? 'View Books' : 'Voir les Livres';
  const allBooksText = language === 'EN' ? 'All Books' : 'Tous les Livres';

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

  useEffect(() => {
    if (fetchedCategories && categories.length > 0) {
      if (slideIndex > maxSlideIndex) {
        setSlideIndex(maxSlideIndex);
        setTranslateValue(calculateTranslateValue(maxSlideIndex));
      } else {
        setTranslateValue(calculateTranslateValue(slideIndex));
      }
    }
  }, [fetchedCategories, categories.length, slideIndex, maxSlideIndex]);

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

  const handleNextSlide = () => {
    if (slideIndex < maxSlideIndex) {
      const newTranslateValue =
        slideIndex === maxSlideIndex - 1
          ? translateValue + 150
          : translateValue + 190;
      setTranslateValue(newTranslateValue);
      setSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (slideIndex > 0) {
      const newTranslateValue =
        slideIndex === 1 ? translateValue - 150 : translateValue - 190;
      setTranslateValue(newTranslateValue);
      setSlideIndex((prev) => prev - 1);
    }
  };

  const sortedCategories = categories
    .slice()
    .sort((a, b) => a.sort_order - b.sort_order);

  return (
    <>
      <main className='page-container'>
        <header className='categories-header'>
          <h2 className='categories-header-pretext'>{headerPretext}</h2>
          <div className='categories-header-title'>
            <TitleFlair className='categories-title-flair-left' />
            <h1 className='categories-header-title-text'>{headerText}</h1>
            <TitleFlair className='categories-title-flair-right' />
          </div>
        </header>

        <svg className='categories-line-divider'>
          <line x1='0' y1='50%' x2='100%' y2='50%' />
        </svg>

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
          <div className='categories-navigation'>
            {slideIndex > 0 && (
              <div className='prev-slide' onClick={handlePrevSlide}>
                &lt;
              </div>
            )}
            <div
              className='categories-map-container'
              style={{
                transform: `translateX(-${translateValue}px)`,
              }}
            >
              {sortedCategories.map((category) => {
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
                    {category.flair && (
                      <div className='category-card-flair-container'>
                        <p className='category-card-flair'>{category.flair}</p>
                      </div>
                    )}
                    <div className='category-card-header'>
                      {IconComponent && (
                        <IconComponent className='category-card-icon' />
                      )}
                      <p className='category-card-header-text'>
                        {category.name}
                      </p>
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
            {slideIndex < maxSlideIndex && (
              <div className='next-slide' onClick={handleNextSlide}>
                &gt;
              </div>
            )}
          </div>
        </div>
        <div className='categories-books-container'>
          {fetchError ? (
            <p>Error fetching books. Please try again later.</p>
          ) : isFetched && allBooks.length === 0 ? (
            <p>No books available.</p>
          ) : (
            <BookList />
          )}
        </div>
      </main>
    </>
  );
};

export default Books;
