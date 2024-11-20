import React, { useContext, useState, useEffect, useRef } from 'react';
import { AppContext } from 'Contexts/AppContext';
import 'Styles/Utils/Fullscreen.css';
import XIcon from 'Svgs/XIcon';

const Fullscreen: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext is not available');
  }

  const { showFullscreen, setShowFullscreen, fullscreenData, fullscreenClose } =
    context;

  const [renderContainer, setRenderContainer] = useState(false);

  const fullscreenContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showFullscreen) {
      setRenderContainer(true);
    }
  }, [showFullscreen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        fullscreenContainerRef.current &&
        !fullscreenContainerRef.current.contains(event.target as Node)
      ) {
        fullscreenClose();
        setTimeout(() => {
          setRenderContainer(false);
        }, 350);
      }
    };

    if (showFullscreen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFullscreen, setShowFullscreen]);

  const handleClose = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    fullscreenClose();
    setTimeout(() => {
      setRenderContainer(false);
    }, 400);
  };

  return (
    <>
      {renderContainer && (
        <main
          className={`fullscreen-overlay ${
            showFullscreen ? 'fade-in' : 'fade-out'
          }`}
        >
          <section
            className={`fullscreen-content ${
              showFullscreen ? 'fade-in' : 'fade-out'
            }`}
            ref={fullscreenContainerRef}
          >
            <XIcon
              className='fullscreen-x-icon'
              onMouseDown={(e) => handleClose(e)}
            />
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
      )}
    </>
  );
};

export default Fullscreen;
