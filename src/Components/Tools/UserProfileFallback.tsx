import React, { useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import 'Styles/Tools/UserProfileFallback.css';

const UserProfileFallback: React.FC = () => {
  const getRandomWidth = () => `${Math.floor(Math.random() * 16) + 75}%`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className='page-container'>
        <div className='user-fallback-profile-container'>
          <header className='user-fallback-header-container'>
            <Skeleton
              sx={{ bgcolor: '#ffffff' }}
              variant='rectangular'
              animation='wave'
              width={150}
              height={30}
            />
            <div className='user-fallback-header-title-container'>
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
          </header>

          <div className='user-fallback-line-divider'>
            <Skeleton
              sx={{ bgcolor: '#fff5ed' }}
              variant='rectangular'
              animation='wave'
              width={'100%'}
              height={1}
            />
          </div>

          <div className='user-fallback-info-container'>
            <div className='user-fallback-info-membership-container'>
              <div className='user-fallback-info'>
                <div className='user-fallback-info-header'>
                  <div className='user-fallback-image-container'>
                    <Skeleton
                      sx={{ bgcolor: '#fff5ed' }}
                      variant='circular'
                      animation='wave'
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className='user-fallback-header-icons'>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <Skeleton
                        sx={{ bgcolor: '#fff5ed' }}
                        key={index}
                        variant='rectangular'
                        animation='wave'
                        width={30}
                        height={30}
                      />
                    ))}
                  </div>
                </div>
                <Skeleton
                  sx={{ bgcolor: '#fff5ed' }}
                  variant='rectangular'
                  animation='wave'
                  width='60%'
                  height={30}
                />
                <Skeleton
                  sx={{ bgcolor: '#fff5ed' }}
                  variant='rectangular'
                  animation='wave'
                  width='70%'
                  height={20}
                />
                <div className='user-fallback-phone-edit-icon-container'>
                  <div className='user-fallback-phone-edit-container'>
                    <Skeleton
                      sx={{ bgcolor: '#fff5ed' }}
                      variant='rectangular'
                      animation='wave'
                      width={80}
                      height={20}
                    />
                    <Skeleton
                      sx={{ bgcolor: '#fff5ed' }}
                      variant='rectangular'
                      animation='wave'
                      width={120}
                      height={35}
                    />
                  </div>
                  <div className='user-fallback-phone-edit-icons'>
                    <Skeleton
                      sx={{ bgcolor: '#fff5ed' }}
                      variant='rectangular'
                      animation='wave'
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>
              <div className='user-fallback-membership-container'>
                <Skeleton
                  sx={{ bgcolor: '#fff5ed' }}
                  variant='rectangular'
                  animation='wave'
                  width='100%'
                  height={80}
                />
                <div className='user-fallback-membership-icon-container'>
                  <Skeleton
                    sx={{ bgcolor: '#fff5ed' }}
                    variant='rectangular'
                    animation='wave'
                    width={30}
                    height={30}
                  />
                  <Skeleton
                    sx={{ bgcolor: '#fff5ed' }}
                    variant='rectangular'
                    animation='wave'
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
            <div className='user-fallback-vertical-divider'>
              <Skeleton
                sx={{ bgcolor: '#fff5ed' }}
                variant='rectangular'
                animation='wave'
                width={1}
                height={'100%'}
              />
            </div>
            <div className='user-fallback-checked-out-container'>
              <div className='user-fallback-checked-out-content'>
                <div className='user-fallback-checked-out-header-text'>
                  <Skeleton
                    sx={{ bgcolor: '#fff5ed' }}
                    variant='rectangular'
                    animation='wave'
                    width={140}
                    height={25}
                  />
                  <div className='user-fallback-checked-out-book-info'>
                    <div className='user-fallback-checked-out-book-image'>
                      <Skeleton
                        sx={{ bgcolor: '#fff5ed' }}
                        variant='rectangular'
                        animation='wave'
                        width={100}
                        height={150}
                      />
                    </div>
                    <div className='user-fallback-checked-out-book-details'>
                      <div className='user-fallback-checked-out-book-details-top'>
                        <Skeleton
                          sx={{ bgcolor: '#fff5ed' }}
                          variant='rectangular'
                          animation='wave'
                          width='95%'
                          height={25}
                        />
                        <Skeleton
                          sx={{ bgcolor: '#fff5ed' }}
                          variant='rectangular'
                          animation='wave'
                          width='80%'
                          height={15}
                        />
                        <Skeleton
                          sx={{ bgcolor: '#fff5ed' }}
                          variant='rectangular'
                          animation='wave'
                          width={180}
                          height={15}
                        />
                      </div>
                      <div className='user-fallback-checked-out-book-details-bottom'>
                        <Skeleton
                          sx={{ bgcolor: '#fff5ed' }}
                          variant='rounded'
                          animation='wave'
                          width={60}
                          height={15}
                        />
                        <Skeleton
                          sx={{ bgcolor: '#fff5ed' }}
                          variant='rectangular'
                          animation='wave'
                          width={180}
                          height={15}
                        />
                        <Skeleton
                          sx={{ bgcolor: '#fff5ed' }}
                          variant='rectangular'
                          animation='wave'
                          width={180}
                          height={15}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='user-fallback-checked-out-icons'>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton
                      sx={{ bgcolor: '#fff5ed' }}
                      key={index}
                      variant='rectangular'
                      animation='wave'
                      width={30}
                      height={30}
                    />
                  ))}
                </div>
              </div>
              <div className='user-fallback-mini-list-container'>
                <div className='user-fallback-mini-list-books-link-container'>
                  <Skeleton
                    sx={{ bgcolor: '#fff5ed' }}
                    variant='rectangular'
                    animation='wave'
                    width={260}
                    height={35}
                  />
                  <Skeleton
                    sx={{ bgcolor: '#fff5ed' }}
                    variant='rectangular'
                    animation='wave'
                    width={60}
                    height={35}
                  />
                </div>
                <div className='user-fallback-mini-list-content'>
                  <div className='user-fallback-mini-list-control-container'>
                    <Skeleton
                      sx={{ bgcolor: '#fff5ed' }}
                      variant='rounded'
                      animation='wave'
                      width={20}
                      height={50}
                    />
                  </div>
                  <div className='user-fallback-mini-list-main-container'>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <Skeleton
                        sx={{ bgcolor: '#fff5ed' }}
                        key={index}
                        variant='rectangular'
                        animation='wave'
                        width={90}
                        height={130}
                      />
                    ))}
                  </div>
                  <div className='user-fallback-mini-list-control-container'>
                    <Skeleton
                      sx={{ bgcolor: '#fff5ed' }}
                      variant='rounded'
                      animation='wave'
                      width={20}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='user-fallback-line-divider'>
            <Skeleton
              sx={{ bgcolor: '#fff5ed' }}
              variant='rectangular'
              animation='wave'
              width={'100%'}
              height={1}
            />
          </div>

          <div className='user-fallback-rental-history'>
            <div className='user-fallback-rental-history-header'>
              <Skeleton
                sx={{ bgcolor: '#fff5ed' }}
                variant='rectangular'
                animation='wave'
                width={150}
                height={30}
              />
              <div className='user-fallback-search-container'>
                <Skeleton
                  sx={{ bgcolor: '#fff5ed' }}
                  variant='rectangular'
                  animation='wave'
                  width={220}
                  height={30}
                />
                <Skeleton
                  sx={{ bgcolor: '#fff5ed' }}
                  variant='rectangular'
                  animation='wave'
                  width={80}
                  height={30}
                />
              </div>
            </div>
            <div className='user-fallback-rental-history-content'>
              <Skeleton
                sx={{ bgcolor: '#fff5ed' }}
                variant='rectangular'
                animation='wave'
                width={130}
                height={180}
              />
              <div className='user-fallback-rental-history-content-text'>
                <Skeleton
                  sx={{ bgcolor: '#fff5ed' }}
                  variant='rectangular'
                  animation='wave'
                  width={250}
                  height={30}
                />
                <div className='user-fallback-rental-history-text-bottom'>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton
                      sx={{ bgcolor: '#fff5ed' }}
                      key={index}
                      variant='rectangular'
                      animation='wave'
                      width={getRandomWidth()}
                      height={15}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UserProfileFallback;
