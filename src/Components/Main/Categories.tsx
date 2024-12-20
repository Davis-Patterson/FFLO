import { useContext, useState, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import GearIcon from 'Svgs/GearIcon';
import BookList from 'Components/Main/BookList';
import 'Styles/Main/Categories.css';
import UpIcon from 'Svgs/UpIcon';

type IconProps = React.SVGProps<SVGSVGElement>;

const Categories: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    authUser,
    setShowCategoryEditWindow,
    language,
    categories,
    categoriesFetched,
    categoryFilter,
    setCategoryFilter,
    allBooks,
    booksFetched,
    fetchError,
    mobileWidth,
    visibleCategories,
    setBookRows,
    categoryIconOptions,
    categoryColorOptions,
  } = context;

  const [slideIndex, setSlideIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

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
    if (categoriesFetched && categories.length > 0) {
      if (slideIndex > maxSlideIndex) {
        setSlideIndex(maxSlideIndex);
        setTranslateValue(calculateTranslateValue(maxSlideIndex));
      } else {
        setTranslateValue(calculateTranslateValue(slideIndex));
      }
    }
  }, [categoriesFetched, categories.length, slideIndex, maxSlideIndex]);

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
      setBookRows(2);
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

  const determineClassName = (categoryId: number) => {
    const baseClassName = 'category-card';

    if (categoryFilter && categoryFilter !== categoryId && !hovered) {
      return baseClassName + ' ' + 'category-inactive';
    } else if (categoryFilter && hovered && hovered === categoryId) {
      return baseClassName + ' ' + 'category-hovered';
    } else if (categoryFilter && hovered && hovered !== categoryId) {
      return baseClassName + ' ' + 'category-unhovered';
    } else if (categoryFilter && categoryFilter === categoryId && !hovered) {
      return baseClassName;
    } else {
      return baseClassName;
    }
  };

  return (
    <>
      <main className='page-container'>
        <section className='categories-container'>
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

          <div className='categories-content-container'>
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

            {!mobileWidth && (
              <>
                <div
                  className='categories-navigation'
                  style={{
                    maxWidth:
                      visibleCategories === 2
                        ? '420px'
                        : visibleCategories === 3
                        ? '610px'
                        : visibleCategories === 4
                        ? '800px'
                        : visibleCategories === 5
                        ? '990px'
                        : visibleCategories === 6
                        ? '1180px'
                        : 'none',
                  }}
                >
                  {slideIndex > 0 && (
                    <div className='prev-slide' onClick={handlePrevSlide}>
                      &lt;
                    </div>
                  )}
                  <div
                    className='categories-map-container'
                    style={{
                      transform: `translateX(-${translateValue}px)`,
                      gap:
                        categories.length < visibleCategories ? '20px' : '0px',
                    }}
                  >
                    {sortedCategories.map((category) => {
                      const IconComponent: React.ComponentType<IconProps> =
                        categoryIconOptions[category.icon];
                      const backgroundColor =
                        categoryColorOptions[category.color];
                      const isSelected = categoryFilter === category.id;
                      return (
                        <div
                          key={category.id}
                          className={determineClassName(category.id)}
                          style={{ backgroundColor }}
                          onMouseEnter={() => setHovered(category.id)}
                          onMouseLeave={() => setHovered(null)}
                          onMouseDown={(e) =>
                            handleCategoryFilter(e, category.id)
                          }
                        >
                          {category.flair && (
                            <div className='category-card-flair-container'>
                              <p className='category-card-flair'>
                                {category.flair}
                              </p>
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
                            onMouseDown={(e) =>
                              handleCategoryFilter(e, category.id)
                            }
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
              </>
            )}

            {mobileWidth && (
              <>
                <div
                  className='categories-navigation'
                  style={{
                    maxWidth: '100%',
                  }}
                >
                  <div className='mobile-prev-slide' onClick={handlePrevSlide}>
                    <UpIcon
                      className={`up-icon ${
                        slideIndex === 0 ? 'inactive' : ''
                      }`}
                    />
                  </div>
                  <div className='categories-mobile-container'>
                    <div
                      className='categories-mobile-map-container'
                      style={{
                        transform: `translateY(-${translateValue}px)`,
                      }}
                    >
                      {sortedCategories.map((category) => {
                        const IconComponent: React.ComponentType<IconProps> =
                          categoryIconOptions[category.icon];
                        const backgroundColor =
                          categoryColorOptions[category.color];
                        return (
                          <div
                            key={category.id}
                            className={determineClassName(category.id)}
                            style={{ backgroundColor }}
                            onMouseEnter={() => setHovered(category.id)}
                            onMouseLeave={() => setHovered(null)}
                            onMouseDown={(e) =>
                              handleCategoryFilter(e, category.id)
                            }
                          >
                            {category.flair && (
                              <div className='category-card-flair-container'>
                                <p className='category-card-flair'>
                                  {category.flair}
                                </p>
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
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className='mobile-next-slide' onClick={handleNextSlide}>
                    <UpIcon
                      className={`up-icon down ${
                        slideIndex === maxSlideIndex ? 'inactive' : ''
                      }`}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        <div className='categories-books-container'>
          {fetchError ? (
            <p>Error fetching books. Please try again later.</p>
          ) : booksFetched && allBooks.length === 0 ? (
            <p>No books available.</p>
          ) : (
            <BookList />
          )}
        </div>
      </main>
    </>
  );
};

export default Categories;
