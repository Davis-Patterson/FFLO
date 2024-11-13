import { useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import 'Styles/Tools/HomeFallback.css';

const HomeFallback: React.FC = () => {
  const getRandomWidth = () => `${Math.floor(Math.random() * 16) + 75}%`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className='page-container'>
        <header className='home-fallback-header'>
          <div className='home-fallback-header-image-container'>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={'100%'}
              height={500}
            />
            <div className='home-fallback-header-text-container'>
              <div className='home-fallback-header-pretext'>
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={150}
                  height={25}
                />
              </div>
              <div className='home-fallback-header-title'>
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
              <div className='home-fallback-header-subtext'>
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

        <div className='home-fallback-line-divider'>
          <Skeleton
            variant='rectangular'
            animation='wave'
            width={'100%'}
            height={1}
          />
        </div>

        <section className='home-fallback-introduction-container'>
          <div className='home-fallback-introduction-image'>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={350}
              height={500}
            />
          </div>
          <div className='home-fallback-intro-content'>
            <div className='home-fallback-content-icon right'>
              <Skeleton
                variant='rounded'
                animation='wave'
                width={55}
                height={55}
              />
            </div>
            <div className='home-fallback-content-title'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width='55%'
                height={40}
              />
            </div>
            <div className='home-fallback-content-text'>
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
            <div className='home-fallback-content-icon left'>
              <Skeleton
                variant='rounded'
                animation='wave'
                width={55}
                height={55}
              />
            </div>
          </div>
        </section>

        <div className='home-fallback-line-divider'>
          <Skeleton
            variant='rectangular'
            animation='wave'
            width={'100%'}
            height={1}
          />
        </div>

        <section className='home-fallback-membership-container'>
          <div className='home-fallback-member-content'>
            <div className='home-fallback-content-icon left'>
              <Skeleton
                variant='rounded'
                animation='wave'
                width={55}
                height={55}
              />
            </div>
            <div className='home-fallback-content-title'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width='55%'
                height={40}
              />
            </div>
            <div className='home-fallback-content-text'>
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
            <div className='home-fallback-content-icon right'>
              <Skeleton
                variant='rounded'
                animation='wave'
                width={55}
                height={55}
              />
            </div>
          </div>
          <div className='home-fallback-membership-image'>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={350}
              height={500}
            />
          </div>
        </section>

        <div className='home-fallback-line-divider'>
          <Skeleton
            variant='rectangular'
            animation='wave'
            width={'100%'}
            height={1}
          />
        </div>

        <section className='home-fallback-letter-container'>
          <header className='home-fallback-letter-header-container'>
            <div className='home-fallback-letter-title-container'>
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

          <div className='home-fallback-letter-content-container'>
            <div className='home-fallback-letter-content-margin left'>
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
            <div className='home-fallback-letter-content-main'>
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className='home-fallback-letter-content-text-container'
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
              <div className='home-fallback-letter-signature-title-container'>
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
            <div className='home-fallback-letter-content-margin right'>
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
          <div className='home-fallback-letter-footer-container'>
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

export default HomeFallback;
