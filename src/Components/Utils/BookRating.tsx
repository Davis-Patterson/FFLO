import { useState } from 'react';
import StarGrey from 'Svgs/StarGrey';
import StarColor from 'Svgs/StarColor';
import 'Styles/Utils/BookRating.css';

const BookRating = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  const handleClick = (index: number) => {
    setRating(index);
  };

  return (
    <div className='book-rating-stars-container'>
      <div className='book-rating-stars'>
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            className='star'
          >
            {index <= (hoverRating || rating || 0) ? (
              <StarColor className='book-rating-star' />
            ) : (
              <StarGrey className='book-rating-star' />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BookRating;
