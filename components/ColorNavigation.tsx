'use client';
import { usePathname } from 'next/navigation';

interface colorNavObj {
  [key: string]: {
    bgColor: string;
    textColor: string;
    hoverColor: string;
    directColor: string;
    activeColor?: string;
  };
}

export const colorNavObj: colorNavObj = {
  '/': {
    bgColor: 'bg-fill-blue',
    textColor: 'text-text-lightblue',
    hoverColor: 'hover:text-lightblue ',
    directColor: 'bg-d-blue',
  },
  '/about': {
    bgColor: 'bg-fill-blue',
    textColor: 'text-text-lightblue',
    hoverColor: 'hover:text-lightblue ',
    directColor: 'bg-d-blue',
  },
  '/contacts': {
    bgColor: 'bg-fill-blue',
    textColor: 'text-text-lightblue',
    hoverColor: 'hover:text-lightblue',
    directColor: 'bg-d-blue',
  },
  '/directions/programming': {
    bgColor: 'bg-fill-violet',
    textColor: 'text-tetx-violet',
    hoverColor: 'hover:text-hover-violet',
    activeColor: 'text-hover-violet',
    directColor: 'bg-d-violet',
  },
  '/directions/robotics': {
    bgColor: 'bg-fill-cyan',
    textColor: 'text-tetx-cyan',
    hoverColor: 'hover:text-hover-cyan',
    activeColor: 'text-hover-cyan',
    directColor: 'bg-d-cyan',
  },
  '/directions/english': {
    bgColor: 'bg-fill-yelow',
    textColor: 'text-text-yellow',
    hoverColor: 'hover:text-hover-yellow',
    activeColor: 'text-hover-yellow',
    directColor: 'bg-d-yellow',
  },
  '/directions/preparingforschool': {
    bgColor: 'bg-fill-pink',
    textColor: 'text-text-brown',
    hoverColor: 'hover:text-hover-brown',
    activeColor: 'text-hover-brown',
    directColor: 'bg-d-brown',
  },
  '/directions/firstgradestudent': {
    bgColor: 'bg-fill-green',
    textColor: 'text-text-green',
    hoverColor: 'hover:text-hover-green',
    activeColor: 'text-hover-green',
    directColor: 'bg-d-green',
  },
};

export const useColor = () => {
  const pathname = usePathname();
  const color = colorNavObj[pathname];

  return color;
};
