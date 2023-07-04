import Button from '@/components/Button';
import H1Svg from '../public/main-page-h1.svg';

export default function Home() {
  return (
    <main className="font-gilroy font-normal text-local-gray-t text-sexteen bg-local-gray-b pt-[138px]">
      <section className="h-[calc(100vh-138px)]">
        <div className="px-[120px] pt-[100px] pb-[160px] max-w-[1440px] mx-auto flex justify-between">
          <div className="max-w-[600px] max-h-[400px]">
            <h1 className="text-fifty font-normal">ТехноКот — место, где ваш ребенок реализует свои мечты и цели!</h1>
            <h2 className="text-sexteen font-poppins pt-10 pb-[60px]">
              Наши квалифицированные преподаватели помогут получить вашему ребенку качественное образование и подарят
              незабываемые впечатления от увлекательных занятий.
            </h2>
            <Button />
          </div>
          <div>
            <H1Svg />
          </div>
        </div>
      </section>
    </main>
  );
}
