'use client';
import { usePathname } from 'next/navigation';

interface colorNavObj {
  [key: string]: {
    bgColor: string;
    textColor: string;
    hoverColor: string;
    directColor: string;
    activeColor?: string;
    svgStroke: string;
    svgHover: string;
  };
}

export const colorNavObj: colorNavObj = {
  '/': {
    bgColor: 'bg-fill-blue',
    textColor: 'text-text-lightblue',
    hoverColor: 'hover:text-lightblue ',
    directColor: 'bg-d-blue',
    activeColor: 'text-text-lightblue',
    svgStroke: '#EFF6FF',
    svgHover: '#EFF6FF',
  },
  '/about': {
    bgColor: 'bg-fill-blue',
    textColor: 'text-text-lightblue',
    hoverColor: 'hover:text-lightblue ',
    directColor: 'bg-d-blue',
    activeColor: 'text-text-lightblue',
    svgStroke: '#EFF6FF',
    svgHover: '#EFF6FF',
  },
  '/contacts': {
    bgColor: 'bg-fill-blue',
    textColor: 'text-text-lightblue',
    hoverColor: 'hover:text-lightblue',
    directColor: 'bg-d-blue',
    activeColor: 'text-text-lightblue',
    svgStroke: '#EFF6FF',
    svgHover: '#EFF6FF',
  },
  '/directions/programming': {
    bgColor: 'bg-fill-violet',
    textColor: 'text-tetx-violet',
    hoverColor: 'hover:text-hover-violet',
    activeColor: 'text-hover-violet',
    directColor: 'bg-d-violet',
    svgStroke: '#9783B0',
    svgHover: '#724DA1',
  },
  '/directions/robotics': {
    bgColor: 'bg-fill-cyan',
    textColor: 'text-tetx-cyan',
    hoverColor: 'hover:text-hover-cyan',
    activeColor: 'text-hover-cyan',
    directColor: 'bg-d-cyan',
    svgStroke: '#89898A',
    svgHover: '#36568B',
  },
  '/directions/english': {
    bgColor: 'bg-fill-yelow',
    textColor: 'text-text-yellow',
    hoverColor: 'hover:text-hover-yellow',
    activeColor: 'text-hover-yellow',
    directColor: 'bg-d-yellow',
    svgStroke: '#B0A36A',
    svgHover: '#C3A411',
  },
  '/directions/preparingforschool': {
    bgColor: 'bg-fill-pink',
    textColor: 'text-text-brown',
    hoverColor: 'hover:text-hover-brown',
    activeColor: 'text-hover-brown',
    directColor: 'bg-d-brown',
    svgStroke: '#B18882',
    svgHover: '#99564C',
  },
  '/directions/firstgradestudent': {
    bgColor: 'bg-fill-green',
    textColor: 'text-text-green',
    hoverColor: 'hover:text-hover-green',
    activeColor: 'text-hover-green',
    directColor: 'bg-d-green',
    svgStroke: '#89AD87',
    svgHover: '#349B46',
  },
};

export const useColor = () => {
  const pathname = usePathname();
  const color = colorNavObj[pathname];

  return color;
};
