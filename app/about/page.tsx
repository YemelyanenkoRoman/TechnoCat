import { Breadcrumbs, breadcrumbItems } from '@/components/Breadcrumbs';
import HumanReady from '@/public/aboutPage/human-ready.svg';
import Innovations from '@/public/aboutPage/innovations.svg';
import ActiveStudent1 from '@/public/aboutPage/ActiveStudent1.svg';
import ActiveStudent2 from '@/public/aboutPage/ActiveStudent2.svg';

const About = () => {
  return (
    <div className="font-poppins font-normal text-local-gray-t text-sexteen  mt-[107px]  ">
      {/* Правильное позиционирование */}
      <div className="bg-slate-200">
        <section className="max-w-[1440px] mx-auto">
          <div className="mx-[60px]">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </section>

        <section className="h-[calc(100vh-197px)] pb-[90px] flex flex-col justify-center">
          <div className="mx-[60px] items-center flex flex-col">
            <h1 className="flex font-gilroy  text-forty">Контакты</h1>
            <div className="max-w-[648px] h-[325px] mt-[60px] flex justify-between flex-col">
              <p>
                Образовательный центр ТехноКот — это место, где дети открывают для себя новые возможности, интересы и
                учатся с удовольствием, развивают свой потенциал и творчество.
              </p>
              <p>
                В образовательном центре ТехноКот мы следуем принципам гуманной педагогики, которая ставит в центр
                личность ребенка, его потребности, и деятельностный подход, который делает ученика активным участником
                образовательного процесса, а не пассивным слушателем.
              </p>
              <p>
                У нас есть широкий выбор предметов и направлений для развития разных способностей и навыков ребёнка.
              </p>
              <p>
                Наша команда состоит из профессиональных и вдохновленных преподавателей, которые любят свою работу и
                своих учеников.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Правильное позиционирование */}
      <div />
      <div className="max-w-[1440px] mx-auto">
        <section className=" mt-[90px] flex justify-center">
          <div className="mx-[60px]">
            <h1 className="flex justify-center font-gilroy text-forty ">Наши принципы</h1>
            <h2 className="mt-[70px] font-gilroy text-twentyfive">1. Гуманная педагогика</h2>
            <div className="flex max-w-[1096px] h-[500px] mt-[40px] ">
              <div className="max-w-[424px] h-[428px] flex flex-col justify-between mr-6">
                <p>
                  Мы видим в каждом ребенке уникальный потенциал и уважаем его индивидуальность. Все члены нашей команды
                  ориентированы на интересы, способности и особенности каждого ученика
                </p>
                <p>
                  Мы формируем критическое мышление, креативность и собственный взгляд на мир, но также учим слышать
                  других и ценить их мнения
                </p>
                <p>
                  Для нас очень важна свобода ошибаться и учиться на своих ошибках. Ошибки — это естественная и
                  неотъемлемая часть образовательного процесса, это точки роста
                </p>
                <p>
                  Мы стремимся к гармонии между учебой и детством, потому что учёба — это не подготовка к будущей жизни
                  и работе, это жизнь наших детей здесь и сейчас, и мы хотим, чтобы они были счастливы каждый день
                </p>
              </div>
              <HumanReady />
            </div>
          </div>
        </section>

        <section className="mt-[70px]  flex flex-col items-center mx-[60px]">
          <div className="max-w-[760px] h-[350px]">
            <h2 className="flex justify-center font-gilroy text-twentyfive">2. Инновационность</h2>
            <div className="flex mt-[40px]">
              <Innovations />
              <div className="max-w-[424px] h-[278px] flex flex-col justify-between ml-6">
                <p>
                  Мы используем современные образовательные технологии и постоянно ищем, как повысить эффективность
                  преподавания
                </p>
                <p>
                  Наши преподаватели регулярно повышают свою квалификацию, обмениваются опытом и работают в системе
                  образования
                </p>
                <p>
                  Мы используем авторские образовательные программы, которые основаны на международном опыте, признанных
                  педагогических подходах и научных исследованиях
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[70px] flex items-center mx-[60px]">
          <div className="max-w-[1096px] h-[536px] flex flex-col">
            <h2 className="flex font-gilroy text-twentyfive"> 3. Ученик - активный деятель</h2>
            <div className="flex flex-row mt-[40px]">
              <div className="max-w-[424px] h-[464px] flex flex-col justify-between mr-6">
                <p>
                  Ученики получают новые знания и навыки благодаря личной активности, а не пассивному запоминанию
                  информации.
                </p>
                <p>
                  Нельзя научиться плавать или ездить на велосипеде по учебнику, нужно пробовать, ошибаться, снова
                  пробовать и нарабатывать свой собственный опыт под руководством опытного преподавателя
                </p>
                <p>
                  Вместо того, чтобы давать готовые решения, мы помогаем ребятам научиться учиться и использовать в
                  учебе свои сильные стороны и природный исследовательский интерес
                </p>
                <p>Ученики учатся осознанно ставить для себя учебные цели и планировать свой путь к ним</p>
                <p>
                  Учебная программа построена так, что ученик переходит от успеха к успеху, постоянно расширяя для себя
                  границы возможного
                </p>
              </div>
              <div className="flex">
                <div className="mr-6">
                  <ActiveStudent1 />
                </div>
                <ActiveStudent2 />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[70px]  flex flex-col items-center mx-[60px]">
          <div className="max-w-[760px] h-[350px]">
            <h2 className="flex justify-center font-gilroy text-twentyfive">4. Сообщество</h2>

            <div className=" mt-[40px] max-w-[424px] h-[278px]  ">
              <p>
                Образовательный процесс в образовательном центре ТехноКот строится на искреннем диалоге педагогов и
                учеников. Мы заботимся о дружелюбных и уважительных отношениях между учениками и всеми членами
                образовательного центра ТехноКот.
              </p>
              <p className="mt-6">
                Мы понимаем, что все наши ученики не могут, и не должны быть друг другу близкими друзьями, но в наших
                силах научить их вести уважительный диалог друг с другом, решать конфликтные ситуации без агрессии,
                уметь работать в команде и принимать друг друга такими, какие они есть.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-[70px] mx-[60px] flex flex-col items-center">
          <h3 className=" max-w-[424px] h-[72px]">
            Мы — это дружная и сплоченная команда педагогов и организаторов, которые искренне любят свое дело
          </h3>
        </section>
      </div>
    </div>
  );
};

export default About;
