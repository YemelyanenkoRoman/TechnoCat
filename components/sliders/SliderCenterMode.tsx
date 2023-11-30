'use client';

import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DirectionCard, { DirectionCardData } from '@/components/directions/DirectionCard';
import { useWindowWidth } from '@/utils/hooks/useWindowWidth';

export const SliderCenterMode = () => {
  const width = useWindowWidth();

  const settings =
    width >= 1440
      ? {
          className: 'center',
          centerMode: true,
          infinite: true,
          centerPadding: '60px',
          slidesToShow: 4,
        }
      : width >= 1024
      ? {
          className: 'center',
          infinite: true,
          centerPadding: '40px',
          slidesToShow: 3,
          swipeToSlide: true,
        }
      : width >= 768
      ? {
          className: 'center',
          centerMode: true,
          infinite: true,
          centerPadding: '60px',
          slidesToShow: 2,
          swipeToSlide: true,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      : width >= 320
      ? {
          className: 'center',
          centerMode: true,
          infinite: true,
          centerPadding: '25px',
          slidesToShow: 1,
          swipeToSlide: true,
        }
      : {
          className: 'center',
          centerMode: true,
          infinite: true,
          centerPadding: '120px',
          slidesToShow: 3,
          swipeToSlide: true,
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
