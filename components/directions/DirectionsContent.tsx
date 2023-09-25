import Programming from '@/public/DirectionsPages/Programming.svg';
import Robotics from '@/public/DirectionsPages/Robotics.svg';
import English from '@/public/DirectionsPages/English.svg';
import Preparingforschool from '@/public/DirectionsPages/Preparingforschool.svg';
import Firstgradestudent from '@/public/DirectionsPages/Firstgradestudent.svg';
import Image from 'next/image';

interface block1 {
  mainImage: JSX.Element;
  mainTitle: string;
  subTitle?: string;
  whatStudyTitle: string;
  whatStudyParagraph: string;
  whatTeachTitle: string;
  whatTeachParagraph: string;
  price: number;
  numberLessons: string;
  time: number;
  startClasses?: string;
  discount?: string;
}

interface subBlock21 {
  title: string;
  paragraph1: string;
  paragraph2?: string;
}

interface subBlock22 {
  mainTitle: string;
  subMainTitle?: string;
  subTitle1?: string;
  paragraph1: string;
  subTitle2?: string;
  paragraph2?: string;
}

interface subBlock32 {
  mainTitle: string;
  paragraph1: string;
  paragraph2?: string;
  paragraph3?: string;
}

interface block2 {
  subBlock21: subBlock21;
  subBlock22: subBlock22;
  subBlock23: subBlock23and31;
}

interface subBlock23and31 {
  title: string;
  paragraphs: string[];
}

interface block3 {
  subBlock31: subBlock23and31;
  subBlock32: subBlock32;
}

interface DirectionContent {
  id: string;
  block1: block1;
  block2: block2;
  block3: block3;
}

