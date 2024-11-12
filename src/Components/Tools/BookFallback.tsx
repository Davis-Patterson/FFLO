import { useEffect } from 'react';
import BookListFallback from 'Tools/BookListFallback';
import Skeleton from '@mui/material/Skeleton';
import 'Styles/Tools/BookFallback.css';

const BookFallback: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className='page-container'>
        <header className='book-fallback-header'>
          <Skeleton
            variant='rectangular'
            animation='wave'
            width={90}
            height={30}
            style={{ margin: '25px 0px 15px 0px' }}
          />
          <div className='book-fallback-header-title'>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={50}
              height={40}
            />
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={250}
              height={40}
            />
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={50}
              height={40}
            />
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

        <section className='book-fallback'>
          <div className='book-fallback-info-header'>
            <div className='book-fallback-image-container'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={250}
                height={300}
              />
            </div>
            <div className='book-fallback-info-container'>
              <div className='book-fallback-title-wrapper'>
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={280}
                  height={35}
                />
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={180}
                  height={35}
                />
              </div>
              <div className='book-fallback-author-wrapper'>
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={160}
                  height={25}
                />
                <Skeleton
                  variant='rounded'
                  animation='wave'
                  width={80}
                  height={20}
                  style={{ margin: '10px 0' }}
                />
              </div>
              <div className='book-fallback-checkout-container'>
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={60}
                  height={10}
                  style={{ marginTop: '10px' }}
                />
                <div className='book-fallback-rating-container'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      variant='circular'
                      animation='wave'
                      width={30}
                      height={30}
                      style={{ marginTop: '10px' }}
                    />
                  ))}
                </div>
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width={'100%'}
                  height={50}
                  style={{ marginTop: '10px' }}
                />
              </div>
            </div>
            <div className='book-fallback-bookmark-toggle-container'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={40}
                height={50}
              />
            </div>
          </div>
          <div className='book-fallback-info-divider'>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={'100%'}
              height={1}
            />
          </div>
          <div className='book-fallback-info-container'>
            <div className='book-fallback-column-container'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={160}
                height={20}
              />
              <Skeleton
                variant='rectangular'
                animation='wave'
                width='100%'
                height={60}
              />
            </div>
            <div className='book-fallback-column-container'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={120}
                height={20}
              />
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={80}
                height={20}
              />
            </div>
            <div className='book-fallback-column-container'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={120}
                height={20}
              />
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={80}
                height={20}
              />
            </div>
            <div className='book-fallback-column-container'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={120}
                height={20}
              />
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={80}
                height={20}
              />
            </div>
          </div>
          <div className='book-fallback-policy-button'>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={150}
              height={40}
            />
          </div>
        </section>
        <section className='book-fallback-more-books-container'>
          <div className='book-fallback-more-books-header-title'>
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
          <BookListFallback />
        </section>
      </main>
    </>
  );
};

export default BookFallback;
