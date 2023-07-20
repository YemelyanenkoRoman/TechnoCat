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
    <div className="font-gilroy font-normal text-local-gray-t text-sexteen  mx-auto mt-[107px] max-w-[1440px]">
      <div className="mx-[60px]">
        <section>
          <Breadcrumbs items={breadcrumbItems} />
        </section>

        <>
          {data ? (
            <>
              <section className="flex  bg-slate-600 h-[calc(100vh-227px)]">
                <div className="flex items-center ">
                  <div>
                    <Programming />
                  </div>
                  <div className="flex flex-col font-poppins max-w-[593px] h-[435px] content-between justify-between ml-[30px]">
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

                  {/* </div> */}
                  {/* <h1>User: {data.name}</h1>
              <p>ID: {data.id}</p> */}
                </div>
              </section>

              <section className="flex mt-[70px] font-poppins">
                <div className="max-w-[745px] max-h-[562px]">
                  <div className="flex flex-col justify-between max-w-[745px] h-[247px]">
                    <h2 className="text-twentyfive font-gilroy">О направлении</h2>
                    <p className="mt-[6px]">
                      Программирование для самых маленьких – это занимательный способ познакомить детей с изучением
                      компьютерной науки и техники. Это простой способ привить детям любовь к учёбе, изучению и познанию
                      нового.
                    </p>
                    <p>
                      Заниматься программированием в детстве очень важно, потому что изучение программирования помогает
                      развитию всех направлений мышления. Это помогает детям развиваться быстрее, делает их более
                      уверенными в себе и помогает им понимать мир, в котором они живут.
                    </p>
                  </div>
                </div>
              </section>

              <section></section>
            </>
          ) : (
            <div>User not found</div>
          )}
        </>
      </div>
    </div>
  );
};

export default Directions;
