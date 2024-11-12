import { useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import 'Styles/Tools/ContactFallback.css';

const ContactFallback: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className='page-container'>
        <main className='contact-fallback-container'>
          <header className='contact-fallback-header'>
            <div className='contact-fallback-header-title'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={50}
                height={40}
                className='title-flair-skeleton'
              />
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={160}
                height={40}
                className='title-text-skeleton'
              />
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={50}
                height={40}
                className='title-flair-skeleton'
              />
            </div>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width='60%'
              height={20}
              className='subtitle-skeleton'
            />
          </header>

          <div className='contact-fallback-line-divider'>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={'100%'}
              height={1}
            />
          </div>

          <section className='contact-fallback-content-container'>
            <div className='contact-fallback-social-icon-location-container'>
              <div className='contact-fallback-online-section'>
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={80}
                  height={20}
                />
                <div className='social-icons-skeleton-container'>
                  <Skeleton
                    variant='rounded'
                    animation='wave'
                    width={40}
                    height={40}
                  />
                  <Skeleton
                    variant='rounded'
                    animation='wave'
                    width={40}
                    height={40}
                  />
                </div>
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={120}
                  height={20}
                  className='email-skeleton'
                />
              </div>

              <Skeleton
                variant='rectangular'
                animation='wave'
                width={110}
                height={110}
                className='letter-icon-skeleton'
              />

              <div className='contact-fallback-location-container'>
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={100}
                  height={25}
                  className='section-header-skeleton'
                />
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={110}
                  height={20}
                  className='phone-text-skeleton'
                />
                <div className='contact-fallback-address'>
                  <Skeleton
                    variant='rectangular'
                    animation='wave'
                    width={125}
                    height={15}
                    className='address-text-skeleton'
                  />
                  <Skeleton
                    variant='rectangular'
                    animation='wave'
                    width={145}
                    height={15}
                    className='address-text-skeleton'
                  />
                </div>
              </div>
            </div>

            <div className='contact-fallback-message-input-wrapper'>
              <div className='contact-fallback-message-input-container'>
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={100}
                  height={30}
                  className='section-header-skeleton'
                />
                <Skeleton
                  variant='circular'
                  animation='wave'
                  width={50}
                  height={50}
                  className='plane-icon-skeleton'
                />
                <div className='contact-fallback-form-skeleton'>
                  <div className='contact-fallback-form-names'>
                    <Skeleton
                      variant='rectangular'
                      animation='wave'
                      width={'100%'}
                      height={40}
                      className='input-skeleton'
                    />
                    <Skeleton
                      variant='rectangular'
                      animation='wave'
                      width={'100%'}
                      height={40}
                      className='input-skeleton'
                    />
                  </div>
                  <Skeleton
                    variant='rectangular'
                    animation='wave'
                    width='100%'
                    height={40}
                    className='input-skeleton'
                  />
                  <Skeleton
                    variant='rectangular'
                    animation='wave'
                    width='100%'
                    height={100}
                    className='message-input-skeleton'
                  />
                  <Skeleton
                    variant='rectangular'
                    animation='wave'
                    width='100%'
                    height={40}
                    className='button-skeleton'
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </main>
    </>
  );
};

export default ContactFallback;
