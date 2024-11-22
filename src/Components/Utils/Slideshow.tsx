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
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartTime = 0;
    const swipeThreshold = 20;
    const timeThreshold = 100;

    const handleTouchStart = (event: TouchEvent) => {
      touchStartX = event.touches[0].clientX;
      touchEndX = touchStartX;
      touchStartTime = Date.now();
    };

    const handleTouchMove = (event: TouchEvent) => {
      touchEndX = event.touches[0].clientX;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const touchDuration = Date.now() - touchStartTime;
      const touchDistance = Math.abs(touchStartX - touchEndX);

      if (touchDuration < timeThreshold && touchDistance < swipeThreshold) {
        return;
      }

      if (!canClick) return;

      if (event.cancelable) {
        event.preventDefault();
      }

      if (touchStartX - touchEndX > swipeThreshold) {
        handleNext(event as unknown as React.MouseEvent);
      } else if (touchEndX - touchStartX > swipeThreshold) {
        handlePrev(event as unknown as React.MouseEvent);
      }
    };

    const slideshowElement = slideshowRef.current;

    if (slideshowElement) {
      slideshowElement.addEventListener('touchstart', handleTouchStart);
      slideshowElement.addEventListener('touchmove', handleTouchMove);
      slideshowElement.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (slideshowElement) {
        slideshowElement.removeEventListener('touchstart', handleTouchStart);
        slideshowElement.removeEventListener('touchmove', handleTouchMove);
        slideshowElement.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [imgIndex, canClick]);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prevProgress) =>
        isPaused || prevProgress >= 100 ? prevProgress : prevProgress + 1
      );
    }, 40);

    if (progress === 100 && !isPaused) {
      autoProgress();
    }

    return () => clearInterval(progressTimer);
  }, [progress, isPaused, autoProgress]);

  const renderToggleDots = () => {
    const totalImages = images.length;
    const maxDots = 8;
    const [currentPlacement, setCurrentPlacement] = useState(1);
    const [previousIndex, setPreviousIndex] = useState(0);

    useEffect(() => {
      if (totalImages <= maxDots) {
        setCurrentPlacement(imgIndex + 1);
        setPreviousIndex(imgIndex);
        return;
      }

      const isMovingForward = imgIndex > previousIndex;
      const isAdjacentMove = Math.abs(imgIndex - previousIndex) === 1;

      if (imgIndex === 0) {
        setCurrentPlacement(1);
      } else if (imgIndex === totalImages - 1) {
        setCurrentPlacement(maxDots);
      } else if (isMovingForward) {
        if (imgIndex >= totalImages - (maxDots - 1)) {
          setCurrentPlacement(maxDots - (totalImages - 1 - imgIndex));
        } else if (isAdjacentMove) {
          setCurrentPlacement(Math.min(currentPlacement + 1, maxDots - 1));
        }
      } else {
        if (imgIndex <= maxDots - 2) {
          setCurrentPlacement(imgIndex + 1);
        } else if (isAdjacentMove) {
          setCurrentPlacement(Math.max(currentPlacement - 1, 2));
        }
      }

      setPreviousIndex(imgIndex);
    }, [imgIndex, previousIndex, totalImages, currentPlacement, maxDots]);

    const start =
      totalImages <= maxDots
        ? 0
        : Math.max(
            0,
            Math.min(imgIndex - (currentPlacement - 1), totalImages - maxDots)
          );
    const end = start + Math.min(maxDots, totalImages);

    return Array.from({ length: end - start }, (_, i) => {
      const dotIndex = start + i;

      return (
        <ToggleDot
          key={dotIndex}
          onMouseDown={(e) => handleSetImgIndex(e, dotIndex)}
          className={`${
            imgIndex === dotIndex
              ? 'slideshow-toggle-dot-active'
              : 'slideshow-toggle-dot-inactive'
          }`}
        />
      );
    });
  };

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
        <div className='slideshow-toggle-dots'>{renderToggleDots()}</div>
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
