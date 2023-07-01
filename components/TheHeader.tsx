// import Link from 'next/link';

// const TheHeader = () => {
//   return (
//     <header className="">
//       <nav className="font-poppins ">
//         <Link href="/">О нас</Link>
//         <Link href="/">Контакты</Link>
//         <Link href="/">Направления</Link>
//       </nav>
//     </header>
//   );
// };

// export { TheHeader };

import Link from 'next/link';
import Image from 'next/image';
import PhoneIcon from '../public/icons/phone-24-px.svg';

const links = ['/', '/', '/'];
const linksNames = ['О нас', 'Контакты', 'Направления'];

function TheHeader() {
  return (
    <header className="font-poppins text-local-gray-t text-base bg-local-gray-b  ">
      <div className="max-w-[1440px] mx-auto">
        <nav className="flex justify-between items-center h-[138px] px-[60px]">
          <div className="flex items-center">
            <figure className="mr-[201px]">
              <Image
                priority={true}
                src="/technocat-logo.png"
                width={134}
                height={47}
                alt="Логотип образовательного центра Техно Кот"
              />
            </figure>
            <ul className="flex gap-4 ">
              {linksNames.map((link, index) => (
                <li key={link}>
                  <Link href={link}>{linksNames[index]}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="flex">
              <PhoneIcon className="mr-2" /> Заказать звонок
            </div>
            <div className="flex">+ 375 (29) 330-20-79</div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export { TheHeader };
