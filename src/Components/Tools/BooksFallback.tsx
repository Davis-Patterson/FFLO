import { useEffect } from 'react';
import BookListFallback from 'Tools/BookListFallback';
import Skeleton from '@mui/material/Skeleton';
import 'Styles/Tools/BooksFallback.css';

const BooksFallback: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className='page-container'>
        <header className='categories-fallback-header'>
          <h2 className='categories-fallback-header-pretext'>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={90}
              height={20}
            />
          </h2>
          <div className='categories-fallback-header-title'>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={50}
              height={40}
            />
            <h1 className='categories-fallback-header-title-text'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={200}
                height={40}
              />
            </h1>
            <Skeleton
              variant='rectangular'
              animation='wave'
              width={50}
              height={40}
            />
          </div>
        </header>

        <div className='categories-fallback-line-divider'>
          <Skeleton
            variant='rectangular'
            animation='wave'
            width={'100%'}
            height={1}
          />
        </div>

        <div className='categories-fallback-container'>
          <div className='categories-fallback-map-container'>
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
        <div className='categories-fallback-books-container'>
          <BookListFallback />
        </div>
      </main>
    </>
  );
};

export default BooksFallback;
