'use client';

import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
interface Finding {
  img: JSX.Element;
  headingDiscription: string;
  textDiscription: string;
}

const Finding: Finding[] = [
  {
    img: (
      <Image
        src="/homePage/inOurCenter/inCenter1.svg"
        alt="Опытный педагог, учитель, преподаватель"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    ),
    headingDiscription: 'Опытных педагогов',
    textDiscription: 'Они помогут вашим детям раскрыть свой потенциал и талант',
  },
  {
    img: (
      <Image
        src="/homePage/inOurCenter/inCenter2.svg"
        alt="Индиыидуальный подход, волшебство"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    ),
    headingDiscription: 'Индивидуальный подход',
    textDiscription:
      'Поддержка, внимание и индивидуальный подход к каждому ребёнку - основополагающие ценности для наших педагогов.',
  },
  {
    img: (
      <Image
        src="/homePage/inOurCenter/inCenter3.svg"
        alt="Комфорт и знания. Человек работает в комфортном месте и получает знания."
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    ),
    headingDiscription: 'Комфорт и знания',
    textDiscription: 'Наш центр оснащен современным оборудование и качественными учебными материалами для занятий.',
  },
  {
    img: (
      <Image
        src="/homePage/inOurCenter/inCenter4.svg"
        alt="Участе в соревнованиях. Пьедистал, кубок и медали."
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    ),
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
              <div>{item.img}</div>
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
              <div>{item.img}</div>
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
