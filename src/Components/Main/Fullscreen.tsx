import React, { useContext, useState, useEffect, useRef } from 'react';
import { AppContext } from 'Contexts/AppContext';
import XIcon from 'Svgs/XIcon';
import 'Styles/Main/Fullscreen.css';

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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showFullscreen) {
      setRenderContainer(true);
    }
  }, [showFullscreen]);

  useEffect(() => {
    if (!showFullscreen) {
      return;
    }

    const preventScroll = (event: Event) => {
      event.preventDefault();
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (
        ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(
          event.key
        )
      ) {
        preventScroll(event);
      }
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('keydown', handleKeydown, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('touchmove', preventScroll);
      document.body.style.overflow = '';
    };
  }, [showFullscreen]);

  useEffect(() => {
    if (!showFullscreen) {
      return;
    }
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      touchEndY = event.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (touchStartY - touchEndY > 50) {
        // Swipe up
        fullscreenClose();
        setTimeout(() => {
          setRenderContainer(false);
        }, 350);
      }

      if (touchEndY - touchStartY > 50) {
        // Swipe down
        fullscreenClose();
        setTimeout(() => {
          setRenderContainer(false);
        }, 350);
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [showFullscreen, fullscreenClose]);

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
        <div
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
        </div>
      )}
    </>
  );
};

export default Fullscreen;
