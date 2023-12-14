// import DirectionCard1 from '@/public/DirectionCardImg/DirectionCard1.svg';
// import DirectionCard2 from '@/public/DirectionCardImg/DirectionCard2.svg';
// import DirectionCard3 from '@/public/DirectionCardImg/DirectionCard3.svg';
// import DirectionCard4 from '@/public/DirectionCardImg/DirectionCard4.svg';
// import ButtonSecondary from '../buttons/ButtonSecondary';
// import { v4 as uuidv4 } from 'uuid';
// import Image from 'next/image';
// import Link from 'next/link';

// interface DirectionCard {
//   id: string;

//   img: JSX.Element;
//   title: string;
//   age: number;
//   duration: number;
//   cost: number;
//   quantity: string;
//   bgColorImg: string;
//   bgColorCard: string;
//   colorText: string;

//   buttonBorder: string;
//   buttonBorderActive: string;
//   buttonBorderHover: string;
// }

// const DirectionCard: DirectionCard[] = [
//   {
//     id: 'preparingforschool',

//     img: (
//       <Image
//         src="/DirectionCardImg/DirectionCard1.svg"
//         alt="Ребёнок изучает программирование."
//         width={216}
//         height={173}
//       />
//     ),
//     bgColorImg: 'bg-[#FFC3BA]',
//     bgColorCard: 'bg-fill-pink',
//     colorText: 'text-hover-brown',

//     buttonBorder: 'border-button-brown',
//     buttonBorderActive: 'focus:border-hover-brown',
//     buttonBorderHover: 'hover:border-hover-brown',

//     title: 'Подготовка к школе',
//     age: 5,
//     duration: 45,
//     cost: 60,
//     quantity: '1 месяц',
//   },
//   {
//     id: 'robotics',
//     img: (
//       <Image
//         src="/DirectionCardImg/DirectionCard2.svg"
//         alt="Робот думает и решает логическую задачу."
//         width={167}
//         height={167}
//       />
//     ),
//     bgColorImg: 'bg-[#E2F9FE]',
//     bgColorCard: 'bg-fill-cyan',
//     colorText: 'text-hover-cyan',

//     buttonBorder: 'border-d-blue',
//     buttonBorderActive: 'focus:border-fill-blue',
//     buttonBorderHover: 'hover:border-hover-cyan',

//     title: 'Робототехника',
//     age: 5,
//     duration: 45,
//     cost: 60,
//     quantity: '1 месяц',
//   },
//   {
//     id: 'english',
//     img: (
//       <Image
//         src="/DirectionCardImg/DirectionCard3.svg"
//         alt="Люди свободно общаются на английском языке."
//         width={177}
//         height={177}
//       />
//     ),
//     bgColorImg: 'bg-[#EAD46F]',
//     bgColorCard: 'bg-fill-yelow',
//     colorText: 'text-hover-yellow',

//     buttonBorder: 'border-button-yellow',
//     buttonBorderActive: 'focus:border-hover-yellow',
//     buttonBorderHover: 'hover:border-hover-yellow',

//     title: 'Английский язык',
//     age: 5,
//     duration: 45,
//     cost: 60,
//     quantity: '1 месяц',
//   },
//   {
//     id: 'firstgradestudent',
//     img: (
//       <Image
//         src="/DirectionCardImg/DirectionCard4.svg"
//         alt="Ребёнок думает и придумывает разные идеи."
//         width={177}
//         height={177}
//       />
//     ),
//     bgColorImg: 'bg-[#A4EAA0]',
//     bgColorCard: 'bg-fill-green',
//     colorText: 'text-hover-green',

//     buttonBorder: 'border-button-green',
//     buttonBorderActive: 'focus:border-hover-green',
//     buttonBorderHover: 'hover:border-hover-green',

//     title: 'Помощь первокласснику',
//     age: 5,
//     duration: 45,
//     cost: 60,
//     quantity: '1 месяц',
//   },
// ];

// const DirectionCards = () => {
//   return (
//     <div className="flex flex-row justify-center gap-[24px]">
//       {DirectionCard.map((item) => {
//         return (
//           <div
//             key={uuidv4()}
//             className={`w-[312px] h-[434px] rounded-lg ${item.bgColorCard} ${item.colorText} flex flex-col p-[30px]`}
//           >
//             <div className={`relative ${item.bgColorImg} w-[252px] h-[146px] rounded-lg`}>
//               <div className=" flex justify-center">
//                 <div className="absolute bottom-0">{item.img}</div>
//               </div>
//             </div>
//             <div className="max-w-[252px] max-h-[133px] pt-[15px] flex flex-col">
//               <h4 key={uuidv4()} className="text-twenty">
//                 {item.title}
//               </h4>
//               <div className="flex flex-row justify-between text-fourteen pt-[25px]">
//                 <p>Возраст</p>
//                 <p key={uuidv4()}>от {item.age} лет</p>
//               </div>
//               <div className="flex flex-row justify-between text-fourteen">
//                 <p>Длительность</p>
//                 <p key={uuidv4()}>{item.duration} мин</p>
//               </div>
//               <div className="flex flex-row text-fourteen justify-between pt-[20px]">
//                 <p key={uuidv4()} className="text-twenty">
//                   {item.cost} BYN
//                 </p>
//                 <p key={uuidv4()}>{item.quantity}</p>
//               </div>
//               <div className="pt-[30px]">
//                 <Link href={`/directions/${item.id}`}>
//                   <ButtonSecondary
//                     type={'button'}
//                     width="251px"
//                     height="50px"
//                     title="Узнать подробнее"
//                     backgroundColor={item.buttonBorder}
//                     bgHover={item.buttonBorderHover}
//                     focus={item.buttonBorderActive}
//                     textColor={item.colorText}
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default DirectionCards;
