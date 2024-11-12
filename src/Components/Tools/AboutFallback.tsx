import { useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import 'Styles/Tools/AboutFallback.css';

const AboutFallback: React.FC = () => {
  const getRandomWidth = () => `${Math.floor(Math.random() * 16) + 75}%`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className='page-container'>
        <header className='about-fallback-header'>
          <div className='about-fallback-header-image-container'>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={'100%'}
              height={500}
            />
            <div className='about-fallback-header-text-container'>
              <div className='about-fallback-header-pretext'>
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={150}
                  height={25}
                />
              </div>
              <div className='about-fallback-header-title'>
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={40}
                  height={40}
                />
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={200}
                  height={40}
                />
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={40}
                  height={40}
                />
              </div>
              <div className='about-fallback-header-subtext'>
                {Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    variant='rectangular'
                    animation='wave'
                    width={60}
                    height={25}
                  />
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className='book-fallback-line-divider'>
          <Skeleton
            variant='rectangular'
            animation='wave'
            width={'100%'}
            height={1}
          />
        </div>

        <section className='about-fallback-introduction-container'>
          <div className='about-fallback-introduction-image'>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={350}
              height={500}
            />
          </div>
          <div className='about-fallback-intro-content'>
            <div className='about-fallback-content-icon right'>
              <Skeleton
                variant='rounded'
                animation='wave'
                width={55}
                height={55}
              />
            </div>
            <div className='about-fallback-content-title'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width='55%'
                height={40}
              />
            </div>
            <div className='about-fallback-content-text'>
              {Array.from({ length: 7 }).map((_, index) => (
                <Skeleton
                  key={index}
                  variant='rectangular'
                  animation='wave'
                  width={getRandomWidth()}
                  height={20}
                />
              ))}
            </div>
            <div className='about-fallback-content-icon left'>
              <Skeleton
                variant='rounded'
                animation='wave'
                width={55}
                height={55}
              />
            </div>
          </div>
        </section>

        <div className='book-fallback-line-divider'>
          <Skeleton
            variant='rectangular'
            animation='wave'
            width={'100%'}
            height={1}
          />
        </div>

        <section className='about-fallback-membership-container'>
          <div className='about-fallback-member-content'>
            <div className='about-fallback-content-icon left'>
              <Skeleton
                variant='rounded'
                animation='wave'
                width={55}
                height={55}
              />
            </div>
            <div className='about-fallback-content-title'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width='55%'
                height={40}
              />
            </div>
            <div className='about-fallback-content-text'>
              {Array.from({ length: 7 }).map((_, index) => (
                <Skeleton
                  key={index}
                  variant='rectangular'
                  animation='wave'
                  width={getRandomWidth()}
                  height={20}
                />
              ))}
            </div>
            <div className='about-fallback-content-icon right'>
              <Skeleton
                variant='rounded'
                animation='wave'
                width={55}
                height={55}
              />
            </div>
          </div>
          <div className='about-fallback-membership-image'>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={350}
              height={500}
            />
          </div>
        </section>

        <div className='book-fallback-line-divider'>
          <Skeleton
            variant='rectangular'
            animation='wave'
            width={'100%'}
            height={1}
          />
        </div>

        <section className='about-fallback-letter-container'>
          <header className='about-fallback-letter-header-container'>
            <div className='about-fallback-letter-title-container'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={40}
                height={40}
              />
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={260}
                height={40}
              />
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={40}
                height={40}
              />
            </div>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={200}
              height={50}
            />
          </header>

          <div className='about-fallback-letter-content-container'>
            <div className='about-fallback-letter-content-margin left'>
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton
                  key={index}
                  variant='rounded'
                  animation='wave'
                  width={20}
                  height={50}
                />
              ))}
            </div>
            <div className='about-fallback-letter-content-main'>
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className='about-fallback-letter-content-text-container'
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      variant='rectangular'
                      animation='wave'
                      width={getRandomWidth()}
                      height={20}
                    />
                  ))}
                </div>
              ))}
              <div className='about-fallback-letter-signature-title-container'>
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={100}
                  height={25}
                />
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={150}
                  height={25}
                />
              </div>
            </div>
            <div className='about-fallback-letter-content-margin right'>
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton
                  key={index}
                  variant='rounded'
                  animation='wave'
                  width={20}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className='about-fallback-letter-footer-container'>
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                variant='circular'
                animation='wave'
                width={40}
                height={40}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutFallback;
