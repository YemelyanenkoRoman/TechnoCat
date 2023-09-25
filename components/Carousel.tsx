'use client';

import { useWindowWidth } from '@/utils/hooks/useWindowWidth';
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

  const width = useWindowWidth();
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
          {width >= 768 ? (
            <div className=" flex justify-between">
              <div className={`relative bg-[#E2F9FE] w-[336px] h-[308px] rounded-lg`}>
                <div className="flex justify-center">
                  <div className="absolute bottom-0">{discount.img}</div>
                </div>
              </div>

              <div className="flex flex-col justify-start items-center    md:w-[306px] md:ml-[25px]   xl:w-[343px] xl:ml-[30px]">
                <h3 className="xl:text-thirtyfour md:text-[28px]">{discount.title}</h3>
                <p className="font-poppins text-sexteen pt-[25px]">{discount.textOne}</p>
                <p className="font-poppins text-sexteen pt-[15px]">{discount.textTwo}</p>
              </div>
            </div>
          ) : (
            <div className=" flex flex-col items-center ">
              <div className="flex flex-col items-center  w-screen h-[280px] pt-[30px] pb-[30px] px-[16px]">
                <h3 className="text-twentyfive">{discount.title}</h3>
                <p className="font-poppins text-sexteen pt-[25px] text-fill-medium">{discount.textOne}</p>
                <p className="font-poppins text-sexteen pt-[15px] text-fill-medium">{discount.textTwo}</p>
              </div>

              <div className={` bg-[#E2F9FE] w-screen mt-[30px] `}>
                <div className="flex justify-center items-center h-[290px] ">
                  <div className="w-[280px] h-[280px]">
                    <div>{discount.img}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      {width >= 768 ? (
        <div
          className="flex justify-center space-x-5 absolute bottom-0 left-0 right-0 mb-4 z-50"
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
                backgroundColor: currentSlide === index ? '#7ED6ED' : '#36568B',
                borderRadius: '50%',
              }}
            />
          ))}
        </div>
      ) : (
        <div
          className="flex justify-center space-x-5 absolute bottom-0 left-0 right-0 mb-4  w-screen"
          style={{
            top: '618px',
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
                backgroundColor: currentSlide === index ? '#7ED6ED' : '#36568B',
                borderRadius: '50%',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
