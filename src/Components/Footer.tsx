import React, { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import Flowers1 from 'Svgs/Flowers1';
import ChickenIcon from 'Svgs/ChickenIcon';
import Flowers2 from 'Svgs/Flowers2';
import FlowerDots from 'Svgs/FlowerDots';
import IgIcon from 'Svgs/IgIcon';
import FbookIcon from 'Svgs/FbookIcon';
import 'Styles/Footer.css';

const Footer: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { language } = context;

  // translations
  const FFLOFooterText =
    language === 'EN' ? 'French For Little Ones' : 'French For Little Ones';
  const FFLOFooterSubtext =
    language === 'EN'
      ? 'French Immersion Playschool'
      : "École maternelle d'immersion française";

  const handleLinkClick = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    link: string
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    if (link === 'IG') {
      window.open('https://www.instagram.com/frenchforlittleones/', '_blank');
    }
    if (link === 'FB') {
      window.open('https://www.facebook.com/frenchforlittleones/', '_blank');
    }
  };

  return (
    <footer className='footer-container'>
      <section className='footer-header'>
        <div className='footer-flowers-left'>
          <Flowers1 className='flowers-icon' />
          <FlowerDots className='flower-dots' />
        </div>
        <div className='footer-center-header'>
          <div className='bird-logo'>
            <ChickenIcon style={{ width: '75px', height: '75px' }} />
          </div>
          <div className='footer-header-text'>
            <p className='FFLO-footer-text'>{FFLOFooterText}</p>
            <p className='FFLO-footer-subtext'>{FFLOFooterSubtext}</p>
          </div>
          <div className='footer-address-container'>
            <p className='footer-address-text'>33 Nassau Avenue</p>
            <p className='footer-address-text'>Brooklyn, New York 11222</p>
            <p className='footer-address-text'>
              (347) 830-0114 | fflo.service@gmail.com
            </p>
          </div>
        </div>
        <div className='footer-flowers-left'>
          <FlowerDots className='flower-dots' />
          <Flowers2 className='flowers-icon' />
        </div>
      </section>
      <section className='footer-footer-container'>
        <div className='footer-attribution-bar'>
          <div className='footer-attribution-text-container'>
            <p className='footer-attribution-text'>
              © 2023 by French for Little Ones LLC
            </p>
          </div>
          <div className='social-media-container'>
            <IgIcon
              className='footer-social-icon'
              onMouseDown={(e) => handleLinkClick(e, 'IG')}
            />
            <FbookIcon
              className='footer-social-icon'
              onMouseDown={(e) => handleLinkClick(e, 'FB')}
            />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
