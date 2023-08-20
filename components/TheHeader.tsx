'use client';

import LogoMax from '../public/logo/technocat-logo-max 1.svg';
import Image from 'next/image';

import Directions from './directions/Directions';
import Navigation from './MainNavigation';
import Link from 'next/link';
import Modal from './Modal';
import { useColor } from './ColorNavigation';

export const NavItems = [
  { label: 'О нас', href: '/about' },
  { label: 'Контакты', href: '/contacts' },
];

const TheHeader = () => {
  const color = useColor();

  return (
    <header
      className={`${color.textColor} ${color.bgColor} font-poppins text-sexteen font-normal  fixed top-0 left-0 w-full  z-50`}
    >
      <div className="max-w-[1440px] mx-auto">
        <nav className="flex justify-between items-center h-[107px] px-[60px]">
          <div className="flex items-center">
            <div className="mr-[201px]">
              <Link href="/">
                <Image
                  src="/logo/technocat-logo-max 1.svg"
                  alt="Главный логотип образовательного центра ТехноКот"
                  width={135}
                  height={47}
                />
              </Link>
            </div>
            <ul className="flex gap-[46px] ">
              <Navigation navLinks={NavItems} />
              <Directions />
            </ul>
          </div>
          <Modal
            textColor={color.textColor}
            svgHover={color.svgHover}
            svgStroke={color.svgStroke}
            bgColor={color.bgColor}
            hoverColor={color.hoverColor}
          />
        </nav>
      </div>
    </header>
  );
};

export { TheHeader };
