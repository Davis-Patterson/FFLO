import { useContext, useState, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import IgIcon from 'Svgs/IgIcon';
import FbIcon from 'Svgs/FbIcon';
import PaperPlaneIcon from 'Svgs/PaperPlaneIcon';
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/Contact.css';
import LetterIcon from 'Svgs/LetterIcon';

const Contact: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authUser, language } = context;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [messageButtonActive, setMessageButtonActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // translations
  const headerText = language === 'EN' ? 'Bonjour' : 'Bonjour';
  const contactText =
    language === 'EN' ? 'Get in contact with us' : 'Contactez-nous';
  const onlineText = language === 'EN' ? 'Online' : 'En ligne';
  const locationText = language === 'EN' ? 'In Person' : 'En personne';
  const reachOutText = language === 'EN' ? 'Reach Out' : 'Contactez-nous';
  const firstNamePlaceholder = language === 'EN' ? 'First Name*' : 'Prénom*';
  const lastNamePlaceholder =
    language === 'EN' ? 'Last Name' : 'Nom de Famille';
  const emailPlaceholder = language === 'EN' ? 'Email' : 'Courriel';
  const messagePlaceholder = language === 'EN' ? 'Message*' : 'Message*';
  const requiredText = language === 'EN' ? '*required' : '*obligatoire';
  const messageButtonText =
    language === 'EN' ? 'Send Message' : 'Envoyer un message';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (authUser) {
      setFirstName(authUser.first_name);
      setEmail(authUser.email);
      if (authUser.last_name) {
        setLastName(authUser.last_name);
      }
    }
  }, [authUser]);

  useEffect(() => {
    const isMessageFormEmpty =
      !firstName.trim() || !email.trim() || !message.trim();

    setMessageButtonActive(!isMessageFormEmpty);
  }, [firstName, email, message]);

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

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log('handle message');
      setIsLoading(false);

      if (authUser) {
        setFirstName(authUser.first_name);
        setEmail(authUser.email);
        if (authUser.last_name) {
          setLastName(authUser.last_name);
        }
      }
      setMessage('');
    }, 1000);
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };

  return (
    <>
      <main className='page-container'>
        <main className='contact-container'>
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
          <section className='contact-content-container'>
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
              <form onSubmit={handleSendMessage}>
                <div className='auth-name-inputs'>
                  <div>
                    <input
                      type='text'
                      name='fname'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      placeholder={firstNamePlaceholder}
                      className='contact-name-input'
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      name='lname'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder={lastNamePlaceholder}
                      className='contact-name-input'
                    />
                  </div>
                </div>
                <div>
                  <input
                    type='text'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder={emailPlaceholder + '*'}
                    className='contact-input'
                  />
                </div>
                <div>
                  <textarea
                    name='message'
                    value={message}
                    maxLength={1200}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={messagePlaceholder}
                    className='contact-message-input'
                  />
                </div>
                {!messageButtonActive && (
                  <p className='contact-required'>{requiredText}</p>
                )}
                {errorMessage && (
                  <p className='error-message'>{errorMessage}</p>
                )}
                <button
                  type='submit'
                  className={`${
                    messageButtonActive ? 'submit-button' : 'inactive-button'
                  }`}
                  disabled={!messageButtonActive}
                >
                  {isLoading ? (
                    <LinearProgress color='inherit' />
                  ) : (
                    messageButtonText
                  )}
                </button>
              </form>
            </div>
          </section>
        </main>
      </main>
    </>
  );
};

export default Contact;
