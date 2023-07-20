'use client';
import { Breadcrumbs, breadcrumbItems } from '@/components/Breadcrumbs';
import { DirectionsContent } from '@/components/directions/DirectionsContent';

import Programming from '@/public/DirectionsPages/Programming.svg';

import Book from '@/public/icons/book-24-px.svg';
import Hat from '@/public/icons/academic-cap-24-px.svg';
import Time from '@/public/icons/time-24-px.svg';
import Button from '@/components/buttons/Button';
import Check from '@/public/icons/check-16-px.svg';
import DirectionCards from '@/components/directions/DirectionCards';

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
              <section className="flex h-[calc(100vh-227px)]">
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

              <section className="flex justify-between items-center">
                <div className="flex mt-[70px] font-poppins">
                  <div className="max-w-[745px] max-h-[562px]">
                    <div className="flex flex-col justify-between max-w-[745px] h-[247px]">
                      <h2 className="text-twentyfive font-gilroy">О направлении</h2>
                      <p className="mt-[6px]">
                        Программирование для самых маленьких – это занимательный способ познакомить детей с изучением
                        компьютерной науки и техники. Это простой способ привить детям любовь к учёбе, изучению и
                        познанию нового.
                      </p>
                      <p>
                        Заниматься программированием в детстве очень важно, потому что изучение программирования
                        помогает развитию всех направлений мышления. Это помогает детям развиваться быстрее, делает их
                        более уверенными в себе и помогает им понимать мир, в котором они живут.
                      </p>
                    </div>

                    <div className="flex flex-col justify-between max-w-[745px] h-[245px] mt-[70px]">
                      <h2 className="font-gilroy text-twentyfive">С чего начинаем обучение?</h2>
                      <p className="mt-[6px]">
                        Мы начинаем обучение со знакомства с компьютером и простых и понятных программ:
                      </p>
                      <div className="flex flex-row">
                        <div>
                          <h3 className="font-gilroy text-twenty">Scratch</h3>
                          <p className="mt-[12px] text-fourteen">
                            В этой программе дети научаться создавать простые алгоритмы, по средствам создания анимации
                            и мультиков, ведь изучать программирование играя гораздо проще и веселее.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-gilroy text-twenty">Minecraft</h3>
                          <p className="mt-[12px] text-fourteen">
                            В Minecraft есть возможность учиться программировать как на языке Lua, так и с помощью
                            визуальных блоков. Так, через игру в Minecraft ребёнок сможет изучить основы
                            программирования.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-[485px] h-[476px] p-9 flex flex-col justify-between font-poppins text-fourteen bg-local-gray-b rounded-2xl ">
                  <h2 className="font-gilroy text-twentyfive">Как проходит обучение</h2>
                  <p>
                    В нашем образовательном центре обучение программированию проходит небольшими группами. Мы уделяем
                    внимание каждому ребёнку и следим, чтобы каждый усвоил материал, полученный на уроке.
                  </p>
                  <p>
                    Мы преподносим информацию доступным и понятным языком, у нас работают профессионалы, имеющие не
                    только образование в сфере информационных технологий, но и педагогическое образование.
                  </p>
                  <p>
                    Мы используем обучающую платформу с большим количеством заданий и подсказок, выполняя которые
                    ребёнок будет развиваться как программист, ведь начнёт с изучения простых алгоритмов, продолжит
                    изучение языка Pascal и постепенно начнёт изучать язык программирования Python.
                  </p>
                </div>
              </section>

              <section className="flex items-center justify-between font-poppins text-fourteen mt-[70px]">
                <div className="flex flex-col justify-between h-[258px] max-w-[745px]">
                  <h2 className="font-gilroy text-twentyfive">
                    Что даст вашему ребенку изучение программирования в детстве?
                  </h2>
                  <div className="max-w-[745px] h-[154px] flex flex-wrap">
                    <div className="flex max-w-[360px]">
                      <Check />
                      <p className="ml-2 ">Развитие креативности и умения решать задачи</p>
                    </div>
                    <div className="flex max-w-[360px]">
                      <Check />
                      <p className="ml-2">Поддержка в развитии математического мышления</p>
                    </div>
                    <div className="flex max-w-[360px]">
                      <Check />
                      <p className="ml-2 ">Повышение концентрации и самодисциплины</p>
                    </div>
                    <div className="flex max-w-[360px]">
                      <Check />
                      <p className="ml-2">Подготовка к карьере в области технологии</p>
                    </div>
                    <div className="flex max-w-[360px]">
                      <Check />
                      <p className="ml-2">Увлекательное и полезное времяпрепровождение</p>
                    </div>
                  </div>
                </div>
                <div className=" max-w-[488px] h-[188px] flex flex-col justify-between py-[26px] px-[63px] bg-local-gray-b rounded-2xl ">
                  <h3 className="font-gilroy text-twentyfive">Участие в соревнованиях</h3>
                  <p>
                    Так же дети, которые занимаются у нас, принимают участие в различных соревнованиях и олимпиадах по
                    программированию, это стимулирует изучать программирование и развиваться дальше.
                  </p>
                </div>
              </section>

              <section className="pt-[90px] pb-[120px]">
                <h2 className="font-gilroy text-twentyfive pb-[30px]">Вам также могут быть интересны</h2>
                <DirectionCards />
              </section>
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
