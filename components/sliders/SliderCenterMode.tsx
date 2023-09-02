'use client';

import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DirectionCard, { DirectionCardData } from '@/components/directions/DirectionCard';

export const SliderCenterMode = () => {
  const width = window.innerWidth;

  const settings =
    width >= 1440
      ? {
          className: 'center',
          centerMode: true,
          infinite: true,
          centerPadding: '220px',
          slidesToShow: 3,
          autoplaySpeed: 3000,
          speed: 2500,
          autoplay: true,
        }
      : width >= 1024
      ? {
          className: 'center',
          centerMode: true,
          infinite: true,
          centerPadding: '150px',
          slidesToShow: 2,
          autoplaySpeed: 3000,
          speed: 2500,
        }
      : width >= 320
      ? {
          className: 'center',
          centerMode: true,
          infinite: true,
          centerPadding: '25px',
          slidesToShow: 1,
          autoplaySpeed: 3000,
          speed: 2500,
        }
      : {
          className: 'center',
          centerMode: true,
          infinite: true,
          centerPadding: '120px',
          slidesToShow: 3,
          autoplaySpeed: 3000,
          speed: 2500,
        };

  return (
    <div>
      <Slider {...settings}>
        {DirectionCardData.map((item) => {
          return (
            <DirectionCard
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              age={item.age}
              duration={item.duration}
              cost={item.cost}
              quantity={item.quantity}
              bgColorImg={item.bgColorImg}
              bgColorCard={item.bgColorCard}
              colorText={item.colorText}
              buttonBorder={item.buttonBorder}
              buttonBorderActive={item.buttonBorderActive}
              buttonBorderHover={item.buttonBorderHover}
            />
          );
        })}
      </Slider>
    </div>
  );
};
