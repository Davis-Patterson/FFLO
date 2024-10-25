import { useContext, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import LeafIcon from 'Svgs/LeafIcon';
import 'Styles/Utils/Letter.css';
import PaperPlaneIcon from 'Svgs/PaperPlaneIcon';
import PlantIcon from 'Svgs/PlantIcon';
import GrassIcon from 'Svgs/GrassIcon';
import BeanstalkIcon from 'Svgs/BeanstalkIcon';
import ButterflyIcon from 'Svgs/ButterflyIcon';
import Crayon1 from 'Svgs/Crayon1';
import Crayon2 from 'Svgs/Crayon2';

const Letter: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { language } = context;

  // Translations
  const letterHeaderText =
    language === 'EN' ? 'Letter From Sonia' : 'Lettre de Sonia';
  const letterContent1 =
    language === 'EN'
      ? "As a lifelong lover of books, I’ve always believed in the transformative power of reading. Growing up, I taught myself how to read, eagerly devouring stories, with my favorites being 'Tom Tom et Nana,' 'Martine,' & 'Chair de Poule.' These books not only sparked my imagination but also shaped my understanding of the world around me."
      : "En tant qu’amateur de livres depuis toujours, j’ai toujours cru au pouvoir transformateur de la lecture. En grandissant, j'ai appris à lire tout seul, dévorant avec impatience des histoires, mes préférées étant 'Tom Tom et Nana', 'Martine' 'Chair de Poule'. Ces livres ont non seulement éveillé mon imagination mais ont également façonné ma compréhension du monde qui m'entoure.";
  const letterContent2 =
    language === 'EN'
      ? "Now, as a member of the Brooklyn community and a school business owner, I've noticed a significant gap in access to French literature for young children. Many families share my passion for French language and culture, but finding quality French books can be a challenge. Shipping books from abroad is often difficult and expensive, leaving parents frustrated and searching for resources."
      : "Aujourd'hui, en tant que membre de la communauté de Brooklyn et propriétaire d'une école, j'ai remarqué un écart important dans l'accès à la littérature française pour les jeunes enfants. De nombreuses familles partagent ma passion pour la langue et la culture françaises, mais trouver des livres français de qualité peut être un défi. L’expédition de livres depuis l’étranger est souvent difficile et coûteuse, ce qui laisse les parents frustrés et à la recherche de ressources.";
  const letterContent3 =
    language === 'EN'
      ? 'This inspired me to open the reading room, a dedicated space filled with over 500 French books generously offered by my mother and donated by our community. My goal is to provide a welcoming environment where families can easily access French educational tools and foster a love for reading in their little ones. I believe that by creating this space, we can enrich our community and make the joys of French literature accessible to everyone.'
      : "Cela m'a inspiré à ouvrir la salle de lecture, un espace dédié rempli de plus de 500 livres français généreusement offerts par ma mère et donnés par notre communauté. Mon objectif est d'offrir un environnement accueillant où les familles peuvent facilement accéder aux outils pédagogiques en français et favoriser l'amour de la lecture chez leurs tout-petits. Je crois qu'en créant cet espace, nous pouvons enrichir notre communauté et rendre les joies de la littérature française accessibles à tous.";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='page-container'>
      <div>
        <section className='letter-details'>
          <header className='letter-header'>
            <div className='letter-header-title'>
              <LeafIcon className='letter-title-flair left' />
              <p className='letter-title-text'>{letterHeaderText}</p>
              <LeafIcon className='letter-title-flair right' />
            </div>
            <div className='plane-container'>
              <PaperPlaneIcon className='plane-icon' />
            </div>
          </header>
          <div className='letter-content-container'>
            <div className='letter-content-margin left'>
              <Crayon1 className='crayon-icon' />
              <Crayon2 className='crayon-icon' />
              <Crayon1 className='crayon-icon' />
              <Crayon2 className='crayon-icon' />
            </div>
            <div className='letter-content-main'>
              <p className='letter-content-text'>{letterContent1}</p>
              <p className='letter-content-text'>{letterContent2}</p>
              <p className='letter-content-text'>{letterContent3}</p>
            </div>
            <div className='letter-content-margin right'>
              <Crayon2 className='crayon-icon' />
              <Crayon1 className='crayon-icon' />
              <Crayon2 className='crayon-icon' />
              <Crayon1 className='crayon-icon' />
            </div>
          </div>
          <div className='letter-footer-container'>
            <BeanstalkIcon className='beanstalk-icon' />
            <GrassIcon className='grass-icon left' />
            <PlantIcon className='plant-icon' />
            <GrassIcon className='grass-icon right' />
            <ButterflyIcon className='butterfly-icon' />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Letter;
