'use client';
import { useEffect, useState } from 'react';
import DiscountImg from '../public/discount/discount.svg';
import DiscountImg2 from '../public/discount/discount2.svg';
import DiscountImg3 from '../public/discount/discount3.svg';
import Carousel from './Carousel';
import FormDiscount from './FormDiscount';
import Form from './FormDiscount';
import Image from 'next/image';
import Loader from './loader/Loader';

export interface Discount {
  img: JSX.Element;
  title: string;
  textOne: string;
  textTwo?: string;
}

export const discounts: Discount[] = [
  {
    img: <DiscountImg />,
    title: 'Учитесь больше — платите меньше!',
    textOne:
      'Если ваш ребенок ходит на два направления в нашем образовательном центре, то один из них вы можете получить со скидкой 10%.',
    textTwo: 'Спешите записаться на интересующие вас направления и получите выгодное предложение.',
  },
  {
    img: <DiscountImg2 />,
    title: 'Семейная скидка в нашем образовательном центре!',
    textOne:
      'Если у вас двое детей, которые хотят посещать занятия в нашем образовательном центре, то мы дарим вам 10% скидку на одно из них.',
    textTwo: 'Не упустите шанс дать своим детям качественное образование по доступной цене.',
  },
  {
    img: <DiscountImg3 />,
    title: 'Делитесь знаниями с друзьями и экономьте!',
    textOne:
      'Если вы приведете друга в наш образовательный центр, то вы и он получите по 10% скидку на любой курс на целый месяц',
    textTwo: 'Не упусти возможность учиться вместе с теми, кто вам близок, и при этом сэкономить.',
  },
];

const Discount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMassage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (isSent) {
      setTimeout(() => {
        setIsSent(false);
        setErrorMessage(false);
      }, 3000);
    }
  }, [isSent]);

  function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    setIsSent(false);
    setErrorMessage(false);
  }

  const width = window.innerWidth;

  return (
    <div className="m-auto h-[462px] bg-[#D8E9FF]   lg:max-w-[1140px] lg:rounded-lg  md:w-full md:rounded-none">
      <div className=" flex justify-between   lg:px-[45px] lg:py-[45px]   md:px-[30px] md:py-[45px] ">
        <Carousel />

        <div className="flex justify-center max-w-[312px] h-[342px] relative">
          {errorMassage ? (
            <div className="z-10 absolute flex items-center justify-center w-[280px] h-[342px] bg-white bg-opacity-50 rounded-lg">
              <div
                onClick={() => setErrorMessage(false)}
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <h2 className="font-gilroy text-xl flex mb-4">Ошибка отправки формы</h2>
                <p className="font-gilroy text-xl flex mb-4 ">отправить ещё раз</p>
              </div>
            </div>
          ) : (
            <></>
          )}

          {isLoading ? (
            <div className="z-10 absolute flex items-center justify-center w-[280px] h-[342px] bg-white bg-opacity-50 rounded-lg">
              <Loader />
            </div>
          ) : (
            <></>
          )}
          {isSent ? (
            <div className=" flex items-center  flex-col">
              <div className="w-[280px] flex flex-col ">
                <h3 className="font-gilroy text-3xl flex content-center justify-center">Спасибо</h3>
                <p className="font-poppins text-fourteen mt-[15px]  text-center">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </div>
              <div className="flex mt-15px">
                <Image
                  src="/formImg/Magician.svg"
                  alt="Изображение девушка волшебник достаёт зайчика из шляпы."
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
            </div>
          ) : (
            <FormDiscount
              styleTop="top-[360px]"
              setIsLoading={setIsLoading}
              setIsSent={setIsSent}
              setErrorMessage={setErrorMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Discount;
