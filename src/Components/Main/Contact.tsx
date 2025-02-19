import { useContext, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import Email from 'Components/Main/Email';
import TitleFlair from 'Svgs/TitleFlair';
import IgIcon from 'Svgs/IgIcon';
import FbIcon from 'Svgs/FbIcon';
import PaperPlaneIcon from 'Svgs/PaperPlaneIcon';
import LetterIcon from 'Svgs/LetterIcon';
import 'Styles/Main/Contact.css';

const Contact: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { language } = context;

  // translations
  const headerText = language === 'EN' ? 'Bonjour' : 'Bonjour';
  const contactText =
    language === 'EN' ? 'Get in contact with us' : 'Contactez-nous';
  const onlineText = language === 'EN' ? 'Online' : 'En ligne';
  const locationText = language === 'EN' ? 'In Person' : 'En personne';
  const reachOutText = language === 'EN' ? 'Reach Out' : 'Contactez-nous';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <>
      <main className='page-container'>
        <section className='contact-container'>
          <header className='contact-header'>
            <div className='contact-header-title'>
              <TitleFlair className='contact-title-flair-left' />
              <h1 className='contact-title-text'>{headerText}</h1>
              <TitleFlair className='contact-title-flair-right' />
            </div>
            <p className='contact-title-subtext'>{contactText}</p>
          </header>
          <svg className='contact-line-divider'>
            <line x1='0' y1='50%' x2='100%' y2='50%' />
          </svg>
          <div className='contact-content-container'>
            <div className='contact-social-icon-location-container'>
              <div className='contact-online-section'>
                <div className='contact-section-header'>
                  <p className='contact-section-header-text'>{onlineText}</p>
                </div>
                <div className='contact-socials-container'>
                  <IgIcon
                    className='contact-social-icon'
                    onMouseDown={(e) => handleLinkClick(e, 'IG')}
                  />
                  <FbIcon
                    className='contact-social-icon'
                    onMouseDown={(e) => handleLinkClick(e, 'FB')}
                  />
                </div>
                <p className='contact-email-text'>fflo.staff@gmail.com</p>
              </div>
              <div className='contact-icon-container'>
                <LetterIcon className='contact-letter-icon' />
              </div>
              <div className='contact-location-container'>
                <div className='contact-section-header'>
                  <p className='contact-section-header-text'>{locationText}</p>
                </div>
                <p className='contact-phone-text'>(347) 830-0114</p>
                <div className='contact-address-container'>
                  <p className='contact-address-text'>33 Nassau Avenue</p>
                  <p className='contact-address-text'>Brooklyn, NY 11222</p>
                </div>
              </div>
            </div>
            <div className='contact-message-input-container'>
              <div className='contact-section-header'>
                <p className='contact-section-header-text'>{reachOutText}</p>
              </div>
              <div className='contact-plane-container'>
                <PaperPlaneIcon className='contact-plane-icon' />
              </div>
              <Email />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
