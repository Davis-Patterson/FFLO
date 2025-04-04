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
        <section className='home-fallback-container'>
          <header className='home-fallback-header'>
            <div className='home-fallback-header-image-container'>
              <Skeleton
                sx={{ bgcolor: '#ffffff' }}
                variant='rectangular'
                animation='wave'
                width={'100%'}
                height={500}
              />
              <div className='home-fallback-header-text-container'>
                <div className='home-fallback-header-pretext'>
                  <Skeleton
                    sx={{ bgcolor: '#ffffff' }}
                    variant='rectangular'
                    animation='wave'
                    width={150}
                    height={25}
                  />
                </div>
                <div className='home-fallback-header-title'>
                  <Skeleton
                    sx={{ bgcolor: '#ffffff' }}
                    variant='rectangular'
                    animation='wave'
                    width={40}
                    height={40}
                  />
                  <Skeleton
                    sx={{ bgcolor: '#ffffff' }}
                    variant='rectangular'
                    animation='wave'
                    width={200}
                    height={40}
                  />
                  <Skeleton
                    sx={{ bgcolor: '#ffffff' }}
                    variant='rectangular'
                    animation='wave'
                    width={40}
                    height={40}
                  />
                </div>
                <div className='home-fallback-header-subtext'>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton
                      sx={{ bgcolor: '#ffffff' }}
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
              sx={{ bgcolor: '#fff5ed' }}
              variant='rectangular'
              animation='wave'
              width={'100%'}
              height={1}
            />
          </div>

          <section className='home-categories-fallback-container'>
            <header className='home-categories-fallback-container-header'>
              <Skeleton
                sx={{ bgcolor: '#ffffff' }}
                variant='rectangular'
                animation='wave'
                width={100}
                height={20}
              />
              <div className='home-categories-fallback-container-title'>
                <Skeleton
                  sx={{ bgcolor: '#ffffff' }}
                  variant='rectangular'
                  animation='wave'
                  width={40}
                  height={40}
                />
                <Skeleton
                  sx={{ bgcolor: '#ffffff' }}
                  variant='rectangular'
                  animation='wave'
                  width={150}
                  height={40}
                />
                <Skeleton
                  sx={{ bgcolor: '#ffffff' }}
                  variant='rectangular'
                  animation='wave'
                  width={40}
                  height={40}
                />
              </div>
            </header>
            <div className='home-categories-fallback-map-container'>
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton
                  sx={{ bgcolor: '#ffffff' }}
                  key={index}
                  variant='rectangular'
                  animation='wave'
                  width={190}
                  height={330}
                />
              ))}
            </div>
          </section>

          <div className='home-fallback-line-divider'>
            <Skeleton
              sx={{ bgcolor: '#fff5ed' }}
              variant='rectangular'
              animation='wave'
              width={'100%'}
              height={1}
            />
          </div>

          <section className='home-fallback-introduction-container'>
            <div className='home-fallback-introduction-image'>
              <Skeleton
                sx={{ bgcolor: '#ffffff' }}
                variant='rectangular'
                animation='wave'
                width={350}
                height={500}
              />
            </div>
            <header className='home-fallback-intro-content'>
              <div className='home-fallback-content-icon right'>
                <Skeleton
                  sx={{ bgcolor: '#ffffff' }}
                  variant='rounded'
                  animation='wave'
                  width={55}
                  height={55}
                />
              </div>
              <div className='home-fallback-content-title'>
                <Skeleton
                  sx={{ bgcolor: '#ffffff' }}
                  variant='rectangular'
                  animation='wave'
                  width='55%'
                  height={40}
                />
              </div>
              <div className='home-fallback-content-text'>
                {Array.from({ length: 7 }).map((_, index) => (
                  <Skeleton
                    sx={{ bgcolor: '#ffffff' }}
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
                  sx={{ bgcolor: '#ffffff' }}
                  variant='rounded'
                  animation='wave'
                  width={55}
                  height={55}
                />
              </div>
            </header>
          </section>

          <div className='home-fallback-line-divider'>
            <Skeleton
              sx={{ bgcolor: '#fff5ed' }}
              variant='rectangular'
              animation='wave'
              width={'100%'}
              height={1}
            />
          </div>

          <section className='home-fallback-reviews-container'>
            <header className='home-fallback-reviews-fallback-container-header'>
              <Skeleton
                sx={{ bgcolor: '#ffffff' }}
                variant='rectangular'
                animation='wave'
                width={100}
                height={20}
              />
              <div className='home-fallback-reviews-fallback-container-title'>
                <Skeleton
                  sx={{ bgcolor: '#ffffff' }}
                  variant='rectangular'
                  animation='wave'
                  width={40}
                  height={40}
                />
                <Skeleton
                  sx={{ bgcolor: '#ffffff' }}
                  variant='rectangular'
                  animation='wave'
                  width={150}
                  height={40}
                />
                <Skeleton
                  sx={{ bgcolor: '#ffffff' }}
                  variant='rectangular'
                  animation='wave'
                  width={40}
                  height={40}
                />
              </div>
            </header>

            <div className='home-fallback-reviews-fallback-content'>
              <div className='home-fallback-reviews-control-container'>
                <Skeleton
                  sx={{ bgcolor: '#ffffff' }}
                  variant='rounded'
                  animation='wave'
                  width={20}
                  height={60}
                />
              </div>
              <div className='home-fallback-reviews-content-container'>
                <div className='home-fallback-reviews-content-icon top'>
                  <Skeleton
                    sx={{ bgcolor: '#fff5ed' }}
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
                        sx={{ bgcolor: '#fff5ed' }}
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
                      sx={{ bgcolor: '#fff5ed' }}
                      variant='rounded'
                      animation='wave'
                      width={150}
                      height={30}
                    />
                  </div>
                </div>
                <div className='home-fallback-reviews-content-icon bottom'>
                  <Skeleton
                    sx={{ bgcolor: '#fff5ed' }}
                    variant='rounded'
                    animation='wave'
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className='home-fallback-reviews-control-container'>
                <Skeleton
                  sx={{ bgcolor: '#ffffff' }}
                  variant='rounded'
                  animation='wave'
                  width={20}
                  height={60}
                />
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default HomeFallback;
