'use client';

import { useState, useEffect } from 'react';
import PhoneIcon from '../public/icons/phone-24-px.svg';
import CrossIcon from '../public/icons/cross-12-px.svg';
import FormCall from './FormCall';
import { useColor } from './ColorNavigation';
import { usePathname } from 'next/navigation';
import Loader from './loader/Loader';
import Image from 'next/image';
import Button from './buttons/Button';
import FormDiscount from './FormDiscount';

export default function ModalWithDirection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMassage, setErrorMessage] = useState('');

  const color = useColor();
  const pathname = usePathname();

  console.log(usePathname());

  function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
      setIsSent(false);
    }
  }

  return (
    <>
      <div
        className="flex cursor-pointer "
        style={{
          color: isHovered ? `${color.svgHover}` : '',
          cursor: 'pointer',
        }}
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button
          title={'Записаться'}
          type={onclick}
          width={'159'}
          height={'50'}
          backgroundColor={color.bgButton}
          bgHover={color.bgButtonActive}
          focus={color.bgButtonActive}
          textColor={color.buttonTextColor}
        />
      </div>

      {isOpen && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 "
        >
          <div
            className={`
            
            ${
              pathname === '/' || pathname === '/about' || pathname === '/contacts'
                ? 'bg-[#EBF4FF]'
                : `${color.bgColor}`
            }
            
            ${
              pathname === '/' || pathname === '/about' || pathname === '/contacts'
                ? 'text-[#36568B]'
                : `${color.textColor}`
            } rounded-lg w-[510px] h-[586px] relative z-10 shadow-lg`}
          >
            {errorMassage ? <h1>{errorMassage}</h1> : <></>}
            {isLoading ? (
              <div className="z-10 absolute flex items-center justify-center w-[510px] h-[586px] bg-white bg-opacity-50 ">
                <Loader />
              </div>
            ) : (
              <></>
            )}
            {isSent ? (
              <div className="m-[60px] flex items-center  flex-col">
                <div className="w-[346px] flex flex-col ">
                  <h3 className="font-gilroy text-3xl flex content-center justify-center">Спасибо</h3>
                  <p className="font-poppins text-fourteen mt-[15px]  text-center">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </div>
                <div className="flex mt-10 relative">
                  <Image
                    src="/formImg/Magician.svg"
                    alt="Изображение девушка волшебник достаёт зайчика из шляпы."
                    width={275}
                    height={275}
                  />
                </div>
              </div>
            ) : (
              <div className="m-[60px] flex items-center justify-center flex-col">
                <div className="w-[346px] flex flex-col ">
                  <h3 className="font-gilroy text-3xl flex justify-center">Запись на занятие</h3>
                  <p className="font-poppins text-fourteen mt-[15px]  text-center">
                    Заполните форму и наши специалисты свяжутся с вами для согласования времени и даты занятия в течение
                    рабочего дня.
                  </p>
                </div>
                <div className="flex mt-10 relative ">
                  <div className="flex h-[300px]">
                    <FormDiscount
                      styleTop="top-[320px]"
                      setIsLoading={setIsLoading}
                      setIsSent={setIsSent}
                      setErrorMessage={setErrorMessage}
                    />
                  </div>
                </div>
              </div>
            )}
            <div
              onClick={() => {
                setIsOpen(false);
                setIsSent(false);
              }}
              className="absolute top-5 right-5 cursor-pointer"
            >
              <CrossIcon className={`stroke-current ${color.hoverColor}`} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
