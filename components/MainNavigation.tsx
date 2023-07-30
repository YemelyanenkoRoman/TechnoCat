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
                  ? `opacity-50 ${color.textColor}`
                  : ` ease-linear duration-100 hover:opacity-50  ${color.hoverColor} `
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
