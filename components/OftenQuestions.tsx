'use client';
import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import Image from 'next/image';

const questions = [
  {
    title: 'Как вы отслеживаете прогресс ученика?',
    description:
      'В образовательном центре мы используем регулярные оценки знаний и навыков, индивидуальные консультации с учениками и их родителями, а также создаем мотивирующую обстановку с дополнительными занятиями и проектами. Все эти методы помогают нам следить за прогрессом учеников и адаптировать программу под их потребности, чтобы помочь им достичь своих целей.',
  },
  {
    title: 'А вдруг ваша программа не подойдет моему ребенку и у него не будет получаться?',
    description:
      'Мы проводим индивидуальные консультации, разрабатываем индивидуальные планы поддержки и предлагаем дополнительные занятия или ресурсы для учеников, испытывающих трудности. Мы также сотрудничаем с педагогами и специалистами, чтобы предложить дополнительные стратегии и методики. Наша цель - обеспечить каждому ученику поддержку и индивидуальный подход к обучению.',
  },
  {
    title: 'Как производится оплата?',
    description: '',
  },
  {
    title: 'Не устают ли дети за время занятий?',
    description:
      'Мы разнообразяем форматы занятий, используем интерактивные методы обучения и предлагаем перерывы, чтобы снизить усталость учеников. Мы также создаем комфортные условия в классах и поддерживаем дружественную атмосферу. Если у ребенка возникают проблемы с усталостью, мы готовы обсудить это с родителями и найти индивидуальные решения.',
  },
];

function OftenQuestions() {
  const [isOpen, setIsOpen] = useState<boolean[]>(Array(questions.length).fill(false)); // массив изначально заполняется false'ами

  const openText = (index: number) => {
    const newIsOpen = [...isOpen]; // создаем новый массив, чтобы не изменять существующий
    newIsOpen[index] = !newIsOpen[index]; // инвертируем значение для выбранного индекса
    setIsOpen(newIsOpen);
  };

  return (
    <div className="flex flex-col md:gap-5 xs:gap-4">
      {questions.map((question, index) => {
        return (
          <div key={uuidv4()} className="">
            <div onClick={() => openText(index)} className="flex items-center">
              <div className="md:mr-[30px] xs:mr-[20px]">
                {isOpen[index] ? (
                  <div className="md:w-[70px] md:h-[70px] xs:w-[50px] xs:h-[50px]">
                    <Image
                      src="/icons/circle-button-minus.svg"
                      alt="Кнопка скрыть информацию"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                  </div>
                ) : (
                  <div className="md:w-[70px] md:h-[70px] xs:w-[50px] xs:h-[50px]">
                    <Image
                      src="/icons/circle-button-plus.svg"
                      alt="Кнопка раскрыть информацию"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>

              <h3
                className={`${
                  isOpen[index] ? 'text-[#4B76BC]' : ''
                } md:text-3xl xs:text-twenty xs:max-w-[270px] md:max-w-[908px]`}
              >
                {question.title}
              </h3>
            </div>
            <div className="md:ml-[100px] xs:ml-[70px] mt-3 md:text-eighteen xs:text-sexteen text-[#4B76BC] ">
              <p className={isOpen[index] ? 'block' : 'hidden'}>{question.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OftenQuestions;

<Image
  src="/homePage/inOurCenter/inCenter3.svg"
  alt="Комфорт и знания. Человек работает в комфортном месте и получает знания."
  width={0}
  height={0}
  sizes="100vw"
  className="w-full h-auto"
/>;
