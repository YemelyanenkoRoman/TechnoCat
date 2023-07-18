import LogoMax from '../public/logo/technocat-logo-max 1.svg';

import Directions from './directions/Directions';
import Navigation from './MainNavigation';
import Link from 'next/link';
import Modal from './Modal';

export const NavItems = [
  { label: 'О нас', href: '/about' },
  { label: 'Контакты', href: '/contacts' },
];

const TheHeader = () => {
  return (
    <header className="font-poppins text-local-gray-t text-sexteen font-normal bg-local-gray-b fixed top-0 left-0 w-full  z-50">
      <div className="max-w-[1440px] mx-auto">
        <nav className="flex justify-between items-center h-[107px] px-[60px]">
          <div className="flex items-center">
            <div className="mr-[201px]">
              <Link href="/">
                <LogoMax />
              </Link>
            </div>
            <ul className="flex gap-[46px] ">
              <Navigation navLinks={NavItems} />
              <Directions />
            </ul>
          </div>
          <Modal />
          {/* <div className="flex flex-col"> */}
          {/* <div className="flex"> */}
          {/* <Modal /> */}
          {/* </div> */}
          {/* <a className="flex hover:text-gray-700" href="tel:+375291477233">
              + 375 (29) 330-20-79
            </a> */}
          {/* </div> */}
        </nav>
      </div>
    </header>
  );
};

export { TheHeader };
