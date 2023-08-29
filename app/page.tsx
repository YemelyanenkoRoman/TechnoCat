import Button from '@/components/buttons/Button';
import Image from 'next/image';

import WhatFindCenter from '@/components/WhatFindCenter';
import Discount from '@/components/Discount';
import OftenQuestions from '@/components/OftenQuestions';
import Link from 'next/link';
import { SliderCenterMode } from '@/components/sliders/SliderCenterMode';

export default function Home() {
  return (
    <main className="font-gilroy font-normal  text-sexteen  pt-[107px] overflow-x-hidden hidden">
      <section className="h-[calc(100vh-107px)] text-text-lightblue bg-fill-blue flex justify-between">
        <div className=" pt-[100px] pb-[160px]  mx-auto flex justify-between  items-center    xl:px-[120px] xl:max-w-[1440px]   md:px-[30px] md:max-w-[1024px]">
          <div className="max-w-[600px] max-h-[400px]">
            <h1 className=" font-normal   xl:text-fifty   md:text-forty">
              ТехноКот — место, где ваш ребенок реализует свои мечты и цели!
            </h1>
            <h2 className="text-sexteen font-poppins pt-10 pb-[60px]">
              Наши квалифицированные преподаватели помогут получить вашему ребенку качественное образование и подарят
              незабываемые впечатления от увлекательных занятий.
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

          <Image
            src="/homePage/main-page-h1.svg"
            alt="Учитель, преподаватель по программированию, робототехнике, рисованию, подготовке к школе обьясняет детям, ученикам информацию."
            width={465}
            height={465}
          />
        </div>
      </section>

      <div className="text-blue-dark">
        {/* <section className="m-auto  pt-[120px]   xl:max-w-[1140px]  md:max-w-[890px]"> */}
        <section className="m-auto  pt-[120px]   xl:px-[120px]  md:px-[30px]">
          <h2 className="text-forty text-center">Что вы найдете в нашем центре?</h2>
          <WhatFindCenter />
        </section>

        <section className="m-auto pt-[180px]">
          <h2 className="text-forty text-center pb-[50px]">Направления, которые пользуются спросом</h2>
          <div>
            <SliderCenterMode />
          </div>
        </section>

        <section className="m-auto pt-[180px]    xl:max-w-[1140px]  md:max-w-[890px]">
          <h2 className="text-forty text-center pb-[50px]">Часто задаваемые вопросы</h2>
          <OftenQuestions />
        </section>

        <section className="pt-[180px]  xl:mb-[120px] md:mb-0">
          <Discount />
        </section>
      </div>
    </main>
  );
}
