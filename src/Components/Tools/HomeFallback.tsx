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

        <div className='home-categories-fallback-container'>
          <div className='home-categories-fallback-container-header'>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={100}
              height={20}
            />
            <div className='home-categories-fallback-container-title'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={40}
                height={40}
              />
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={150}
                height={40}
              />
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className='home-categories-fallback-map-container'>
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={index}
                variant='rectangular'
                animation='wave'
                width={190}
                height={330}
              />
            ))}
          </div>
        </div>

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

        <section className='home-fallback-reviews-container'>
          <div className='home-fallback-reviews-fallback-container-header'>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={100}
              height={20}
            />
            <div className='home-fallback-reviews-fallback-container-title'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={40}
                height={40}
              />
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={150}
                height={40}
              />
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={40}
                height={40}
              />
            </div>
          </div>

          <div className='home-fallback-reviews-fallback-content'>
            <div className='home-fallback-reviews-control-container'>
              <Skeleton
                variant='rounded'
                animation='wave'
                width={20}
                height={60}
              />
            </div>
            <div className='home-fallback-reviews-content-container'>
              <div className='home-fallback-reviews-content-icon top'>
                <Skeleton
                  variant='rounded'
                  animation='wave'
                  width={40}
                  height={40}
                />
              </div>
              <div className='home-fallback-reviews-review'>
                <div className='home-fallback-reviews-review-text'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      variant='rounded'
                      animation='wave'
                      width={getRandomWidth()}
                      height={20}
                    />
                  ))}
                </div>
                <div className='home-fallback-reviews-review-name'>
                  <Skeleton
                    variant='rounded'
                    animation='wave'
                    width={150}
                    height={30}
                  />
                </div>
              </div>
              <div className='home-fallback-reviews-content-icon bottom'>
                <Skeleton
                  variant='rounded'
                  animation='wave'
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className='home-fallback-reviews-control-container'>
              <Skeleton
                variant='rounded'
                animation='wave'
                width={20}
                height={60}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeFallback;
