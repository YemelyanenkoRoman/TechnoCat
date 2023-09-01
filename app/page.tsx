'use client';

import Button from '@/components/buttons/Button';
import Image from 'next/image';
import WhatFindCenter from '@/components/WhatFindCenter';
import Discount from '@/components/Discount';
import OftenQuestions from '@/components/OftenQuestions';
import Link from 'next/link';
import { SliderCenterMode } from '@/components/sliders/SliderCenterMode';

export default function Home() {
  const width = window.innerWidth;
  return (
    <main className="font-gilroy font-normal  text-sexteen  md:pt-[107px] xs:pt-[97px] overflow-x-hidden">
      {width >= 768 ? (
        <section className="md:h-[calc(100vh-107px)] text-text-lightblue bg-fill-blue flex justify-between">
          <div className=" pt-[100px] pb-[160px]  mx-auto flex justify-between  items-center    xl:px-[120px] xl:max-w-[1440px]   md:px-[30px] md:max-w-[1024px] ">
            <div className="md:max-w-[600px] max-h-[400px]">
              <h1 className=" font-normal   xl:text-fifty   md:text-forty">
                ТехноКот — место, где ваш ребенок реализует свои мечты и цели!
              </h1>
              <h2 className="text-sexteen font-poppins pt-10 pb-[60px]">
                Наши квалифицированные преподаватели помогут получить вашему ребенку качественное образование и подарят
                незабываемые впечатления от увлекательных занятий!
              </h2>
              <Link href={'/about'}>
                <Button
                  width="185px"
                  height="50px"
                  title="Узнать больше"
                  type="button"
                  backgroundColor="bg-text-lightblue"
                  bgHover={'hover:bg-d-blue'}
                  focus={'hover:text-text-lightblue'}
                  textColor="text-fill-blue"
                />
              </Link>
            </div>

            <div className="w-[465px] h-[465px]">
              <Image
                src="/homePage/main-page-h1.svg"
                alt="Учитель, преподаватель по программированию, робототехнике, рисованию, подготовке к школе обьясняет детям, ученикам информацию."
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      ) : (
        <section className="h-[calc(100vh-97px)] text-text-lightblue bg-fill-blue flex ">
          <div className=" s:mb-[30px] md:mb-0  mx-[16px] flex justify-around flex-col ">
            <div>
              <h1 className=" font-normal text-twentyfive">
                ТехноКот — место, где ваш ребенок реализует свои мечты и цели!
              </h1>

              {width >= 376 && (
                <h2 className="text-sexteen font-poppins mt-[20px]">
                  Наши квалифицированные преподаватели помогут получить вашему ребенку качественное образование и
                  подарят незабываемые впечатления от увлекательных занятий.
                </h2>
              )}
            </div>

            <div className="">
              <Image
                src="/homePage/main-page-h1.svg"
                alt="Учитель, преподаватель по программированию, робототехнике, рисованию, подготовке к школе обьясняет детям, ученикам информацию."
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div>
              <Link href={'/about'} className="">
                {width >= 768 ? (
                  <Button
                    width="185px"
                    height="50px"
                    title="Узнать больше"
                    type="button"
                    backgroundColor="bg-text-lightblue"
                    bgHover={'hover:bg-d-blue'}
                    focus={'hover:text-text-lightblue'}
                    textColor="text-fill-blue"
                  />
                ) : (
                  <Button
                    width="100%"
                    height="50px"
                    title="Узнать больше"
                    type="button"
                    backgroundColor="bg-text-lightblue"
                    bgHover={'hover:bg-d-blue'}
                    focus={'hover:text-text-lightblue'}
                    textColor="text-fill-blue"
                  />
                )}
              </Link>
            </div>
          </div>
        </section>
      )}

      <div className="text-blue-dark">
        <section className="m-auto  xs:pt-[60px] xs:px-4  xl:px-[120px] md:pt-[120px] md:px-[30px]">
          <h2 className="md:text-forty xs:text-twentyfive text-center">Что вы найдете в нашем центре?</h2>
          <WhatFindCenter />
        </section>

        <section className="m-auto pt-[180px] hidden">
          <h2 className="text-forty text-center pb-[50px]">Направления, которые пользуются спросом</h2>
          <div>
            <SliderCenterMode />
          </div>
        </section>

        <section className="m-auto pt-[180px]    xl:max-w-[1140px]  md:max-w-[890px] hidden">
          <h2 className="text-forty text-center pb-[50px]">Часто задаваемые вопросы</h2>
          <OftenQuestions />
        </section>

        <section className="pt-[180px]  xl:mb-[120px] md:mb-0 hidden">
          <Discount />
        </section>
      </div>
    </main>
  );
}
