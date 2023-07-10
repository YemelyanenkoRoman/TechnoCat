'use client';

import { useState } from 'react';
import PhoneIcon from '../public/icons/phone-24-px.svg';
import CrossIcon from '../public/icons/cross-12-px.svg';
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
          <div className="w-[510px] h-[438px] relative z-10 p-8 bg-local-gray-b-2 rounded shadow-lg">
            <h2 className="text-lg font-semibold">Modal Title</h2>
            <p className="mt-2">This is the modal content.</p>

            <div
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0 cursor-pointer"
            >
              <CrossIcon className="stroke-current text-red-500" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
