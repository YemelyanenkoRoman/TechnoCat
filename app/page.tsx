import Button from '@/components/buttons/Button';
import Image from 'next/image';

import WhatFindCenter from '@/components/WhatFindCenter';
import DirectionCards from '@/components/directions/DirectionCards';
import Discount from '@/components/Discount';
import OftenQuestions from '@/components/OftenQuestions';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="font-gilroy font-normal  text-sexteen  pt-[107px]">
      <section className="h-[calc(100vh-107px)] text-text-lightblue bg-fill-blue flex">
        <div className="px-[120px] pt-[100px] pb-[160px] max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="max-w-[600px] max-h-[400px]">
            <h1 className="text-fifty font-normal">ТехноКот — место, где ваш ребенок реализует свои мечты и цели!</h1>
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
        <section className=" pt-[120px]">
          <h2 className="text-forty text-center">Что вы найдете в нашем центре?</h2>
          <WhatFindCenter />
        </section>

        <section className="m-auto max-w-[1320px] pt-[180px]">
          <h2 className="text-forty text-center pb-[50px]">Направления, которые пользуются спросом</h2>
          <div>
            <DirectionCards />
          </div>
        </section>

        <section className="m-auto max-w-[1140px] pt-[180px]">
          <h2 className="text-forty text-center pb-[50px]">Часто задаваемые вопросы</h2>
          <OftenQuestions />
        </section>

        <section className="pt-[180px] mb-[120px]">
          <Discount />
        </section>
      </div>
    </main>
  );
}
