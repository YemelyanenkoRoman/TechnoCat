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
          <li key={link.label}>
            <Link
              className={
                isActive
                  ? `opacity-50 ${color.textColor} font-poppins text-sexteen font-normal`
                  : ` ease-linear duration-100 hover:opacity-80  ${color.hoverColor} font-poppins text-sexteen font-normal`
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
