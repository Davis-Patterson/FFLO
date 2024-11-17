import React, { useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import 'Styles/Tools/BookListFallback.css';

const BookListFallback: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='book-fallback-list-container'>
      <div className='page-toggles-container-fallback'>
        <Skeleton
          variant='rectangular'
          animation='wave'
          width={60}
          height={30}
          className='sidebar-icon-skeleton'
        />
        <Skeleton
          variant='rectangular'
          animation='wave'
          width='80%'
          height={1}
          className='line-divider-skeleton'
        />
        <div className='fallback-search-container'>
          <Skeleton
            variant='rectangular'
            animation='wave'
            width='80%'
            height={35}
            className='search-input-skeleton'
          />
          <Skeleton
            variant='rectangular'
            animation='wave'
            width='120px'
            height={35}
            className='filter-dropdown-skeleton'
          />
        </div>
        <Skeleton
          variant='rectangular'
          animation='wave'
          width={60}
          height={30}
          className='toggle-icon-skeleton'
        />
      </div>

      <div className='books-main-container'>
        <div className='book-fallback-grid-view'>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className='book-fallback-card-skeleton'>
              <Skeleton
                variant='rectangular'
                animation='wave'
                width={158}
                height={200}
                className='book-fallback-image-skeleton'
              />
              <div className='book-fallback-info-skeleton'>
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width='90%'
                  height={18}
                  className='book-fallback-title-skeleton'
                />
                <Skeleton
                  variant='rectangular'
                  animation='wave'
                  width='75%'
                  height={14}
                  className='book-fallback-author-skeleton'
                />
                <div className='book-fallback-language-rating-skeleton'>
                  <Skeleton
                    variant='rectangular'
                    animation='wave'
                    width={30}
                    height={10}
                    className='book-fallback-language-skeleton'
                  />
                  <Skeleton
                    variant='rectangular'
                    animation='wave'
                    width={30}
                    height={10}
                    className='star-icon-skeleton'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookListFallback;
