import { Breadcrumbs, breadcrumbItems } from '@/components/Breadcrumbs';
import Instagram from '@/public/icons/instagram-16-px.svg';
import Phone from '@/public/icons/phone-24-px.svg';
import Modal from '@/components/Modal';
import { Map } from '@/components';
import Link from 'next/link';
import { getMetadata } from '@/utils';

export const metadata = getMetadata({ title: 'Контакты' });

const Contacts = () => {
  return (
    <div className="font-gilroy font-normal text-gray-text text-sexteen  mt-[107px] max-w-[1440px] mx-auto ">
      <div className="md:mx-[60px] xs:mx-[16px]">
        <section>
          <Breadcrumbs items={breadcrumbItems} />
        </section>
        <section className="xl:h-[calc(100vh-197px)] pb-[90px] flex flex-col justify-center">
          <h1 className="flex justify-center text-forty text-blue-dark md:mb-0 xs:mb-[30px]">Контакты</h1>
          <div className="flex justify-between md:items-center     xl:flex-row xl:mt-0 md:flex-col md:mt-[70px] xs:flex-col">
            <section className="flex md:items-center md:flex-row xs:flex-col ">
              <div>
                <div className="md:w-[320px] pb-[22px]">
                  <p className="text-twenty text-blue-dark">Адрес:</p>
                  <p className="pt-[15px] text-sexteen md:font-gilroy xs:font-poppins">
                    246003, г. Гомель, ул. Кирова, д. 55, каб. 318
                  </p>
                </div>
                <div className="w-[320px] h-[240px]">
                  <Map />
                </div>
              </div>
              <div className="w-[194px] h-[190px] md:ml-[26px]">
                <h2 className="text-twenty text-blue-dark md:mt-0 xs:mt-[30px]">Время работы:</h2>
                <p className="pt-[15px] font-poppins">ежедневно: 9:00-20:30</p>
                <h2 className="md:pt-10 text-twenty text-blue-dark xs:mt-[30px] ">Мы в соц сетях: </h2>
                <div className="xs:flex md:flex-col xs:pt-[15px] md:pt-0">
                  <Link href="https://instagram.com/techno_cat_gomel?igshid=MzRlODBiNWFlZA==">
                    <div className="flex items-center font-poppins text-fill-blue xs:mr-[10px] md:mr-0">
                      <Instagram stroke="#36568B" />
                      <p className="ml-2">Instagram</p>
                    </div>
                  </Link>

                  <Link
                    className="font-poppins text-fourteen"
                    href="https://instagram.com/techno_cat_gomel?igshid=MzRlODBiNWFlZA=="
                  >
                    @techno_cat_gomel
                  </Link>
                  {/* <p className="font-poppins text-fourteen">@techno_cat_gomel</p> */}
                </div>
              </div>
            </section>
            <section className="md:w-[573px] xs:w-[calc(100vw-32px)] md:h-[182px]  rounded-lg bg-d-cyan p-5     xl:mt-0 md:mt-[70px] xs:mt-[30px]">
              <h2 className="text-2xl text-blue-dark">У вас остались вопросы? </h2>
              <div className="flex mt-[30px]">
                <div>
                  {/* TODO: Pass colors  */}
                  <div className="text-fill-blue md:block xs:flex xs:flex-row">
                    <Modal svgHover={'#4B76BC'} svgStroke={'#36568B'} bgColor={''} hoverColor={''} textColor={''} />
                    <Link
                      className="text-fill-blue md:hidden xs:block md:text-base xs:text-[22px] xs:pt-1 md:pt-0"
                      href="tel:+375291477233"
                    >
                      + 375 (29) 330-20-79
                    </Link>
                  </div>

                  <p className="w-[216px] mt-[10px]">Мы свяжемся с вами в течение рабочего дня</p>
                </div>
                <p className="mx-10 xs:hidden md:block">или</p>
                <div className="xs:hidden md:block">
                  <p>Позвоните нам по номеру</p>
                  <Link className="text-fill-blue" href="tel:+375291477233">
                    + 375 (29) 330-20-79
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;
