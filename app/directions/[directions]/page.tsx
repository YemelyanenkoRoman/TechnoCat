'use client';
import { Breadcrumbs, breadcrumbItems } from '@/components/Breadcrumbs';
import { DirectionsContent } from '@/components/directions/DirectionsContent';

import Programming from '@/public/DirectionsPages/Programming.svg';

import Book from '@/public/icons/book-24-px.svg';
import Hat from '@/public/icons/academic-cap-24-px.svg';
import Time from '@/public/icons/time-24-px.svg';
import Button from '@/components/buttons/Button';

const Directions = ({ params }: { params: { directions: string } }) => {
  console.log(params.directions);

  const data = DirectionsContent.find((item) => item.id === params.directions);

  return (
    <div className="font-gilroy font-normal text-local-gray-t text-sexteen  mt-[107px] max-w-[1440px] mx-auto h-[calc(100vh-107px)]">
      <div className="mx-[60px]">
        <section>
          <Breadcrumbs items={breadcrumbItems} />
        </section>

        <>
          {data ? (
            <section>
              <div className="flex">
                <div>
                  <Programming />
                </div>
                <div className="flex flex-col font-poppins max-w-[593px] max-h-[435px] content-between justify-between">
                  <div>
                    <h1 className="text-forty font-gilroy">Программирование</h1>
                    <p className="text-fourteen mt-[10px]">для самых маленьких</p>
                  </div>

                  <div>
                    <div>
                      <div className="flex">
                        <Book />
                        <h2 className="ml-[10px]">Что изучаем?</h2>
                      </div>
                      <p className="text-fourteen mt-[10px]">
                        Включает изучение математики, основ программирования, графики, простых алгоритмов через
                        визуальное программирование.
                      </p>
                    </div>
                    <div className="mt-[30px]">
                      <div className="flex">
                        <Hat />
                        <h2 className="ml-[10px]">Чему научим?</h2>
                      </div>
                      <p className="text-fourteen mt-[10px]">
                        Ребенок научится создавать интересные игры и мультфильмы с любимыми героями и захватыващим
                        сюжетом.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between text-fourteen">
                    <div className="flex">
                      <p className="font-gilroy text-twenty">60 BYN</p>
                      <p className=" ml-[18px]">1 занятие</p>
                    </div>
                    <div className="flex">
                      <Time />
                      <p className="ml-[10px]">60-90 минут</p>
                    </div>
                    <p>Набор в группу с 01.08.2023</p>
                  </div>

                  <div className="flex flex-row justify-between content-between items-center">
                    <div className="flex">
                      <Button width={159} height={50} title={'Записаться'} type={undefined} />
                    </div>
                    <p className="max-w-[285px] max-h-[40px] font-gilroy font-light text-fourteen flex">
                      При посещении 2-х и более направлений предоставляем скидку 20%
                    </p>
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* <h1>User: {data.name}</h1>
              <p>ID: {data.id}</p> */}
            </section>
          ) : (
            <div>User not found</div>
          )}
        </>
      </div>
    </div>
  );
};

export default Directions;
