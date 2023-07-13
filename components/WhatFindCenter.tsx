'use client';
import { v4 as uuidv4 } from 'uuid';
import InCenter1 from '../public/homePage/inOurCenter/inCenter1.svg';
import InCenter2 from '../public/homePage/inOurCenter/inCenter2.svg';
import InCenter3 from '../public/homePage/inOurCenter/inCenter3.svg';
import InCenter4 from '../public/homePage/inOurCenter/inCenter4.svg';

interface Finding {
  img: JSX.Element;
  headingDiscription: string;
  textDiscription: string;
}

const Finding: Finding[] = [
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

const WhatFindCenter = () => {
  return (
    <div>
      <div className="flex justify-center gap-[30px] pt-[60px]">
        {Finding.slice(0, 2).map((item) => {
          return (
            <div key={uuidv4()} className="flex  gap-[30px]">
              {item.img}
              <div className="max-w-[253px] flex flex-col justify-center">
                <h4 className="text-twenty ">{item.headingDiscription}</h4>
                <p className="text-fourteen">{item.textDiscription}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-[30px] pt-[30px]">
        {Finding.slice(2).map((item) => {
          return (
            <div key={uuidv4()} className="flex flex-row-reverse gap-[30px] ">
              {item.img}
              <div className="max-w-[253px] flex flex-col justify-center">
                <h4 className="text-twenty ">{item.headingDiscription}</h4>
                <p className="text-fourteen">{item.textDiscription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatFindCenter;
