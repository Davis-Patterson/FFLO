import { useState, useEffect, useContext, useRef, useCallback } from 'react';
import { AppContext, Book } from 'Contexts/AppContext'; // Import Book type
import { ArrowBigLeft, ArrowBigRight, PauseIcon, PlayIcon } from 'lucide-react';
import CircularProgress from '@mui/material/CircularProgress';
import 'Styles/Utils/Slideshow.css';
import ToggleDot from 'Svgs/ToggleDot';

interface SlideshowProps {
  data: Book;
}

const Slideshow: React.FC<SlideshowProps> = ({ data }) => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { fullscreenOpen, isPaused, setIsPaused, setWasPaused } = context;

  const [imgIndex, setImgIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [canClick, setCanClick] = useState(true);

  const slideshowRef = useRef<HTMLDivElement>(null);

  const { title, author, description, images } = data;

  const autoProgress = useCallback(() => {
    if (!isPaused) {
      setProgress(0);
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [isPaused, images.length]);

  const handlePause = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setIsPaused(!isPaused);
  };

  const handlePrev = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    if (!canClick) return;
    setCanClick(false);
    setProgress(0);
    setImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setCanClick(true), 1000);
  };

  const handleNext = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    if (!canClick) return;
    setCanClick(false);
    setProgress(0);
    setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setCanClick(true), 1000);
  };

  const handleFullScreenOpen = (event: React.MouseEvent, src: string) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setWasPaused(isPaused);
    setIsPaused(true);
    fullscreenOpen(src, title, title, author, description);
  };

  const handleSetImgIndex = (event: React.MouseEvent, index: number) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    if (index === imgIndex) {
      return;
    } else {
      setProgress(0);
      setImgIndex(index);
    }
  };

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prevProgress) =>
        isPaused || prevProgress >= 100 ? prevProgress : prevProgress + 1
      );
    }, 100);

    if (progress === 100 && !isPaused) {
      autoProgress();
    }

    return () => clearInterval(progressTimer);
  }, [progress, isPaused, autoProgress]);

  if (!images || images.length === 0) {
    return (
      <div className='slideshow-pics-container'>
        <CircularProgress size={40} color='inherit' />
      </div>
    );
  }

  return (
    <div className='slideshow-pics-container' ref={slideshowRef}>
      <div
        className='slideshow-pics-wrapper'
        style={{ transform: `translateX(${-100 * imgIndex}%)` }}
      >
        {images.map((item, index) => (
          <div
            key={`${index} - ${data.available ? 'available' : 'unavailable'}`}
            className={`slideshow-pic-wrapper ${
              !data.available ? 'inactive' : ''
            } blur-load`}
            style={{ backgroundImage: `url(${item.image_small || ''})` }}
            onMouseDown={(event) =>
              handleFullScreenOpen(event, item.image_url || '')
            }
          >
            <img
              src={item.image_url || ''}
              alt={title || 'Untitled'}
              className={`slideshow-pic ${!data.available ? 'inactive' : ''}`}
              loading='lazy'
              onLoad={(e) =>
                e.currentTarget.parentElement?.classList.add('loaded')
              }
            />
          </div>
        ))}
      </div>
      <div className='slideshow-overlays'>
        <div className='toggle-pics-container-left'>
          <div
            className='slideshow-arrow-wrapper'
            onMouseDown={(e) => handlePrev(e)}
          >
            <ArrowBigLeft className='slideshow-arrow' />
          </div>
        </div>
        <div
          className='pause-icon-container'
          onMouseDown={(e) => handlePause(e)}
        >
          {isPaused ? (
            <PlayIcon className='play-icon' />
          ) : (
            <PauseIcon className='pause-icon' />
          )}
        </div>
        <div className='toggle-pics-container-right'>
          <div
            className='slideshow-arrow-wrapper'
            onMouseDown={(e) => handleNext(e)}
          >
            <ArrowBigRight className='slideshow-arrow' />
          </div>
        </div>
        <div className='slideshow-pic-toggles'>
          {images.map((_, index) => (
            <ToggleDot
              key={index}
              onMouseDown={(e) => handleSetImgIndex(e, index)}
              className={`${
                imgIndex === index
                  ? 'slideshow-toggle-dot-active'
                  : 'slideshow-toggle-dot-inactive'
              }`}
            />
          ))}
        </div>
        <div className='progress-bar'>
          <div
            className='progress-bar-fill'
            style={{
              width: `${progress}%`,
              transition: progress === 0 ? 'none' : 'width 0.1s linear',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
