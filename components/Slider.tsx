'use client';

import { useSwipeable } from 'react-swipeable';
import { Images } from '@/app/about/page';
import { useEffect, useState } from 'react';
import ArrowRiht from '@/public/icons/arrow-right.svg';
import ArrowLeft from '@/public/icons/arrow-left.svg';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleRange, setVisibleRange] = useState([0, 3]);

  const [thumbnails, setThumbnails] = useState(Images.map((image, index) => ({ id: index, src: image.src })));

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === Images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
  });

  useEffect(() => {
    if (activeIndex < visibleRange[0] || activeIndex > visibleRange[1]) {
      setVisibleRange([activeIndex, activeIndex + 3]);
    }
  }, [activeIndex]);

  return (
    <div className="flex flex-col max-w-[810px] h-auto">
      <div className="relative">
        <div {...handlers}>
          <img
            src={Images[activeIndex].src}
            alt={`Image ${activeIndex}`}
            className="mt-4 object-cover w-[810px] h-[400px]"
          />
        </div>
        <button className=" transform -translate-y-full absolute top-1/2 left-8" onClick={handlePrevious}>
          <ArrowLeft />
        </button>
        <button className=" transform -translate-y-full absolute top-1/2 right-8" onClick={handleNext}>
          <ArrowRiht />
        </button>
      </div>

      <div className="flex justify-center items-center w-full overflow-hidden mt-6">
        {thumbnails.slice(visibleRange[0], visibleRange[1] + 1).map((thumbnail) => (
          <img
            key={thumbnail.id}
            src={thumbnail.src}
            alt={`Image ${thumbnail.id}`}
            className={`h-[80px] w-[162px] mr-6 cursor-pointer flex-shrink-0 ${
              thumbnail.id === activeIndex ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => handleThumbnailClick(thumbnail.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
