import { Breadcrumbs, breadcrumbItems } from '@/components/Breadcrumbs';
import Instagram from '@/public/icons/instagram-16-px.svg';
import Phone from '@/public/icons/phone-24-px.svg';
import Modal from '@/components/Modal';
import { Map } from '@/components';

const Contacts = () => {
  return (
    <div className="font-gilroy font-normal text-gray-text text-sexteen  mt-[107px] max-w-[1440px] mx-auto ">
      <div className="mx-[60px]">
        <section>
          <Breadcrumbs items={breadcrumbItems} />
        </section>
        <section className="h-[calc(100vh-197px)] pb-[90px] flex flex-col justify-center">
          <h1 className="flex justify-center text-forty text-blue-dark">Контакты</h1>
          <div className="flex justify-between items-center">
            <section className="flex items-center">
              <div>
                <div className="w-[424px] pb-[22px]">
                  <p className="text-twenty text-blue-dark">Адрес:</p>
                  <p className="pt-[15px] text-sexteen">246003, г. Гомель, ул. Кирова, д. 55, каб. 318</p>
                </div>
                <div className="w-[320px] h-[240px]">
                  <Map />
                </div>
              </div>
              <div className="w-[194px] h-[190px] ml-[26px]">
                <h2 className="text-twenty text-blue-dark">Время работы:</h2>
                <p className="pt-[15px] font-poppins">ежедневно: 9:00-20:30</p>
                <h2 className="pt-10 text-twenty text-blue-dark">Мы в соц сетях: </h2>

                <a href="https://instagram.com/techno_cat_gomel?igshid=MzRlODBiNWFlZA==">
                  <div className="flex items-center font-poppins text-fill-blue">
                    <Instagram stroke="#36568B" />
                    <p className="ml-2">Instagram</p>
                  </div>
                </a>

                <a
                  className="font-poppins text-fourteen"
                  href="https://instagram.com/techno_cat_gomel?igshid=MzRlODBiNWFlZA=="
                >
                  @techno_cat_gomel
                </a>
                {/* <p className="font-poppins text-fourteen">@techno_cat_gomel</p> */}
              </div>
            </section>
            <section className="w-[573px] h-[182px]  rounded-lg bg-d-cyan p-5">
              <h2 className="text-2xl text-blue-dark">У вас остались вопросы? </h2>
              <div className="flex mt-[30px]">
                <div>
                  {/* TODO: Pass colors  */}
                  <div className="text-fill-blue">
                    <Modal svgHover={'#4B76BC'} svgStroke={'#36568B'} bgColor={''} hoverColor={''} textColor={''} />
                  </div>

                  <p className="w-[216px] mt-[10px]">Мы свяжемся с вами в течение рабочего дня</p>
                </div>
                <p className="mx-10">или</p>
                <div>
                  <p>Позвоните нам по номеру</p>
                  <a className="text-fill-blue" href="tel:+375291477233">
                    {' '}
                    + 375 (29) 330-20-79{' '}
                  </a>
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
