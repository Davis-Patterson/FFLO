import { useEffect } from 'react';
import Letter from 'Utils/Letter';
import 'Styles/About.css';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className='page-container'>
        <header className='about-header'></header>
        <div className='about-letter-container'>
          <Letter />
        </div>
      </main>
    </>
  );
};

export default About;
