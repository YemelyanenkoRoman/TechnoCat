import Image from 'next/image';

import Directions from './Directions';
import Navigation from './MainNavigation';
import Link from 'next/link';
import Modal from './Modal';

const NavItems = [
  { label: 'О нас', href: '/about' },
  { label: 'Контакты', href: '/contacts' },
];

const TheHeader = () => {
  return (
    <header className="font-poppins text-local-gray-t text-sexteen font-normal bg-local-gray-b fixed top-0 left-0 w-full  z-50">
      <div className="max-w-[1440px] mx-auto">
        <nav className="flex justify-between items-center h-[138px] px-[60px]">
          <div className="flex items-center">
            <nav className="mr-[201px]">
              <Link href="/">
                <Image
                  priority={true}
                  src="/technocat-logo.png"
                  width={134}
                  height={47}
                  alt="Логотип образовательного центра Техно Кот"
                />
              </Link>
            </nav>
            <ul className="flex gap-[46px] ">
              <Navigation navLinks={NavItems} />
              <Directions />
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="flex">
              <Modal />
            </div>
            <a className="flex hover:text-gray-700" href="tel:+375291477233">
              + 375 (29) 330-20-79
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export { TheHeader };
