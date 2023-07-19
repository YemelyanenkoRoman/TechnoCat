import Link from 'next/link';
import { DirectionsNav } from '../directions/DirectionsNav';
import { v4 as uuidv4 } from 'uuid';

type FooterProps = {
  startIndex: number;
  endIndex: number;
};

const linkLabels: { [key: string]: string } = {
  programming: 'Программированию',
  robotics: 'Робототехнике',
  english: 'Английскому языку',
  preparingforschool: 'Подготовим к школе',
  firstgradestudent: 'Поможем первокласснику',
};

type NavigationItem = {
  link: string;
  label: string;
};

const FooterNavigation: NavigationItem[] = DirectionsNav.map((item) => {
  const label = linkLabels[item.link];
  return {
    ...item,
    label: label ? label : item.label,
  };
});

const FooterNav = (props: FooterProps) => {
  const slicedNavigation = FooterNavigation.slice(props.startIndex, props.endIndex);

  return (
    <>
      {slicedNavigation.map(({ link, label }) => (
        <li key={uuidv4()} className="flex">
          <Link className="hover:text-gray-700 flex" href={link}>
            {label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default FooterNav;
