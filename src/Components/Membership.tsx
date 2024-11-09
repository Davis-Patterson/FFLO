import { useContext, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import 'Styles/Membership.css';

const Membership: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { language } = context;

  // Translations
  const membershipHeaderText = language === 'EN' ? 'Membership' : '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className='page-container'>
        <header className='membership-header'>
          <div className='membership-header-title'>
            <TitleFlair className='membership-title-flair left' />
            <h1 className='membership-title-text'>{membershipHeaderText}</h1>
            <TitleFlair className='membership-title-flair right' />
          </div>
        </header>
        <div className='membership-container'></div>
      </main>
    </>
  );
};

export default Membership;
