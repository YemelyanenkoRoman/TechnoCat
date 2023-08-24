'use client';

import React, { Component, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
interface Images {
  src: any;
  alt: string;
}

export const Images: Images[] = [
  { src: '/aboutPage/Slider1.png', alt: 'My Image' },
  { src: '/aboutPage/Slider2.png', alt: 'My Image' },
  { src: '/aboutPage/Slider3.png', alt: 'My Image' },
  { src: '/aboutPage/Slider4.png', alt: 'My Image' },
  { src: '/aboutPage/Slider5.png', alt: 'My Image' },
  { src: '/aboutPage/Slider6.png', alt: 'My Image' },
  { src: '/aboutPage/Slider7.png', alt: 'My Image' },
];

const AsNavFor = () => {
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);

  const settings1 = {
    adaptiveHeight: true,
    arrows: true,
  };

  const settings = {
    adaptiveHeight: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '120px',
    slidesToShow: 5,
    autoplaySpeed: 3000,
    speed: 2500,
  };

  return (
    <div className="w-[810px] mx-auto">
      <div className="w-[810px]">
        <Slider {...settings1} asNavFor={nav2} ref={(slider) => setNav1(slider || undefined)}>
          {Images.map((item) => {
            return (
              <div>
                <Image width={810} height={400} src={item.src} alt={item.alt} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="w-[810px]">
        <Slider
          {...settings}
          asNavFor={nav1}
          ref={(slider) => setNav2(slider || undefined)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {Images.map((item) => {
            return (
              <div>
                <Image width={180} height={160} src={item.src} alt={item.alt} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default AsNavFor;
