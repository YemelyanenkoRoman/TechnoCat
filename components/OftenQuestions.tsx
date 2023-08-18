'use client';
import { v4 as uuidv4 } from 'uuid';

import CirclePlus from '@/public/icons/circle-button-plus.svg';
import CircleMinus from '@/public/icons/circle-button-minus.svg';
import { useState } from 'react';

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
    <div className="flex flex-col gap-5">
      {questions.map((question, index) => {
        return (
          <div key={uuidv4()} className="">
            <div onClick={() => openText(index)} className="flex items-center">
              <div className="mr-[30px]">{isOpen[index] ? <CircleMinus /> : <CirclePlus />}</div>

              <h3 className={`${isOpen[index] ? 'text-[#4B76BC]' : ''} text-3xl`}>{question.title}</h3>
            </div>
            <div className="ml-[101px] mt-3 text-eighteen text-[#4B76BC]">
              <p className={isOpen[index] ? 'block' : 'hidden'}>{question.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OftenQuestions;
