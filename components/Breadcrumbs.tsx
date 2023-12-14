'use client';

export const breadcrumbItems = [
  { href: '/', label: 'Главная' },
  { href: '/about', label: 'О нас' },
  { href: '/contacts', label: 'Контакты' },
  { href: '/about/test', label: 'тест' },
  { href: '/directions/programming', label: 'Программирование' },
  { href: '/directions/robotics', label: 'Робототехника' },
  { href: '/directions/mentalarithmetic', label: 'Ментальная арифметика' },
  { href: '/directions/preparingforschool', label: 'Подготовка к школе' },
  { href: '/directions/firstgradestudent', label: 'Помощь первокласснику' },
  { href: '/directions/painting', label: 'Рисование' },
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
    <div className="md:pt-10 xs:pt-[30px] pb-[30px] font-poppins">
      <nav className="text-gray-text text-sm">
        <ol className="flex items-center space-x-2">
          {filteredItems.map((item, index) => {
            const isLastItem = index === filteredItems.length - 1;
            const isCurrentPage = item.href === pathname;

            return (
              <li key={item.href}>
                {isLastItem || isCurrentPage ? (
                  <span className="text-gray-text">{item.label}</span>
                ) : (
                  <span className="text-gray-text-light">
                    <Link href={item.href}>{item.label}</Link>
                  </span>
                )}
                {!isLastItem && <span> / </span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};
