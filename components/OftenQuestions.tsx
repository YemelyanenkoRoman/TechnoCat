'use client';
import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import Image from 'next/image';

const questions = [
  {
    title: 'Как вы отслеживаете прогресс ученика?',
    description: 'Еженедельный срез знаний для определения уровня знаний и проверки пройденного материала',
  },
  {
    title: 'А вдруг ваша программа не подойдет моему ребенку и у него не будет получаться?',
    description: 'Еженедельный срез знаний для определения уровня знаний и проверки пройденного материала',
  },
  {
    title: 'Как производится оплата?',
    description: 'Еженедельный срез знаний для определения уровня знаний и проверки пройденного материала',
  },
  {
    title: 'Не устают ли дети за время занятий?',
    description: 'Еженедельный срез знаний для определения уровня знаний и проверки пройденного материала',
  },
  {
    title: 'Если дети занимаются в центре уже давно, а мы еще ничего толком не знаем: ни букв, ни цифр, догоним ли?',
    description: 'Еженедельный срез знаний для определения уровня знаний и проверки пройденного материала',
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
