import Button from '@/components/buttons/Button';
import H1Svg from '../public/homePage/main-page-h1.svg';
import InCenter1 from '../public/homePage/inOurCenter/inCenter1.svg';
import InCenter2 from '../public/homePage/inOurCenter/inCenter2.svg';
import InCenter3 from '../public/homePage/inOurCenter/inCenter3.svg';
import InCenter4 from '../public/homePage/inOurCenter/inCenter4.svg';
import WhatFindCenter from '@/components/WhatFindCenter';
import DirectionCards from '@/components/DirectionCards';
import Discount from '@/components/Discount';

const Finding = [
  {
    img: <InCenter1 />,
    headingDiscription: 'Опытных педагогов',
    textDiscription: 'Они помогут вашим детям раскрыть свой потенциал и талант',
  },
  {
    img: <InCenter2 />,
    headingDiscription: 'Индивидуальный подходв',
    textDiscription:
      'Поддержка, внимание и индивидуальный подход к каждому ребёнку - основополагающие ценности для наших педагогов.',
  },
  {
    img: <InCenter3 />,
    headingDiscription: 'Комфорт и знания',
    textDiscription: 'Наш центр оснащен современным оборудование и качественными учебными материалами для занятий.',
  },
  {
    img: <InCenter4 />,
    headingDiscription: 'Участие в соревнованиях',
    textDiscription:
      'Участие в различных соревнованиях, олимпиадах и конкурсах, а также экскурсиях расширят знания и кругозор ребёнка.',
  },
];

export default function Home() {
  return (
    <main className="font-gilroy font-normal text-local-gray-t text-sexteen  pt-[138px]">
      <section className="h-[calc(100vh-138px)] bg-local-gray-b">
        <div className="px-[120px] pt-[100px] pb-[160px] max-w-[1440px] mx-auto flex justify-between">
          <div className="max-w-[600px] max-h-[400px]">
            <h1 className="text-fifty font-normal">ТехноКот — место, где ваш ребенок реализует свои мечты и цели!</h1>
            <h2 className="text-sexteen font-poppins pt-10 pb-[60px]">
              Наши квалифицированные преподаватели помогут получить вашему ребенку качественное образование и подарят
              незабываемые впечатления от увлекательных занятий.
            </h2>
            <Button width="185px" height="50px" title="Узнать больше" />
          </div>
          <figure>
            <H1Svg />
          </figure>
        </div>
      </section>

      <section className=" pt-[120px]">
        <h3 className="text-thirtyfour text-center">Что вы найдете в нашем центре?</h3>
        <WhatFindCenter FindingInCenter={Finding} />
      </section>

      <section className="m-auto max-w-[1320px] pt-[180px]">
        <h3 className="text-thirtyfour text-center pb-[50px]">Направления, которые пользуются спросом</h3>
        <div>
          <DirectionCards />
        </div>
      </section>

      <section className="pt-[180px]">
        <Discount />
      </section>
    </main>
  );
}
