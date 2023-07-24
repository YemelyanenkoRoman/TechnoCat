'use client';

import { Images } from '@/app/about/page';
import { useState } from 'react';
import ArrowRiht from '@/public/icons/arrow-right.svg';
import ArrowLeft from '@/public/icons/arrow-left.svg';

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

        <button className=" transform -translate-y-full absolute top-1/2 left-8" onClick={handlePrevious}>
          <ArrowLeft />
        </button>
        <button className=" transform -translate-y-full absolute top-1/2 right-8" onClick={handleNext}>
          <ArrowRiht />
        </button>
      </div>
      <div className="flex justify-center items-center w-full overflow-hidden mt-6">
        {Images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index}`}
            className={`h-[180px] w-[160px] mr-6 cursor-pointer flex-shrink-0 ${
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
