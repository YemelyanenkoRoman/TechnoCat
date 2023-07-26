import DiscountImg from '../public/discount/discount.svg';
import DiscountImg2 from '../public/discount/discount2.svg';
import DiscountImg3 from '../public/discount/discount3.svg';
import Carousel from './Carousel';
import Form from './FormDiscount';

export interface Discount {
  img: JSX.Element;
  title: string;
  textOne: string;
  textTwo?: string;
}

export const discounts: Discount[] = [
  {
    img: <DiscountImg />,
    title: 'Учитесь больше — платите меньше!',
    textOne:
      'Если ваш ребенок ходит на два направления в нашем образовательном центре, то один из них вы можете получить со скидкой 10%.',
    textTwo: 'Спешите записаться на интересующие вас направления и получите выгодное предложение.',
  },
  {
    img: <DiscountImg2 />,
    title: 'Семейная скидка в нашем образовательном центре!',
    textOne:
      'Если у вас двое детей, которые хотят посещать занятия в нашем образовательном центре, то мы дарим вам 10% скидку на одно из них.',
    textTwo: 'Не упустите шанс дать своим детям качественное образование по доступной цене.',
  },
  {
    img: <DiscountImg3 />,
    title: 'Делитесь знаниями с друзьями и экономьте!',
    textOne:
      'Если вы приведете друга в наш образовательный центр, то вы и он получите по 10% скидку на любой курс на целый месяц',
    textTwo: 'Не упусти возможность учиться вместе с теми, кто вам близок, и при этом сэкономить.',
  },
];

const Discount = () => {
  return (
    <div className="m-auto max-w-[1141px] h-[462px] bg-local-gray-act rounded-lg">
      <div className="p-[45px] flex justify-between">
        <Carousel />

        <div className="flex justify-center max-w-[312px] h-[342px] relative">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Discount;
