import React, { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import 'Styles/Utils/Fullscreen.css';

const Fullscreen: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext is not available');
  }

  const { fullscreenData, fullscreenClose } = context;

  return (
    <main className='fullscreen-overlay' onClick={fullscreenClose}>
      <section
        className='fullscreen-content'
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={fullscreenData.src}
          alt={fullscreenData.alt}
          className='fullscreen-image'
        />
        <header className='fullscreen-details'>
          <h2>{fullscreenData.title}</h2>
          <p>{fullscreenData.author}</p>
        </header>
      </section>
    </main>
  );
};

export default Fullscreen;
