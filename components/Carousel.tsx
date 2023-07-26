'use client';

import { discounts } from './Discount';
import { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % discounts.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % discounts.length);
  };

  const handleSelectSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="p-[35px] flex justify-between relative" onClick={handleNextSlide} style={{ cursor: 'pointer' }}>
      {discounts.map((discount, index) => (
        <div
          key={index}
          style={{
            transition: 'opacity 1s ease-in-out',
            opacity: currentSlide === index ? 1 : 0,
            zIndex: currentSlide === index ? 1 : 0,
          }}
          className="absolute inset-0 flex"
        >
          <div className="static flex justify-between">
            <figure className="text-thirtyfour">{discount.img}</figure>
            <div className=" w-[343px] ml-[30px] flex flex-col justify-center items-center">
              <h3 className="text-thirtyfour">{discount.title}</h3>
              <p className="font-poppins text-sexteen pt-[25px]">{discount.textOne}</p>
              <p className="font-poppins text-sexteen pt-[15px]">{discount.textTwo}</p>
            </div>
          </div>
        </div>
      ))}
      <div
        className="flex justify-center space-x-2 absolute bottom-0 left-0 right-0 mb-4 z-50"
        style={{
          right: '-295px',
          top: '355px',
        }}
      >
        {discounts.map((_, index) => (
          <button
            key={index}
            onClick={(event) => {
              event.stopPropagation();
              handleSelectSlide(index);
            }}
            style={{
              width: 8,
              height: 8,
              backgroundColor: currentSlide === index ? '#718096' : '#cbd5e0',
              borderRadius: '50%',
            }}
          />
        ))}
      </div>
    </div>
  );
}
