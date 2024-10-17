import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import 'Styles/Home.css';

const Home: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authUser, language } = context;

  // translations
  const headerText = language === 'EN' ? 'Story Space' : "Espace d'Histoire";

  if (authUser) {
    console.log('authUser: ', authUser);
  } else {
    console.log('User not logged in');
  }

  return (
    <>
      <main className='page-container'>
        <header className='home-header'>
          <div className='home-header-title'>
            <TitleFlair className='title-flair-left' />
            <p className='home-title-text'>{headerText}</p>
            <TitleFlair className='title-flair-right' />
          </div>
        </header>
        <section></section>
      </main>
    </>
  );
};

export default Home;
