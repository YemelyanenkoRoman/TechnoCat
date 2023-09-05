'use client';
import { Breadcrumbs, breadcrumbItems } from '@/components/Breadcrumbs';
import { DirectionsContent } from '@/components/directions/DirectionsContent';

import Book from '@/public/icons/book-24-px.svg';
import Hat from '@/public/icons/academic-cap-24-px.svg';
import Time from '@/public/icons/time-24-px.svg';
import Button from '@/components/buttons/Button';
import Check from '@/public/icons/check-16-px.svg';

import { useColor } from '@/components/ColorNavigation';
import ModalWithDirection from '@/components/ModalWithDirection';
import { SliderCenterMode } from '@/components/sliders/SliderCenterMode';

const Directions = ({ params }: { params: { directions: string } }) => {
  console.log(params.directions, 'page Direction');

  const data = DirectionsContent.find((item) => item.id === params.directions);

  const color = useColor();

  return (
    <main className="overflow-x-hidden">
      <div className="font-gilroy font-normal text-gray-text   mx-auto mt-[107px] max-w-[1440px] xl:text-sexteen md:text-fourteen">
        <div className="xl:mx-[60px] md:mx-[30px]">
          <section>
            <Breadcrumbs items={breadcrumbItems} />
          </section>
        </div>
      </div>
      <>
        {data ? (
          <>
            <div className="font-gilroy font-normal text-gray-text mt-[30px] mx-auto max-w-[1440px] xl:text-sexteen md:text-fourteen">
              <div className="xl:mx-[60px] md:mx-[30px]">
                <section className="flex    xl:h-[calc(100vh-257px)] ">
                  <div className="flex items-center ">
                    <div className={`${color.bgColor} w-[530px] h-[435px] rounded-lg flex justify-center p-[20px] `}>
                      <div className="flex ">{data.block1.mainImage}</div>
                    </div>

                    <div className="flex flex-col font-poppins max-w-[593px] h-[435px] content-between justify-between ml-[30px]">
                      <div>
                        <h1 className={`${color.activeColor} text-forty font-gilroy`}>{data.block1.mainTitle}</h1>
                        <p className="text-fourteen mt-[10px]">{data.block1.subTitle}</p>
                      </div>

                      <div>
                        <div>
                          <div className="flex">
                            <Book stroke={color.svgHover} />
                            <h2 className={`${color.activeColor} ml-[10px]`}>{data.block1.whatStudyTitle}</h2>
                          </div>
                          <p className="text-fourteen mt-[10px]">{data.block1.whatStudyParagraph}</p>
                        </div>
                        <div className="mt-[30px]">
                          <div className="flex">
                            <Hat stroke={color.svgHover} />
                            <h2 className={`${color.activeColor} ml-[10px]`}>{data.block1.whatTeachTitle}</h2>
                          </div>
                          <p className="text-fourteen mt-[10px]">{data.block1.whatTeachParagraph}</p>
                        </div>
                      </div>

                      <div className="flex flex-row justify-between text-fourteen">
                        <div className="flex">
                          <p className={`${color.activeColor} font-gilroy text-twenty`}>{data.block1.price} BYN</p>
                          <p className=" ml-[18px]">{data.block1.numberLessons}</p>
                        </div>
                        <div className="flex">
                          <Time stroke={color.svgHover} />
                          <p className="ml-[10px]">{data.block1.time} минут</p>
                        </div>
                        <p>Набор в группу с {data.block1.startClasses}</p>
                      </div>

                      <div className="flex flex-row justify-between content-between items-center">
                        <div className="flex">
                          <ModalWithDirection />
                        </div>
                        <p className="max-w-[285px] max-h-[40px] font-gilroy font-light text-fourteen flex">
                          {data.block1.discount}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="flex justify-between items-center mt-[70px]">
                  <div className="flex font-poppins">
                    <div className="xl:max-w-[745px] h-[562px] md:max-w-[540px] ">
                      <div className="flex flex-col justify-between max-w-[745px]   xl:h-[247px] md:h-[260px]">
                        <h2 className={`${color.activeColor} text-twentyfive font-gilroy`}>
                          {data.block2.subBlock21.title}
                        </h2>
                        <p>{data.block2.subBlock21.paragraph1}</p>
                        <p>{data.block2.subBlock21.paragraph2}</p>
                      </div>

                      <div className="flex flex-col justify-between max-w-[745px]     xl:h-[245px] xl:mt-[70px] md:h-[260px] md:mt-6">
                        <h2 className={`${color.activeColor} font-gilroy text-twentyfive`}>
                          {data.block2.subBlock22.mainTitle}
                        </h2>
                        <p className="mt-[6px]">{data.block2.subBlock22.subMainTitle}</p>
                        <div className="flex flex-row">
                          <div>
                            <h3 className={`${color.activeColor} font-gilroy text-twenty`}>
                              {data.block2.subBlock22.subTitle1}
                            </h3>
                            <p className="mt-[12px] text-fourteen">{data.block2.subBlock22.paragraph1}</p>
                          </div>
                          <div>
                            <h3 className={`${color.activeColor} font-gilroy text-twenty`}>
                              {data.block2.subBlock22.subTitle2}
                            </h3>
                            <p className="mt-[12px] text-fourteen">{data.block2.subBlock22.paragraph2}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${color.bgColor} p-9 flex flex-col justify-between font-poppins text-fourteen rounded-2xl xl:max-w-[485px] xl:h-[476px] md:max-w-[372px] md:h-[580px]`}
                  >
                    <h2 className={`${color.activeColor} font-gilroy text-twentyfive`}>
                      {data.block2.subBlock23.title}
                    </h2>
                    {data.block2.subBlock23.paragraphs.map((item) => {
                      return <p className={`${color.textColor}`}>{item}</p>;
                    })}
                  </div>
                </section>

                <section className="flex items-center justify-between font-poppins text-fourteen mt-[70px]">
                  <div className="flex flex-col justify-between h-[258px] max-w-[745px] ">
                    <h2 className={`${color.activeColor} font-gilroy text-twentyfive`}>
                      {data.block3.subBlock31.title}
                    </h2>
                    <div className="max-w-[745px] h-[154px] flex flex-wrap">
                      {data.block3.subBlock31.paragraphs.map((item) => {
                        return (
                          <div className="flex xl:max-w-[360px] md:[745px]">
                            <Check />
                            <p className="ml-2 ">{item}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className={`${color.bgColor} flex flex-col justify-between py-[26px]  rounded-2xl    xl:max-w-[485px] xl:h-[188px] xl:px-[63px] md:max-w-[372px] md:h-[256px] md:px-9`}
                  >
                    <h3 className={`${color.activeColor} font-gilroy text-twentyfive`}>
                      {data.block3.subBlock32.mainTitle}
                    </h3>
                    <p className={`${color.textColor}`}>{data.block3.subBlock32.paragraph1}</p>
                  </div>
                </section>

                <section className="pt-[90px] ">
                  <h2 className={`${color.activeColor} font-gilroy text-twentyfive pb-[30px]`}>
                    Вам также могут быть интересны
                  </h2>
                </section>
              </div>
            </div>
            <div className=" pb-[120px]">
              <SliderCenterMode />
            </div>
          </>
        ) : (
          <div>User not found</div>
        )}
      </>
    </main>
  );
};

export default Directions;
