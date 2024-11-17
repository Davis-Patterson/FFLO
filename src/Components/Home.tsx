import { useContext, useState, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { Link } from 'react-router-dom';
import TitleFlair from 'Svgs/TitleFlair';
import libraryShelfImg from 'FFLO/library_shelf.webp';
import libraryShelfSmall from 'FFLO/library_shelf_small.webp';
import introImg from 'FFLO/book_pile.webp';
import introImgSmall from 'FFLO/book_pile_small.webp';
import 'Styles/Home.css';
import ChevronRight from 'Svgs/ChevronRight';

type IconProps = React.SVGProps<SVGSVGElement>;

const Home: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    language,
    categories,
    categoriesFetched,
    reviews,
    setCategoryFilter,
    visibleCategories,
    categoryIconOptions,
    categoryColorOptions,
    natureIcons,
  } = context;

  const [slideIndex, setSlideIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const cardWidth = 190;
  const maxSlideIndex = Math.max(0, categories.length - visibleCategories);

  const [shuffledIcons, setShuffledIcons] = useState<React.FC[]>([]);
  const [iconIndices, setIconIndices] = useState([0, 1, 2, 3]);

  const [reviewIndex, setReviewIndex] = useState(0);
  const [animateClass, setAnimateClass] = useState('');

  const calculateTranslateValue = (index: number) => {
    return index === maxSlideIndex
      ? (index - 1) * cardWidth + 150
      : index * cardWidth;
  };

  // translations
  const headerText = language === 'EN' ? 'Story Space' : "Espace d'histoire";
  const welcomeText = language === 'EN' ? 'Bienvenue à' : 'Bienvenue à';
  const ffloText =
    language === 'EN'
      ? 'French For Little Ones'
      : 'Français pour les tout-petits';
  const readText = language === 'EN' ? 'Read.' : 'Lire.';
  const learnText = language === 'EN' ? 'Learn.' : 'Apprendre.';
  const growText = language === 'EN' ? 'Grow.' : 'Grandir.';
  const libraryText = language === 'EN' ? 'Library' : 'Bibliothèque';
  const aboutPretext = language === 'EN' ? 'About us' : 'À propos';
  const aboutHeaderText = language === 'EN' ? 'Information' : 'Information';
  const reviewsPretext =
    language === 'EN' ? 'Reviews from the' : 'Commentaires du';
  const reviewsHeaderText = language === 'EN' ? 'Community' : 'Communauté';
  const categoriesText = language === 'EN' ? 'Categories' : 'Catégories';
  const categoryButtonText =
    language === 'EN' ? 'View Books' : 'Voir les Livres';
  const introText = language === 'EN' ? 'Our Approach' : 'Notre approche';
  const introParagraph =
    language === 'EN'
      ? 'At FFLO, we believe that the joy of reading is a gift meant to be shared. Our Story Space library is designed to make French literature accessible and enjoyable for young readers, fostering a love for the French language through engaging and age-appropriate books. Story Space provides families with an inviting environment to explore a wide variety of stories and reflects our commitment to making French literature readily available to nurture a lifelong love of reading.'
      : "Chez FFLO, nous croyons que la joie de la lecture est un cadeau à partager. Notre bibliothèque, Story Space, est conçue pour rendre la littérature française accessible et agréable aux jeunes lecteurs, en favorisant un amour de la langue française à travers des livres engageants et adaptés à leur âge. Story Space offre aux familles un environnement accueillant pour explorer une grande variété d'histoires et reflète notre engagement à rendre la littérature française facilement accessible pour nourrir un amour de la lecture qui durera toute la vie.";
  const viewMoreText = language === 'EN' ? 'View More' : 'Voir plus';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const shuffled = Object.values(natureIcons)
      .map((icon) => ({ icon, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ icon }) => icon);

    setShuffledIcons(shuffled);
  }, [natureIcons]);

  useEffect(() => {
    if (shuffledIcons.length >= 4) {
      const uniqueIndices = new Set<number>();
      while (uniqueIndices.size < 4) {
        uniqueIndices.add(Math.floor(Math.random() * shuffledIcons.length));
      }
      setIconIndices(Array.from(uniqueIndices));
    }
  }, [shuffledIcons]);

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

  const handleCategoryFilter = (categoryId: number) => {
    setCategoryFilter(categoryId);
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

  const renderIcon = (index: number) => {
    if (shuffledIcons.length === 0 || !shuffledIcons[index]) return null;
    const IconComponent = shuffledIcons[index] as React.FC<IconProps>;
    return IconComponent ? <IconComponent className='home-icon' /> : null;
  };

  const handleNextReview = () => {
    setAnimateClass('fade-out');
    setTimeout(() => {
      setReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setAnimateClass('fade-in');
    }, 400);
  };

  const handlePrevReview = () => {
    setAnimateClass('fade-out');
    setTimeout(() => {
      setReviewIndex(
        (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
      );
      setAnimateClass('fade-in');
    }, 400);
  };

  const sortedCategories = categories
    .slice()
    .sort((a, b) => a.sort_order - b.sort_order);

  console.log('visibleCategories: ', visibleCategories);

  return (
    <>
      <main className='page-container'>
        <section className='home-container'>
          <header className='home-header'>
            <div className='home-header-image-container'>
              <div
                className='home-header-image-wrapper blur-load'
                style={{
                  backgroundImage: `url(${libraryShelfSmall})`,
                }}
              >
                <img
                  src={libraryShelfImg}
                  alt='library shelf image'
                  className='home-header-image'
                  onLoad={(e) => {
                    const imgElement = e.target as HTMLImageElement;
                    imgElement.parentElement?.classList.add('loaded');
                  }}
                />
              </div>
              <div className='home-header-text-container'>
                <p className='home-header-pretext'>{welcomeText}</p>
                <div className='home-header-title-container'>
                  <div className='home-header-title-text-container'>
                    <p className='home-header-title-text'>{ffloText}</p>
                    <p className='home-header-title-subtext'>{headerText}</p>
                  </div>
                </div>
                <div className='home-header-subtext-container'>
                  <p className='home-header-subtext blue'>{readText}</p>
                  <p className='home-header-subtext light-blue'>{learnText}</p>
                  <p className='home-header-subtext orange'>{growText}</p>
                </div>
              </div>
            </div>
          </header>
          <svg className='home-line-divider'>
            <line x1='0' y1='50%' x2='100%' y2='50%' />
          </svg>

          {categories && categories.length > 0 && (
            <>
              <section className='home-categories-container'>
                <header className='home-content-header'>
                  <p className='home-header-pretext'>{libraryText}</p>
                  <div className='home-content-header-title'>
                    <TitleFlair className='home-title-flair-left' />
                    <h1 className='home-content-title-text'>
                      {categoriesText}
                    </h1>
                    <TitleFlair className='home-title-flair-right' />
                  </div>
                </header>

                <div
                  className='home-categories-navigation'
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
                    className='home-categories-map-container'
                    style={{
                      transform: `translateX(-${translateValue}px)`,
                    }}
                  >
                    {sortedCategories.map((category) => {
                      const IconComponent: React.ComponentType<IconProps> =
                        categoryIconOptions[category.icon];
                      const backgroundColor =
                        categoryColorOptions[category.color];
                      const className = 'home-category-card';
                      return (
                        <div
                          key={category.id}
                          className={className}
                          style={{ backgroundColor }}
                        >
                          {category.flair && (
                            <div className='home-category-card-flair-container'>
                              <p className='home-category-card-flair'>
                                {category.flair}
                              </p>
                            </div>
                          )}
                          <div className='home-category-card-header'>
                            {IconComponent && (
                              <IconComponent className='home-category-card-icon' />
                            )}
                            <p className='home-category-card-header-text'>
                              {category.name}
                            </p>
                          </div>
                          <div className='home-category-card-subtext-container'>
                            <p className='home-category-card-subtext'>
                              {category.description}
                            </p>
                          </div>
                          <Link
                            to='/library'
                            className='home-category-button-link'
                          >
                            <button
                              className='home-category-button'
                              style={{ backgroundColor }}
                              onClick={() => handleCategoryFilter(category.id)}
                            >
                              {categoryButtonText}
                            </button>
                          </Link>
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
              </section>

              <svg className='home-line-divider'>
                <line x1='0' y1='50%' x2='100%' y2='50%' />
              </svg>
            </>
          )}

          <section className='home-introduction-container'>
            <header className='home-content-header'>
              <p className='home-header-pretext'>{aboutPretext}</p>
              <div className='home-content-header-title'>
                <TitleFlair className='home-title-flair-left' />
                <h1 className='home-content-title-text'>{aboutHeaderText}</h1>
                <TitleFlair className='home-title-flair-right' />
              </div>
            </header>

            <div className='home-introduction-row-container'>
              <div className='home-introduction-image'>
                <div className='home-intro-image-container'>
                  <div
                    className='home-intro-image-wrapper blur-load'
                    style={{
                      backgroundImage: `url(${introImgSmall})`,
                    }}
                  >
                    <img
                      src={introImg}
                      alt='library shelf image'
                      className='home-intro-image'
                      onLoad={(e) => {
                        const imgElement = e.target as HTMLImageElement;
                        imgElement.parentElement?.classList.add('loaded');
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className='home-intro-content'>
                <div className='home-intro-icon right'>
                  {renderIcon(iconIndices[0])}
                </div>
                <div className='home-intro-text-container'>
                  <p className='home-intro-header-text'>{introText}</p>
                  <div className='home-intro-paragraph'>
                    <p className='home-intro-paragraph-text'>
                      {introParagraph}
                    </p>
                  </div>
                  <Link to='/about' className='home-submit-button-link'>
                    <button className='home-submit-button'>
                      {viewMoreText}
                    </button>
                  </Link>
                </div>
                <div className='home-intro-icon left'>
                  {renderIcon(iconIndices[1])}
                </div>
              </div>
            </div>
          </section>

          {reviews && reviews.length > 0 && (
            <>
              <svg className='home-line-divider'>
                <line x1='0' y1='50%' x2='100%' y2='50%' />
              </svg>

              <section className='home-reviews-container'>
                <header className='home-content-header'>
                  <p className='home-header-pretext'>{reviewsPretext}</p>
                  <div className='home-content-header-title'>
                    <TitleFlair className='home-title-flair-left' />
                    <h1 className='home-content-title-text'>
                      {reviewsHeaderText}
                    </h1>
                    <TitleFlair className='home-title-flair-right' />
                  </div>
                </header>

                <div className='home-reviews-navigation-container'>
                  <div className='home-reviews-prev-container'>
                    <ChevronRight
                      className='home-reviews-prev'
                      onClick={handlePrevReview}
                    />
                  </div>

                  <div className='home-reviews-content-wrapper'>
                    <div className='home-reviews-content-container'>
                      <div className='home-reviews-icon top'>
                        {renderIcon(iconIndices[2])}
                      </div>
                      {reviews.length > 0 && (
                        <div className={`home-reviews-review ${animateClass}`}>
                          <p className='home-reviews-review-text'>
                            {reviews[reviewIndex].message}
                          </p>
                          <div className='home-reviews-review-name-container'>
                            <p className='home-reviews-review-dash'>—</p>
                            <p className='home-reviews-review-name'>
                              {reviews[reviewIndex].name}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className='home-reviews-icon bottom'>
                        {renderIcon(iconIndices[3])}
                      </div>
                    </div>
                  </div>

                  <div className='home-reviews-next-container'>
                    <ChevronRight
                      className='home-reviews-next'
                      onClick={handleNextReview}
                    />
                  </div>
                </div>
              </section>
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
