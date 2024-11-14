import { useContext, useState, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import Letter from 'Components/Letter';
import TitleFlair from 'Svgs/TitleFlair';
import aboutImg from 'FFLO/book_pile.webp';
import aboutImgSmall from 'FFLO/book_pile_small.webp';
import introImg from 'FFLO/books.webp';
import introImgSmall from 'FFLO/books_small.webp';
import membershipImg from 'FFLO/book_spread.webp';
import membershipImgSmall from 'FFLO/book_spread_small.webp';
import 'Styles/About.css';

type IconProps = React.SVGProps<SVGSVGElement>;

const About: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { language, natureIcons } = context;

  const [shuffledIcons, setShuffledIcons] = useState<React.FC[]>([]);
  const [iconIndices, setIconIndices] = useState([0, 1, 2, 3]);

  // translations
  const headerPretext = language === 'EN' ? 'Information' : 'Information';
  const headerText = language === 'EN' ? 'About Us' : 'À propos de nous';
  const readText = language === 'EN' ? 'Read.' : 'Lire.';
  const learnText = language === 'EN' ? 'Learn.' : 'Apprendre.';
  const growText = language === 'EN' ? 'Grow.' : 'Grandir.';
  const introText = language === 'EN' ? 'Introduction' : 'Introduction';
  const introParagraph =
    language === 'EN'
      ? 'Welcome to FFLO Story Space, a library dedicated to bringing the world of French literature to young minds. Located in Brooklyn, FFLO offers a curated collection of French books for children, making it easier for families to access quality French-language stories and resources. Our space is thoughtfully designed to inspire a love of reading and a deeper connection to French culture.'
      : "Bienvenue à l’Espace Lecture FFLO, une bibliothèque dédiée à l'univers de la littérature française pour les jeunes esprits. Située à Brooklyn, FFLO propose une collection soigneusement sélectionnée de livres en français pour enfants, facilitant l'accès des familles à des histoires et ressources de qualité en langue française. Notre espace est conçu pour inspirer l'amour de la lecture et renforcer la connexion avec la culture française.";
  const memberText = language === 'EN' ? 'Membership' : 'Membership';
  const memberParagraph =
    language === 'EN'
      ? 'As an FFLO Story Space member, you’ll enjoy privileged access to reserve up to four French books monthly, with each reservation lasting up to one week. Members can conveniently browse and reserve books online, then pick them up and return them to our FFLO campus. Membership not only unlocks our entire collection of French literature but also welcomes you into a vibrant French-speaking community in NYC, where families can share in their passion for French language and culture.'
      : 'En tant que membre de l’Espace Lecture FFLO, vous bénéficierez d’un accès privilégié pour réserver jusqu’à quatre livres en français par mois, chaque réservation durant jusqu’à une semaine. Les membres peuvent parcourir et réserver des livres en ligne, puis venir les retirer et les retourner sur notre campus FFLO. L’adhésion vous donne non seulement accès à notre collection complète de littérature française, mais elle vous accueille également au sein d’une communauté francophone dynamique à New York, où les familles peuvent partager leur passion pour la langue et la culture françaises.';

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

  const renderIcon = (index: number) => {
    if (shuffledIcons.length === 0 || !shuffledIcons[index]) return null;
    const IconComponent = shuffledIcons[index] as React.FC<IconProps>;
    return IconComponent ? <IconComponent className='about-icon' /> : null;
  };

  return (
    <>
      <main className='page-container'>
        <section className='about-container'>
          <header className='about-header'>
            <div className='about-header-image-container'>
              <div
                className='about-header-image-wrapper blur-load'
                style={{
                  backgroundImage: `url(${aboutImgSmall})`,
                }}
              >
                <img
                  src={aboutImg}
                  alt='library shelf image'
                  className='about-header-image'
                  onLoad={(e) => {
                    const imgElement = e.target as HTMLImageElement;
                    imgElement.parentElement?.classList.add('loaded');
                  }}
                />
              </div>
              <div className='about-header-text-container'>
                <p className='about-header-pretext'>{headerPretext}</p>
                <div className='about-header-title'>
                  <TitleFlair className='about-title-flair-left' />
                  <h1 className='about-header-title-text'>{headerText}</h1>
                  <TitleFlair className='about-title-flair-right' />
                </div>
                <div className='about-header-subtext-container'>
                  <p className='about-header-subtext blue'>{readText}</p>
                  <p className='about-header-subtext light-blue'>{learnText}</p>
                  <p className='about-header-subtext orange'>{growText}</p>
                </div>
              </div>
            </div>
          </header>

          <svg className='about-line-divider'>
            <line x1='0' y1='50%' x2='100%' y2='50%' />
          </svg>

          <section className='about-introduction-container'>
            <div className='about-introduction-image'>
              <div className='about-intro-image-container'>
                <div
                  className='about-intro-image-wrapper blur-load'
                  style={{
                    backgroundImage: `url(${introImgSmall})`,
                  }}
                >
                  <img
                    src={introImg}
                    alt='library shelf image'
                    className='about-intro-image'
                    onLoad={(e) => {
                      const imgElement = e.target as HTMLImageElement;
                      imgElement.parentElement?.classList.add('loaded');
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='about-intro-content'>
              <div className='about-intro-icon right'>
                {renderIcon(iconIndices[0])}
              </div>
              <header className='about-intro-text-container'>
                <p className='about-intro-header-text'>{introText}</p>
                <div className='about-intro-paragraph'>
                  <p className='about-intro-paragraph-text'>{introParagraph}</p>
                </div>
              </header>
              <div className='about-intro-icon left'>
                {renderIcon(iconIndices[1])}
              </div>
            </div>
          </section>

          <svg className='about-line-divider'>
            <line x1='0' y1='50%' x2='100%' y2='50%' />
          </svg>

          <section className='about-membership-container'>
            <div className='about-member-content'>
              <div className='about-member-icon left'>
                {renderIcon(iconIndices[2])}
              </div>
              <header className='about-member-text-container'>
                <p className='about-member-header-text'>{memberText}</p>
                <div className='about-member-paragraph'>
                  <p className='about-member-paragraph-text'>
                    {memberParagraph}
                  </p>
                </div>
              </header>
              <div className='about-member-icon right'>
                {renderIcon(iconIndices[3])}
              </div>
            </div>
            <div className='about-membership-image'>
              <div className='about-member-image-container'>
                <div
                  className='about-member-image-wrapper blur-load'
                  style={{
                    backgroundImage: `url(${membershipImgSmall})`,
                  }}
                >
                  <img
                    src={membershipImg}
                    alt='library shelf image'
                    className='about-member-image'
                    onLoad={(e) => {
                      const imgElement = e.target as HTMLImageElement;
                      imgElement.parentElement?.classList.add('loaded');
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          <svg className='about-line-divider'>
            <line x1='0' y1='50%' x2='100%' y2='50%' />
          </svg>

          <div className='about-letter-container'>
            <Letter />
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
