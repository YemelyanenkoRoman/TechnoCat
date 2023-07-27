'use client';

import { usePathname } from 'next/navigation';

export const colorNavObj = {
  '/': '#36568B',
  '/about': '#36568B',
  '/contacts': '#36568B',
  '/directions/programming': '#E2CBFF',
  '/directions/robotics': '#E2CBFF',
  '/directions/english': '#E2CBFF',
  '/directions/preparingforschool': '#E2CBFF',
  '/directions/firstgradestudent': '#E2CBFF',
};

export const useColor = () => {
  const pathname = usePathname();
  console.log(pathname, '!!!');

  const color = colorNavObj[pathname as keyof typeof colorNavObj] || '#000000'; // Приведение типа

  return color;
};
