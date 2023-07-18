import { Breadcrumbs, breadcrumbItems } from '@/components/Breadcrumbs';
import Map from '@/public/map.svg';
import Instagram from '@/public/icons/instagram-16-px.svg';
import Phone from '@/public/icons/phone-24-px.svg';
import Modal from '@/components/Modal';

const Contacts = () => {
  return (
    <div className="font-gilroy font-normal text-local-gray-t text-sexteen  mt-[107px] mx-[60px] h-[calc(100vh-107px)]">
      <section className="pt-10 mb-[30px] font-poppins">
        <Breadcrumbs items={breadcrumbItems} />
      </section>
      <h1 className="flex justify-center text-forty">Контакты</h1>
      <div className="flex justify-between items-center">
        <section className="flex items-center">
          <div>
            <div className="w-[424px] pb-[22px]">
              <p className="text-twenty">Адрес:</p>
              <p className="pt-[15px] text-sexteen">246003, г. Гомель, ул. Кирова, д. 55, каб. 318</p>
            </div>
            <Map />
          </div>
          <div className="w-[194px] h-[190px] ml-[26px]">
            <h2 className="text-twenty">Время работы:</h2>
            <p className="pt-[15px] font-poppins">ежедневно: 9:00-20:30</p>
            <h2 className="pt-10 text-twenty">Мы в соц сетях: </h2>
            <div className="flex items-center font-poppins">
              <Instagram />
              <p className="ml-2">Instagram</p>
            </div>
            <p className="font-poppins text-sm">@techno_cat_gomel</p>
          </div>
        </section>
        <section className="w-[573px] h-[182px]  rounded-lg bg-local-gray-b p-5">
          <h2 className="text-2xl">У вас остались вопросы? </h2>
          <div className="flex mt-[30px]">
            <div>
              <Modal />
              <p className="w-[216px] mt-[10px]">Мы свяжемся с вами в течение рабочего дня</p>
            </div>
            <p className="mx-10">или</p>
            <div>
              <p>Позвоните нам по номеру</p>
              <p>+ 375 (29) 330-20-79</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;
