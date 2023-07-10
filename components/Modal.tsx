'use client';

import { useState } from 'react';
import PhoneIcon from '../public/icons/phone-24-px.svg';
import CrossIcon from '../public/icons/cross-12-px.svg';
import FormCall from './FormCall';
export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="flex cursor-pointer "
        style={{
          color: isHovered ? '#4a5568' : '',
          cursor: 'pointer',
        }}
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <PhoneIcon
          className="mr-2"
          style={{
            color: isHovered ? '#4a5568' : 'white',
          }}
        />
        <p>Заказать звонок</p>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="rounded-lg w-[510px] h-[438px] relative z-10 bg-local-gray-b-2 shadow-lg">
            <div className="w-[390px] h-[313px] m-[60px] flex items-center justify-center flex-col">
              <h3 className="font-gilroy text-3xl flex">Заказ обратного звонка</h3>
              <p className="font-poppins text-fourteen mt-[15px]">
                Заполните форму и наши специалисты свяжутся с вами в течение рабочего дня.
              </p>
              <div className="flex mt-10">
                <FormCall />
              </div>
            </div>
            <div onClick={() => setIsOpen(false)} className="absolute top-5 right-5 cursor-pointer">
              <CrossIcon className="stroke-current hover:text-gray-700" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
