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
import { useWindowWidth } from '@/utils/hooks/useWindowWidth';

type ModalWithDirectionProps = {
  nameDirection?: string;
};

export default function ModalWithDirection(props: ModalWithDirectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMassage, setErrorMessage] = useState(false);

  const color = useColor();
  const pathname = usePathname();
  const width = useWindowWidth();
  console.log(usePathname());

  useEffect(() => {
    if (isSent) {
      setTimeout(() => {
        setIsOpen(false);
        setIsSent(false);
        setErrorMessage(false);
      }, 3000);
    }
  }, [isSent]);

  function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
      setIsSent(false);
      setErrorMessage(false);
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
        {width >= 768 ? (
          <Button
            title={'Записаться'}
            type={onclick}
            width={'159px'}
            height={'50px'}
            backgroundColor={color.bgButton}
            bgHover={color.bgButtonActive}
            focus={color.bgButtonActive}
            textColor={color.buttonTextColor}
          />
        ) : (
          <Button
            title={'Записаться'}
            type={onclick}
            width={'90vw'}
            height={'50px'}
            backgroundColor={color.bgButton}
            bgHover={color.bgButtonActive}
            focus={color.bgButtonActive}
            textColor={color.buttonTextColor}
          />
        )}
      </div>

      {isOpen && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex md:items-center justify-center w-full h-full md:bg-black md:bg-opacity-50 xs:items-end xs:bg-none xs:bg-opacity-0"
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
            } md:rounded-lg md:w-[510px] md:h-[586px] xs:w-screen xs:h-[calc(100vh-96px)] xs:rounded-none relative z-10 shadow-lg`}
          >
            {errorMassage ? (
              <div className="z-10 absolute flex items-center justify-center w-[510px] h-[586px] bg-white bg-opacity-50 rounded-lg">
                <div
                  onClick={() => setErrorMessage(false)}
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <h2 className="font-gilroy text-3xl flex mb-4">Ошибка отправки формы</h2>
                  <p className="font-gilroy text-3xl flex mb-4 ">отправить ещё раз</p>
                </div>
              </div>
            ) : (
              <></>
            )}

            {isLoading ? (
              <div className="z-10 absolute flex items-center justify-center md:w-[510px] md:h-[586px] bg-white bg-opacity-50 md:rounded-lg xs:w-screen xs:h-screen xs:rounded-none">
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
                      nameDirection={props.nameDirection}
                    />
                  </div>
                </div>
              </div>
            )}
            {width >= 768 ? (
              <div
                onClick={() => {
                  setIsOpen(false);
                  setIsSent(false);
                  setErrorMessage(false);
                }}
                className="absolute top-5 right-5 cursor-pointer z-50"
              >
                <CrossIcon className={`stroke-current ${color.hoverColor}`} />
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
    </>
  );
}
