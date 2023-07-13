import Button from '@/components/buttons/Button';
import H1Svg from '../public/homePage/main-page-h1.svg';

import WhatFindCenter from '@/components/WhatFindCenter';
import DirectionCards from '@/components/DirectionCards';
import Discount from '@/components/Discount';
import OftenQuestions from '@/components/OftenQuestions';

export default function Home() {
  return (
    <main className="font-gilroy font-normal text-local-gray-t text-sexteen  pt-[107px]">
      <section className="h-[calc(100vh-107px)] bg-local-gray-b">
        <div className="px-[120px] pt-[100px] pb-[160px] max-w-[1440px] mx-auto flex justify-between">
          <div className="max-w-[600px] max-h-[400px]">
            <h1 className="text-fifty font-normal">ТехноКот — место, где ваш ребенок реализует свои мечты и цели!</h1>
            <h2 className="text-sexteen font-poppins pt-10 pb-[60px]">
              Наши квалифицированные преподаватели помогут получить вашему ребенку качественное образование и подарят
              незабываемые впечатления от увлекательных занятий.
            </h2>
            <Button width="185px" height="50px" title="Узнать больше" type="button" />
          </div>
          <figure>
            <H1Svg />
          </figure>
        </div>
      </section>

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
    </main>
  );
}
