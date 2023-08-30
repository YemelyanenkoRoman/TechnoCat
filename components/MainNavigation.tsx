'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useColor } from './ColorNavigation';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const MainNavigation = ({ navLinks }: Props) => {
  const color = useColor();
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.label} className="md:mb-0 md:block xs:mb-5 ">
            <Link
              className={
                isActive
                  ? `opacity-50 ${color.textColor} md:font-poppins md:font-normal md:text-sexteen   xs:text-twentyfive xs:font-gilroy xs:font-light`
                  : ` ease-linear duration-100 hover:opacity-80  ${color.hoverColor} md:font-poppins md:font-normal md:text-sexteen   xs:text-twentyfive xs:font-gilroy xs:font-light`
              }
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default MainNavigation;
