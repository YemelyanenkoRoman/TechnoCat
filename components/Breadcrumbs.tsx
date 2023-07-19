'use client';

export const breadcrumbItems = [
  { href: '/', label: 'Главная' },
  { href: '/about', label: 'О нас' },
  { href: '/contacts', label: 'Контакты' },
  { href: '/about/test', label: 'тест' },
  { href: '/directions/programming', label: 'программирование' },
  { href: '/directions/robotics', label: 'робототехника' },
  { href: '/directions/english', label: 'английский' },
  { href: '/directions/preparingforschool', label: 'подготовка к школе' },
  { href: '/directions/firstgradestudent', label: 'помощь первокласснику' },
];

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type BreadcrumbItem = {
  href: string;
  label: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const pathname = usePathname();

  // Фильтруем элементы хлебных крошек, чтобы отображать только те, которые соответствуют текущему пути
  const filteredItems = items.filter((item) => pathname.startsWith(item.href));

  return (
    <div className="pt-10 mb-[30px] font-poppins">
      <nav className="text-gray-500 text-sm">
        <ol className="flex items-center space-x-2">
          {filteredItems.map((item, index) => {
            const isLastItem = index === filteredItems.length - 1;
            const isCurrentPage = item.href === pathname;

            return (
              <li key={item.href}>
                {isLastItem || isCurrentPage ? <span>{item.label}</span> : <Link href={item.href}>{item.label}</Link>}
                {!isLastItem && <span>/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};
