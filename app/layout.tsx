import { TheHeader } from '@/components/TheHeader';
import { TheFooter } from '@/components/footer/TheFooter';
import './globals.css';
import { gilroy, poppins } from './fonts/fonts';
import Head from 'next/head';
import { getMetadata } from '@/utils';

export const metadata = getMetadata({
  title: {
    template: 'ТехноКот - %s',
    default: 'ТехноКот',
  },
  description:
    'Образовательный центр для детей ТехноКот. Занятия для детей по следующим направлениям: программирование, робототехника, подготовка к школе, английский язык, рисование, графический дизайн, подготовка к школе, помощь первокласснику.',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${gilroy.variable} ${poppins.variable} `}>
      <body className="relative overflow-x-hidden flex flex-col min-h-screen">
        <TheHeader />
        <main className="flex-grow">{children}</main>
        <span className="flex-none">
          <TheFooter />
        </span>
      </body>
    </html>
  );
}
