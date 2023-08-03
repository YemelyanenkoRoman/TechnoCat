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
    bgButtonActive: string;
    bgButton: string;
    formBorder: string;
    formBorderActive: string;
  };
}

export const colorNavObj: colorNavObj = {
  '/': {
    bgColor: 'bg-fill-blue',
    bgButtonActive: 'hover:bg-fill-blue',
    bgButton: 'bg-d-blue',
    textColor: 'text-text-lightblue',
    hoverColor: 'hover:text-lightblue ',
    directColor: 'bg-d-blue',
    activeColor: 'text-text-lightblue',
    svgStroke: '#EFF6FF',
    svgHover: '#EFF6FF',
    formBorder: 'border-d-blue',
    formBorderActive: 'focus:border-fill-blue',
  },
  '/about': {
    bgColor: 'bg-fill-blue',
    bgButton: 'bg-d-blue',
    bgButtonActive: 'hover:bg-fill-blue',
    textColor: 'text-text-lightblue',
    hoverColor: 'hover:text-lightblue ',
    directColor: 'bg-d-blue',
    activeColor: 'text-text-lightblue',
    svgStroke: '#EFF6FF',
    svgHover: '#EFF6FF',
    formBorder: 'border-d-blue',
    formBorderActive: 'focus:border-fill-blue',
  },
  '/contacts': {
    bgColor: 'bg-fill-blue',
    bgButton: 'bg-d-blue',
    bgButtonActive: 'bg-fill-blue',
    textColor: 'text-text-lightblue',
    hoverColor: 'hover:text-lightblue',
    directColor: 'bg-d-blue',
    activeColor: 'text-text-lightblue',
    svgStroke: '#EFF6FF',
    svgHover: '#EFF6FF',
    formBorder: 'border-d-blue',
    formBorderActive: 'focus:border-fill-blue',
  },
  '/directions/programming': {
    bgColor: 'bg-fill-violet',
    bgButton: 'bg-button-violet',
    bgButtonActive: 'hover:bg-hover-violet',
    textColor: 'text-tetx-violet',
    hoverColor: 'hover:text-hover-violet',
    activeColor: 'text-hover-violet',
    directColor: 'bg-d-violet',
    svgStroke: '#9783B0',
    svgHover: '#724DA1',
    formBorder: 'border-button-violet',
    formBorderActive: 'focus:border-hover-violet',
  },
  '/directions/robotics': {
    bgColor: 'bg-fill-cyan',
    bgButton: 'bg-d-blue',
    bgButtonActive: 'hover:bg-hover-cyan',
    textColor: 'text-tetx-cyan',
    hoverColor: 'hover:text-hover-cyan',
    activeColor: 'text-hover-cyan',
    directColor: 'bg-d-cyan',
    svgStroke: '#89898A',
    svgHover: '#36568B',
    formBorder: 'border-d-blue',
    formBorderActive: 'focus:border-fill-blue',
  },
  '/directions/english': {
    bgColor: 'bg-fill-yelow',
    bgButton: 'bg-button-yellow',
    bgButtonActive: 'hover:bg-hover-yellow',
    textColor: 'text-text-yellow',
    hoverColor: 'hover:text-hover-yellow',
    activeColor: 'text-hover-yellow',
    directColor: 'bg-d-yellow',
    svgStroke: '#B0A36A',
    svgHover: '#C3A411',
    formBorder: 'border-button-yellow',
    formBorderActive: 'focus:border-hover-yellow',
  },
  '/directions/preparingforschool': {
    bgColor: 'bg-fill-pink',
    bgButton: 'bg-button-brown',
    bgButtonActive: 'hover:bg-hover-brown',
    textColor: 'text-text-brown',
    hoverColor: 'hover:text-hover-brown',
    activeColor: 'text-hover-brown',
    directColor: 'bg-d-brown',
    svgStroke: '#B18882',
    svgHover: '#99564C',
    formBorder: 'border-button-brown',
    formBorderActive: 'focus:border-hover-brown',
  },
  '/directions/firstgradestudent': {
    bgColor: 'bg-fill-green',
    bgButton: 'bg-button-green',
    bgButtonActive: 'hover:bg-hover-green',
    textColor: 'text-text-green',
    hoverColor: 'hover:text-hover-green',
    activeColor: 'text-hover-green',
    directColor: 'bg-d-green',
    svgStroke: '#89AD87',
    svgHover: '#349B46',
    formBorder: 'border-button-green',
    formBorderActive: 'focus:border-hover-green',
  },
};

export const useColor = () => {
  const pathname = usePathname();
  const color = colorNavObj[pathname];

  return color;
};