export const DirectionsContent: DirectionContent[] = [
  {
    //ПРОГРАММИРОВАНИЕ
    id: 'programming',

    block1: {
      // mainImage: <Programming />,
      mainImage: (
        <Image
          src="/DirectionsPages/Programming.svg"
          alt="Программист"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      ),
      mainTitle: 'Программирование',
      subTitle: 'для самых маленьких',
      whatStudyTitle: 'Что изучаем?',
      whatStudyParagraph:
        'Включает изучение математики, основ программирования, графики, простых алгоритмов через визуальное програмиирование.',
      whatTeachTitle: 'Чему научим?',
      whatTeachParagraph:
        'Ребенок научится создавать интересные игры и мультфильмы с любимыми героями и захватыващим сюжетом.',
      price: 60,
      numberLessons: '1 месяц',
      time: 60,
      startClasses: '01.08.2023',
      discount: 'При посещении 2-х и более направлений предоставляем скидку 20%',
    },

    block2: {
      subBlock21: {
        title: 'О направлении',
        paragraph1:
          'Программирование для самых маленьких – это занимательный способ познакомить детей с изучением компьютерной науки и техники. Это простой способ привить детям любовь к учёбе, изучению и познанию нового.',
        paragraph2:
          'Заниматься программированием в детстве очень важно, потому что изучение программирования помогает развитию всех направлений мышления. Это помогает детям развиваться быстрее, делает их более уверенными в себе и помогает им понимать мир, в котором они живут.',
      },
      subBlock22: {
        mainTitle: 'С чего начинаем обучение?',
        subMainTitle: 'Мы начинаем обучение со знакомства с компьютером и простых и понятных программ:',
        subTitle1: 'Scratch',
        paragraph1:
          'В этой программе дети научаться создавать простые алгоритмы, по средствам создания анимации и мультиков, ведь изучать программирование играя гораздо проще и веселее.',
        subTitle2: 'Minecraft',
        paragraph2:
          'В Minecraft есть возможность учиться программировать как на языке Lua, так и с помощью визуальных блоков. Так, через игру в Minecraft ребёнок сможет изучить основы программирования.',
      },
      subBlock23: {
        title: 'Как проходит обучение',
        paragraphs: [
          'В нашем образовательном центре обучение программированию проходит небольшими группами. Мы уделяем внимание каждому ребёнку и следим, чтобы каждый усвоил материал, полученный на уроке.',
          'Мы преподносим информацию доступным и понятным языком, у нас работают профессионалы, имеющие не только образование в сфере информационных технологий, но и педагогическое образование.',
          'Мы используем обучающую платформу с большим количеством заданий и подсказок, выполняя которые ребёнок будет развиваться как программист, ведь начнёт с изучения простых алгоритмов, продолжит изучение языка Pascal и постепенно начнёт изучать язык программирования Python.',
        ],
      },
    },

    block3: {
      subBlock31: {
        title: 'Что даст вашему ребенку изучение программирования в детстве?',
        paragraphs: [
          'Развитие креативности и умения решать задачи',
          'Повышение концентрации и самодисциплины',
          'Увлекательное и полезное времяпрепровождение',
          'Поддержка в развитии математического мышления',
          'Подготовка к карьере в области технологии',
        ],
      },
      subBlock32: {
        mainTitle: 'Участие в соревнованиях',
        paragraph1:
          'Так же дети, которые занимаются у нас, принимают участие в различных соревнованиях и олимпиадах по программированию, это стимулирует изучать программирование и развиваться дальше.',
      },
    },
  },

  {
    // РОБОТОТЕХНИКА
    id: 'robotics',

    block1: {
      // mainImage: <Robotics />,
      mainImage: (
        <Image
          src="/DirectionsPages/Robotics.svg"
          alt="Робот"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      ),
      mainTitle: 'Робототехника',
      subTitle: 'Мини группы',
      whatStudyTitle: 'Что изучаем?',
      whatStudyParagraph: 'Основы робототехники, Сборка и программирование роботов. Развитие технических навыков.',
      whatTeachTitle: 'Чему научим?',
      whatTeachParagraph:
        'Ребенок научится создавать и программировать своих собственных роботов, развивать логическое мышление, проблемное решение и творческое мышление.',
      price: 60,
      numberLessons: '1 месяц',
      time: 60,
      startClasses: '01.08.2023',
      discount: 'При посещении 2-х и более направлений предоставляем скидку 20%',
    },

    block2: {
      subBlock21: {
        title: 'О направлении',
        paragraph1:
          'В рамках программы обучения, дети научатся собирать и программировать различные типы роботов, развивая свои навыки мелкой моторики.  ',
        paragraph2:
          'Дети будут учиться контролировать движения роботов, точно настраивать их действия и реагировать на окружающую среду. Обучение робототехнике поможет вашему ребенку развить ловкость рук, координацию движений и улучшить мелкую моторику.',
      },
      subBlock22: {
        mainTitle: 'С чего начинаем обучение?',
        subMainTitle:
          'Мы начинаем обучение со знакомства с конструктором WeDo 2.0 и компьютерных программ для программирования логики сконструированных роботов :',
        subTitle1: 'Scratch',
        paragraph1:
          'В этой программе дети научаться создавать простые алгоритмы и написать логику своим первым сконструированным роботам.',
        subTitle2: 'WeDo 2.0',
        paragraph2:
          'Это по-настоящему уникальная платформа, которая позволяет изучить основы робототехники с искренним интересом и удовольствием.',
      },
      subBlock23: {
        title: 'Как проходит обучение',
        paragraphs: [
          'Во время занятий дети будут активно участвовать в сборке и программировании роботов, используя специальные платформы и инструменты. Они научатся работать с различными датчиками, моторами и контроллерами, чтобы создавать уникальные и функциональные роботы.',
          'Наша программа обучения разделена на уровни, чтобы каждый ребенок мог пройти обучение в соответствии с своими навыками и возрастом. Мы ставим акцент на практических заданиях и проектах, которые помогут детям применить свои знания на практике и развить творческое мышление.',
          'Кроме того, мы поощряем коллективную работу и командное взаимодействие. Дети будут работать в группах, обмениваясь идеями, решая задачи и достигая общих целей. Это поможет им развить навыки коммуникации, сотрудничества и лидерства.',
        ],
      },
    },

    block3: {
      subBlock31: {
        title: 'Что даст вашему ребенку изучение робототехники?',
        paragraphs: [
          'Развитие логического мышления',
          'Стимулирование творческого мышления',
          'Развитие навыков командной работы',
          'Подготовка к будущим технологиям',
          'Развитие проблемно-ориентированного мышления',
          'Стимулирование интереса к науке и технологиям',
          'Развитие уверенности и самооценки',
        ],
      },
      subBlock32: {
        mainTitle: 'Участие в соревнованиях',
        paragraph1:
          'Так же дети, которые занимаются у нас, принимают участие в различных соревнованиях по робототехнике, это стимулирует заниматься и развиваться дальше.',
      },
    },
  },

  {
    // АНГЛИЙСКИЙ ЯЗЫК
    id: 'english',

    block1: {
      // mainImage: <English />,
      mainImage: (
        <Image
          src="/DirectionsPages/English.svg"
          alt="Люди разговаривают на английском языке"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      ),
      mainTitle: 'Английский язык',
      subTitle: 'учи английский язык играя',
      whatStudyTitle: 'Что изучаем?',
      whatStudyParagraph:
        'Включает изучение математики, основ программирования, графики, простых алгоритмов через визуальное програмиирование.',
      whatTeachTitle: 'Чему научим?',
      whatTeachParagraph:
        'Ребенок научится создавать интересные игры и мультфильмы с любимыми героями и захватыващим сюжетом.',
      price: 60,
      numberLessons: '1 месяц',
      time: 60,
      startClasses: '01.08.2023',
      discount: 'При посещении 2-х и более направлений предоставляем скидку 20%',
    },

    block2: {
      subBlock21: {
        title: 'О направлении',
        paragraph1:
          'Программирование для самых маленьких – это занимательный способ познакомить детей с изучением компьютерной науки и техники. Это простой способ привить детям любовь к учёбе, изучению и познанию нового.',
        paragraph2:
          'Заниматься программированием в детстве очень важно, потому что изучение программирования помогает развитию всех направлений мышления. Это помогает детям развиваться быстрее, делает их более уверенными в себе и помогает им понимать мир, в котором они живут.',
      },
      subBlock22: {
        mainTitle: 'С чего начинаем обучение?',
        subMainTitle: 'Мы начинаем обучение со знакомства с компьютером и простых и понятных программ:',
        subTitle1: 'Scratch',
        paragraph1:
          'В этой программе дети научаться создавать простые алгоритмы, по средствам создания анимации и мультиков, ведь изучать программирование играя гораздо проще и веселее.',
        subTitle2: 'Minecraft',
        paragraph2:
          'В Minecraft есть возможность учиться программировать как на языке Lua, так и с помощью визуальных блоков. Так, через игру в Minecraft ребёнок сможет изучить основы программирования.',
      },
      subBlock23: {
        title: 'Как проходит обучение',
        paragraphs: [
          'В нашем образовательном центре обучение программированию проходит небольшими группами. Мы уделяем внимание каждому ребёнку и следим, чтобы каждый усвоил материал, полученный на уроке.',
          'Мы преподносим информацию доступным и понятным языком, у нас работают профессионалы, имеющие не только образование в сфере информационных технологий, но и педагогическое образование.',
          'Мы используем обучающую платформу с большим количеством заданий и подсказок, выполняя которые ребёнок будет развиваться как программист, ведь начнёт с изучения простых алгоритмов, продолжит изучение языка Pascal и постепенно начнёт изучать язык программирования Python.',
        ],
      },
    },

    block3: {
      subBlock31: {
        title: 'Что даст вашему ребенку изучение программирования в детстве?',
        paragraphs: [
          'Развитие креативности и умения решать задачи',
          'Повышение концентрации и самодисциплины',
          'Увлекательное и полезное времяпрепровождение',
          'Поддержка в развитии математического мышления',
          'Подготовка к карьере в области технологии',
        ],
      },
      subBlock32: {
        mainTitle: 'Участие в соревнованиях',
        paragraph1:
          'Так же дети, которые занимаются у нас, принимают участие в различных соревнованиях и олимпиадах по программированию, это стимулирует изучать программирование и развиваться дальше.',
      },
    },
  },

  {
    // ПОДГОТОВКА К ШКОЛЕ
    id: 'preparingforschool',

    block1: {
      // mainImage: <Preparingforschool />,
      mainImage: (
        <Image
          src="/DirectionsPages/Preparingforschool.svg"
          alt="Ребёнок делает уроки"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      ),
      mainTitle: 'Подготовка к школе',
      subTitle: '',
      whatStudyTitle: 'Чему научим?',
      whatStudyParagraph:
        'Мы поможем вашему ребенку освоить основные навыки и знания, необходимые для успешного старта в школьной среде.',
      whatTeachTitle: 'Чему уделяем внимание?',
      whatTeachParagraph:
        'Мы уделяем особое внимание развитию речи, чтению, письму, математике и социальным навыкам, чтобы ваш ребенок чувствовал себя уверенно и готов к новым учебным вызовам.',
      price: 60,
      numberLessons: '1 месяц',
      time: 60,
      startClasses: '01.08.2023',
      discount: 'При посещении 2-х и более направлений предоставляем скидку 20%',
    },

    block2: {
      subBlock21: {
        title: 'О направлении',
        paragraph1:
          'Мы фокусируемся на развитии навыков чтения, письма, математики и логического мышления, используя интересные и инновационные методы обучения. Наши опытные преподаватели помогут вашему ребенку развить социальные навыки, самостоятельность и уверенность в себе, чтобы они могли успешно взаимодействовать с другими детьми и достигать успехов в учебе.',
        paragraph2:
          'Мы стремимся создать прочную основу для будущего образования вашего ребенка и помочь им начать школьную жизнь с уверенностью и радостью.',
      },
      subBlock22: {
        mainTitle: 'С чего начинаем обучение?',
        subMainTitle: 'Мы начинаем обучение со знакомства с компьютером и простых и понятных программ:',
        subTitle1: 'Scratch',
        paragraph1:
          'В этой программе дети научаться создавать простые алгоритмы, по средствам создания анимации и мультиков, ведь изучать программирование играя гораздо проще и веселее.',
        subTitle2: 'Minecraft',
        paragraph2:
          'В Minecraft есть возможность учиться программировать как на языке Lua, так и с помощью визуальных блоков. Так, через игру в Minecraft ребёнок сможет изучить основы программирования.',
      },
      subBlock23: {
        title: 'Как проходит обучение',
        paragraphs: [
          'Дети осваивают основные навыки и знания, необходимые для успешного старта в школьной среде. Обучение проходит через интерактивные занятия, игры и творческие проекты. Преподаватели используют доступный язык и индивидуальный подход к каждому ребенку.',
          'Занятия проводятся в небольших группах, чтобы обеспечить индивидуальное внимание и поддержку.',
          'В конце обучения проводятся мероприятия, где дети могут продемонстрировать свои достижения.',
        ],
      },
    },

    block3: {
      subBlock31: {
        title: 'подготовка к школе дает ребенку следующие преимущества:',
        paragraphs: [
          'Уверенность и готовность',
          'Развитие когнитивных навыков',
          'Подготовка к учебному процессу',
          'Развитие коммуникативных навыков',
          'Подготовка к карьере в области технологии',
          'Подготовка к самоорганизации',
        ],
      },
      subBlock32: {
        mainTitle: 'Участие в соревнованиях',
        paragraph1:
          'Так же дети, которые занимаются у нас, принимают участие в различных соревнованиях и олимпиадах по программированию, это стимулирует изучать программирование и развиваться дальше.',
      },
    },
  },

  {
    // ПОМОЩЬ ПЕРВОКЛАССНИКУ
    id: 'firstgradestudent',

    block1: {
      // mainImage: <Firstgradestudent />,
      mainImage: (
        <Image
          src="/DirectionsPages/Firstgradestudent.svg"
          alt="Умный ребёнок"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      ),
      mainTitle: 'Помощь первокласснику',
      subTitle: 'Помощь первокласснику!!!',
      whatStudyTitle: 'Что изучаем?',
      whatStudyParagraph:
        'Включает изучение математики, основ программирования, графики, простых алгоритмов через визуальное програмиирование.',
      whatTeachTitle: 'Чему научим?',
      whatTeachParagraph:
        'Ребенок научится создавать интересные игры и мультфильмы с любимыми героями и захватыващим сюжетом.',
      price: 60,
      numberLessons: '1 месяц',
      time: 60,
      startClasses: '01.08.2023',
      discount: 'При посещении 2-х и более направлений предоставляем скидку 20%',
    },

    block2: {
      subBlock21: {
        title: 'О направлении',
        paragraph1:
          'Программирование для самых маленьких – это занимательный способ познакомить детей с изучением компьютерной науки и техники. Это простой способ привить детям любовь к учёбе, изучению и познанию нового.',
        paragraph2:
          'Заниматься программированием в детстве очень важно, потому что изучение программирования помогает развитию всех направлений мышления. Это помогает детям развиваться быстрее, делает их более уверенными в себе и помогает им понимать мир, в котором они живут.',
      },
      subBlock22: {
        mainTitle: 'С чего начинаем обучение?',
        subMainTitle: 'Мы начинаем обучение со знакомства с компьютером и простых и понятных программ:',
        subTitle1: 'Scratch',
        paragraph1:
          'В этой программе дети научаться создавать простые алгоритмы, по средствам создания анимации и мультиков, ведь изучать программирование играя гораздо проще и веселее.',
        subTitle2: 'Minecraft',
        paragraph2:
          'В Minecraft есть возможность учиться программировать как на языке Lua, так и с помощью визуальных блоков. Так, через игру в Minecraft ребёнок сможет изучить основы программирования.',
      },
      subBlock23: {
        title: 'Как проходит обучение',
        paragraphs: [
          'В нашем образовательном центре обучение программированию проходит небольшими группами. Мы уделяем внимание каждому ребёнку и следим, чтобы каждый усвоил материал, полученный на уроке.',
          'Мы преподносим информацию доступным и понятным языком, у нас работают профессионалы, имеющие не только образование в сфере информационных технологий, но и педагогическое образование.',
          'Мы используем обучающую платформу с большим количеством заданий и подсказок, выполняя которые ребёнок будет развиваться как программист, ведь начнёт с изучения простых алгоритмов, продолжит изучение языка Pascal и постепенно начнёт изучать язык программирования Python.',
        ],
      },
    },

    block3: {
      subBlock31: {
        title: 'Что даст вашему ребенку изучение программирования в детстве?',
        paragraphs: [
          'Развитие креативности и умения решать задачи',
          'Повышение концентрации и самодисциплины',
          'Увлекательное и полезное времяпрепровождение',
          'Поддержка в развитии математического мышления',
          'Подготовка к карьере в области технологии',
        ],
      },
      subBlock32: {
        mainTitle: 'Участие в соревнованиях',
        paragraph1:
          'Так же дети, которые занимаются у нас, принимают участие в различных соревнованиях и олимпиадах по программированию, это стимулирует изучать программирование и развиваться дальше.',
      },
    },
  },

  {
    //РИСОВАНИЕ
    id: 'painting',

    block1: {
      mainImage: (
        <Image
          src="/DirectionsPages/Painting.svg"
          alt="Художник, графический дизайнер"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      ),
      mainTitle: 'Рисование',
      subTitle: 'и основы графического дизайна',
      whatStudyTitle: 'Что изучаем?',
      whatStudyParagraph:
        'Основные техники рисования, такие как перспектива, тени и композиция, также дети будут изучать основы графического дизайна, включая композицию, цветовую теорию и типографику.',
      whatTeachTitle: 'Чему научим?',
      whatTeachParagraph:
        'Видеть мир вокруг себя с новой перспективы и находить вдохновение во всем, использовать изображения и дизайн для передачи сообщений и идей, анализировать и оценивать свои работы и работы других, чтобы постоянно совершенствоваться и расти как художники и дизайнеры.',
      price: 60,
      numberLessons: '1 месяц',
      time: 60,
      startClasses: '01.08.2023',
      discount: 'При посещении 2-х и более направлений предоставляем скидку 20%',
    },

    block2: {
      subBlock21: {
        title: 'О направлении',
        paragraph1:
          'В рамках программы обучения, дети изучают основы рисования, включая техники, перспективу и композицию. Они также погружаются в мир графического дизайна, изучая композицию, цветовую теорию и типографику. ',
        paragraph2:
          'Наши занятия развивают творческое мышление, визуальную коммуникацию и критическое мышление у детей.',
      },
      subBlock22: {
        mainTitle: 'С чего начинаем обучение?',
        subMainTitle: 'Мы начинаем обучение со знакомства с компьютером и простых и понятных программ:',
        subTitle1: 'Scratch',
        paragraph1:
          'В этой программе дети научаться создавать простые алгоритмы, по средствам создания анимации и мультиков, ведь изучать программирование играя гораздо проще и веселее.',
        subTitle2: 'Minecraft',
        paragraph2:
          'В Minecraft есть возможность учиться программировать как на языке Lua, так и с помощью визуальных блоков. Так, через игру в Minecraft ребёнок сможет изучить основы программирования.',
      },
      subBlock23: {
        title: 'Как проходит обучение',
        paragraphs: [
          'Групповые занятия: Дети учатся в небольших группах, где каждому уделяется внимание и поддержка преподавателя. Групповые занятия способствуют взаимодействию, обмену идеями и сотрудничеству между учениками.',
          'Практические задания: во время занятий дети активно применяют полученные знания и навыки на практике. Они выполняют практические задания, решают задачи и создают собственные проекты, что помогает им закрепить материал и развить творческое мышление.',
          'Интерактивные упражнения: Обучение включает интерактивные упражнения, игры и задания, которые делают процесс обучения увлекательным и интересным. Это помогает детям лучше усваивать информацию и развивать свои навыки в игровой форме.',
        ],
      },
    },

    block3: {
      subBlock31: {
        title: 'Что дадут вашему ребёнку занятия рисованием?',
        paragraphs: [
          'Развитие творческого мышления',
          'Развитие навыков визуальной коммуникации',
          'Развитие навыков наблюдения и внимания к деталям',
          'Улучшение моторики и координации движений',
          'Увлекательное и приятное времяпрепровождение',
        ],
      },
      subBlock32: {
        mainTitle: 'Участие в матер-классах',
        paragraph1:
          'Так же дети, которые занимаются у нас, принимают участие в различных мастер-классах по рисованию, это стимулирует их развиваться дальше.',
      },
    },
  },
];
