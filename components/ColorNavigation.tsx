'use client';
import { usePathname } from 'next/navigation';

interface colorNavObj {
  [key: string]: {
    bgColor: string;
    textColor: string;
    hoverColor: string;
  };
}

export const colorNavObj: colorNavObj = {
  '/': { bgColor: 'bg-[#36568B]', textColor: 'text-[#EFF6FF]', hoverColor: 'hover:text-[#724DA1]' },
  '/about': { bgColor: 'bg-[#36568B]', textColor: 'text-[#EFF6FF]', hoverColor: 'hover:text-[#724DA1]' },
  '/contacts': { bgColor: 'bg-[#36568B]', textColor: 'text-[#EFF6FF]', hoverColor: 'hover:text-[#724DA1]' },
  '/directions/programming': {
    bgColor: 'bg-[#E2CBFF]',
    textColor: 'text-[#9783B0]',
    hoverColor: 'hover:text-[#724DA1]',
  },
  '/directions/robotics': { bgColor: 'bg-[#E2CBFF]', textColor: 'text-[#9783B0]', hoverColor: 'hover:text-[#724DA1]' },
  '/directions/english': { bgColor: 'bg-[#E2CBFF]', textColor: 'text-[#9783B0]', hoverColor: 'hover:text-[#724DA1]' },
  '/directions/preparingforschool': {
    bgColor: 'bg-[#E2CBFF]',
    textColor: 'text-[#9783B0]',
    hoverColor: 'hover:text-[#724DA1]',
  },
  '/directions/firstgradestudent': {
    bgColor: 'bg-[#E2CBFF]',
    textColor: 'text-[#9783B0]',
    hoverColor: 'hover:text-[#724DA1]',
  },
};

export const useColor = () => {
  const pathname = usePathname();
  const color = colorNavObj[pathname];

  return color;
};
