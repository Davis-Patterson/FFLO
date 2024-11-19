import React, { useContext, useState, useEffect, useRef } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import XIcon from 'Svgs/XIcon';
import UKFlag from 'Svgs/UKFlag';
import FrenchFlag from 'Svgs/FrenchFlag';
import 'Styles/Main/Menu.css';

const Menu: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { showMenu, setShowMenu, language, handleLanguageChange } = context;

  const [renderContainer, setRenderContainer] = useState(false);

  const authContainerRef = useRef<HTMLDivElement>(null);

  // Translations
  const logoutHeader = language === 'EN' ? 'Menu' : 'Menu';

  useEffect(() => {
    if (showMenu) {
      setRenderContainer(true);
    }
  }, [showMenu]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        authContainerRef.current &&
        !authContainerRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
        setTimeout(() => {
          setRenderContainer(false);
        }, 400);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu, setShowMenu]);

  const handleClose = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowMenu(false);
    setTimeout(() => {
      setRenderContainer(false);
    }, 400);
  };

  return (
    <>
      {renderContainer && (
        <main className={`menu-overlay ${showMenu ? 'fade-in' : 'fade-out'}`}>
          <section
            ref={authContainerRef}
            className={`menu-container ${showMenu ? 'fade-in' : 'fade-out'}`}
          >
            <div className='menu-portal-top-toggles'>
              <div className='menu-language-toggle'>
                {language === 'FR' && (
                  <UKFlag
                    className='flag-icon'
                    onMouseDown={(e) => handleLanguageChange(e, 'EN')}
                  />
                )}
                {language === 'EN' && (
                  <>
                    <FrenchFlag
                      className='flag-icon'
                      onMouseDown={(e) => handleLanguageChange(e, 'FR')}
                    />
                  </>
                )}
              </div>
              <XIcon
                className='menu-x-icon'
                onMouseDown={(e) => handleClose(e)}
              />
            </div>
            <>
              <header className='menu-header'>
                <TitleFlair className='menu-flair-left' />
                <h1 className='menu-header-text'>{logoutHeader}</h1>
                <TitleFlair className='menu-flair-right' />
              </header>
            </>
          </section>
        </main>
      )}
    </>
  );
};

export default Menu;
