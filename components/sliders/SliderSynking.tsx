'use client';

import React, { Component, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  console.log('hello slider');
  return (
    <div>
      <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4>
      <Slider asNavFor={nav2} ref={(slider) => setNav1(slider || undefined)}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <h4>Second Slider</h4>
      <Slider
        asNavFor={nav1}
        ref={(slider) => setNav2(slider || undefined)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};
export default AsNavFor;
