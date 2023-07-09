import DiscountImg from '../public/discount/discount.svg';
import Form from './FormDiscount';

interface Discount {
  img: JSX.Element;
  title: string;
  textOne: string;
  textTwo?: string;
}

const DiscountObj: Discount = {
  img: <DiscountImg />,
  title: 'Получите дополнительную скидку на обучение 20%',
  textOne: 'Скидка предоставляется новым клиентам на первое занятие, оформившим заявку на обучение через наш сайт. ',
  textTwo: 'Заполните форму и наши специалисты свяжутся с вами в течение рабочего дня.',
};

const Discount = () => {
  return (
    <div className="m-auto max-w-[1121px] bg-local-gray-act rounded-lg">
      <div className="p-[35px] flex justify-between">
        <figure className="text-thirtyfour">{DiscountObj.img}</figure>
        <div className="max-w-[448px] flex flex-col justify-center items-center">
          <h3 className=" text-thirtyfour">Получите дополнительную скидку на обучение 20%</h3>
          <p className="font-poppins text-sexteen pt-[25px]">
            Скидка предоставляется новым клиентам на первое занятие, оформившим заявку на обучение через наш сайт.{' '}
          </p>
          <p className="font-poppins text-sexteen pt-[15px]">
            Заполните форму и наши специалисты свяжутся с вами в течение рабочего дня.
          </p>
        </div>
        <div className="border-4 border-indigo-600 w-[280px] h-[248px]">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Discount;
