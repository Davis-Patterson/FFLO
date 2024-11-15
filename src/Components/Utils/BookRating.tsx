import { useContext, useState, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import ServerApi from 'Utilities/ServerApi';
import StarIcon from 'Svgs/StarIcon';
import 'Styles/Utils/BookRating.css';

interface BookRatingProps {
  bookId: number;
  ratings: { id: number; book: number; user: number; rating: number }[];
}

const BookRating = ({ bookId, ratings }: BookRatingProps) => {
  const { submitRating } = ServerApi();
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authUser, language, updateSingleBook } = context;

  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [justClickedRating, setJustClickedRating] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (authUser && ratings) {
      const userRating = ratings.find((r) => r.user === authUser.id);
      if (userRating) {
        setRating(userRating.rating);
      }
    }
  }, [authUser, ratings]);

  // Translations
  const ratingText =
    language === 'EN' ? 'Leave a rating:' : 'Laisser une note :';

  const handleMouseEnter = (index: number) => {
    if (justClickedRating === null) {
      setHoverRating(index);
    }
  };

  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  const handleClick = async (index: number) => {
    const newRating = index === rating ? 0 : index;
    setRating(newRating);
    setJustClickedRating(index);

    try {
      const response = await submitRating(bookId, newRating);
      if (response.success && response.data) {
        updateSingleBook(response.data.book);
      } else {
        console.error('Failed to submit rating:', response.error);
      }
    } catch (error) {
      console.error('Error during rating submission:', error);
    }

    setTimeout(() => {
      setJustClickedRating(null);
    }, 1000);
  };

  return (
    <>
      <div className='rating-text-container'>
        <p className='rating-text'>{ratingText}</p>
      </div>
      <div className='book-rating-stars-container'>
        <div className='book-rating-stars'>
          {[1, 2, 3, 4, 5].map((index) => (
            <span
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
              className='book-rating-star-wrapper'
            >
              <StarIcon
                className='book-rating-star'
                selected={
                  justClickedRating !== null
                    ? index <= (rating || 0)
                    : hoverRating === rating
                    ? false
                    : index <= (hoverRating || rating || 0)
                }
              />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookRating;
