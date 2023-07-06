import DirectionCard1 from '@/public/DirectionCard1.svg';
import ButtonSecondary from './buttons/ButtonSecondary';

interface DirectionCard {
  img: JSX.Element;
  title: string;
  age: number;
  duration: number;
  cost: number;
  quantity: string;
}

const DirectionCard: DirectionCard[] = [
  {
    img: <DirectionCard1 />,
    title: 'Подготовка к школе',
    age: 5,
    duration: 45,
    cost: 60,
    quantity: '1 месяц',
  },
  {
    img: <DirectionCard1 />,
    title: 'Подготовка к школе',
    age: 5,
    duration: 45,
    cost: 60,
    quantity: '1 месяц',
  },
  {
    img: <DirectionCard1 />,
    title: 'Подготовка к школе',
    age: 5,
    duration: 45,
    cost: 60,
    quantity: '1 месяц',
  },
  {
    img: <DirectionCard1 />,
    title: 'Подготовка к школе',
    age: 5,
    duration: 45,
    cost: 60,
    quantity: '1 месяц',
  },
];

const DirectionCards = () => {
  return (
    <div className="flex flex-row justify-center gap-[24px]">
      {DirectionCard.map((item) => {
        return (
          <div className="w-[312px] h-[434px] rounded-lg bg-local-gray-act flex flex-col p-[30px]">
            {item.img}
            <div className="max-w-[252px] max-h-[133px] pt-[15px] flex flex-col">
              <h4 className="text-twenty">{item.title}</h4>
              <div className="flex flex-row justify-between text-fourteen pt-[25px]">
                <p>Возраст</p>
                <p>от {item.age} лет</p>
              </div>
              <div className="flex flex-row justify-between text-fourteen">
                <p>Длительность</p>
                <p>{item.duration} мин</p>
              </div>
              <div className="flex flex-row text-fourteen justify-between pt-[20px]">
                <p className="text-twenty">{item.cost} BYN</p>
                <p>{item.quantity}</p>
              </div>
              <div className="pt-[30px]">
                <ButtonSecondary
                  width="251px"
                  height="50px"
                  title="Узнать подробнее"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DirectionCards;
