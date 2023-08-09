'use client';

import Link from 'next/link';
import { DirectionsNav } from '../directions/DirectionsNav';
import { v4 as uuidv4 } from 'uuid';
import { useColor } from '../ColorNavigation';

type FooterProps = {
  startIndex: number;
  endIndex: number;
};

const linkLabels: { [key: string]: string } = {
  '/directions/programming': 'Программированию',
  '/directions/robotics': 'Робототехнике',
  '/directions/english': 'Английскому языку',
  '/directions/preparingforschool': 'Подготовим к школе',
  '/directions/firstgradestudent': 'Поможем первокласснику',
};

type NavigationItem = {
  label: string;
  href: string;
};

const FooterNavigation: NavigationItem[] = DirectionsNav.map((item) => {
  const label = linkLabels[item.href];
  return {
    ...item,
    label: label ? label : item.label,
  };
});

const FooterNav = (props: FooterProps) => {
  const color = useColor();
  const slicedNavigation = FooterNavigation.slice(props.startIndex, props.endIndex);

  return (
    <>
      {slicedNavigation.map(({ label, href }) => (
        <li key={uuidv4()} className="flex">
          <Link className={`${color.hoverColor} flex`} href={href}>
            {label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default FooterNav;
