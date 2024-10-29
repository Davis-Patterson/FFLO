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
    <div className='fullscreen-overlay' onClick={fullscreenClose}>
      <div className='fullscreen-content' onClick={(e) => e.stopPropagation()}>
        <img
          src={fullscreenData.src}
          alt={fullscreenData.alt}
          className='fullscreen-image'
        />
        <div className='fullscreen-details'>
          <h2>{fullscreenData.title}</h2>
          <p>{fullscreenData.author}</p>
        </div>
      </div>
    </div>
  );
};

export default Fullscreen;
