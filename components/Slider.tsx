'use client';

import { Images } from '@/app/about/page';
import { useState } from 'react';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === Images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex flex-col max-w-[1096px]">
      <div className="relative">
        <img src={Images[activeIndex].src} alt={`Image ${activeIndex}`} className="mt-4 max-w-full h-auto" />
        <button className="absolute top-[300px] left-0 transform -translate-y-full" onClick={handlePrevious}>
          Назад
        </button>
        <button className="absolute top-[300px] right-0 transform -translate-y-full" onClick={handleNext}>
          Вперед
        </button>
      </div>
      <div className="flex justify-center items-center w-full overflow-hidden">
        {Images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index}`}
            className={`h-16 w-16 mr-2 cursor-pointer flex-shrink-0 ${
              index === activeIndex ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
