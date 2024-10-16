import TitleFlair from 'Svgs/TitleFlair';
import 'Styles/Home.css';

const Home: React.FC = () => {
  return (
    <>
      <main className='page-container'>
        <header className='home-header'>
          <div className='home-header-title'>
            <TitleFlair className='title-flair-left' />
            <p className='home-title-text'>Story Space</p>
            <TitleFlair className='title-flair-right' />
          </div>
        </header>
      </main>
    </>
  );
};

export default Home;
