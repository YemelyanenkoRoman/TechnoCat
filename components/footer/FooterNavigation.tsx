import Link from 'next/link';
import { NavFooterDirection } from '../TheFooter';
import { v4 as uuidv4 } from 'uuid';

type FooterProps = {
  startIndex: number;
  endIndex: number;
};

const FooterNav = (props: FooterProps) => {
  return (
    <>
      {NavFooterDirection.slice(props.startIndex, props.endIndex).map((link) => {
        return (
          <li key={uuidv4()} className="flex ">
            <Link className="hover:text-gray-700 flex " href={link.href}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default FooterNav;
