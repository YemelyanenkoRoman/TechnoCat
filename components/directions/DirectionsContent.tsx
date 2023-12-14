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
      price: 95,
      numberLessons: 'за 1 месяц',
      time: 60,
      startClasses: 'Два занятия в неделю',
      discount: 'При посещении 2-х и более направлений предоставляем скидку 5%',
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
      subTitle: 'Робототехника - это творчесво и инженерия.',
      whatStudyTitle: 'Что развиваем и изучаем на робототехнике?',
      whatStudyParagraph:
        'Изучаем: Основы робототехники, конструирование, программирование роботов. Развиваем: Технические навыки, мелкую моторику.',
      whatTeachTitle: 'Чему научим?',
      whatTeachParagraph:
        'Ребенок научится собирать и управлять роботами из специальных конструкторов WeDo 2.0, а также программировать их.',
      price: 85,
      numberLessons: 'за 1 месяц',
      time: 60,
      startClasses: 'Одно занятие в неделю',
      discount: 'При посещении 2-х и более направлений предоставляем скидку 5%',
    },

    block2: {
      subBlock21: {
        title: 'О направлении',
        paragraph1:
          'В рамках программы обучения дети научатся собирать и программировать различные типы роботов из наборов WeDo, развивая свои навыки в конструировании и программировании роботов.',
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
          'Это по-настоящему уникальный конструкор, который позволяет изучить основы робототехники с искренним интересом и удовольствием.',
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
        mainTitle: 'О занятиях',
        paragraph1:
          'Мы рады помогать каждому ребенку развивать алгоритмическое мышление и технические навыки. На занятиях мы учимся создавать роботов и программировать их. Наши инструкторы умеют заинтересовать, научить.',
      },
    },
  },

  {
    // МЕНТАЛЬНАЯ АРИФМЕТИКА
    id: 'mentalarithmetic',

    block1: {
      mainImage: (
        <Image
          src="/DirectionsPages/Mental.svg"
          alt="Ментальная арифметика"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      ),
      mainTitle: 'Ментальная арифметика',
      subTitle: 'учимся считать с улыбкой',
      whatStudyTitle: 'Что развиваем?',
      whatStudyParagraph: 'Развиваем моторику, внимание, творческие, математические и аналитические способности.',
      whatTeachTitle: 'Чему научим?',
      whatTeachParagraph:
        'Дети погружаются в мир основ счета, используя абакус. У нас они не просто знакомятся с числами, но и учатся владеть базовыми математическими операциями, развивают аналитические навыки.',
      price: 75,
      numberLessons: 'за 1 месяц',
      time: 60,
      startClasses: 'Два занятия в неделю',
      discount: 'При посещении 2-х и более направлений предоставляем скидку 5%',
    },

    block2: {
      subBlock21: {
        title: 'О направлении',
        paragraph1:
          'В нашем Образовательном центре "Техно Кот" мы предлагаем захватывающий курс, где дети могут через игру и веселое взаимодействие с абакусом погрузиться в увлекательный мир математики.',
        paragraph2:
          'Мы создаем пространство, где обучение становится неотъемлемой частью игры, вдохновляя малышей на радостное открытие новых математических концепций и их практическое применение. В результате, дети не только учатся, но и весело взаимодействуют с числами, развивая любознательность и интерес к учебе.',
      },
      subBlock22: {
        mainTitle: 'С чего начинаем обучение?',
        subMainTitle: 'Мы начинаем обучение со знакомства с абакусом:',
        subTitle1: 'Абакус',
        paragraph1:
          'Абакус - это классический счетный инструмент, состоящий из перемещаемых бусин, который используется для проведения операций в ментальной арифметике.',
        subTitle2: 'Обучение счёту',
        paragraph2:
          'Обучение счёту на абакусе - это увлекательный способ развить навык счёта у детей. Абакус помогает визуализировать числа и развивает математическое мышление.',
      },
      subBlock23: {
        title: 'Как проходит обучение',
        paragraphs: [
          'Наши уроки по математике с использованием абакуса представляют собой захватывающее взаимодействие с этим уникальным инструментом в форме игры. Дети, перемещая бусины на абакусе, не только обучаются счету, но и развивают моторику своих рук, повышая координацию движений.',
          'Мы также внедряем игровые сценарии и интересные задачи в уроки. Это позволяет детям применять свои знания на практике, расширяя область их применения и погружая их в веселые математические вызовы.',
          'В итоге, наши занятия не только обучают, но и вдохновляют детей на активное применение математических навыков в разнообразных ситуациях.',
        ],
      },
    },

    block3: {
      subBlock31: {
        title: 'Какая польза для ребенка от занятий мантальной арифметикой?',
        paragraphs: [
          'Освоение базовых навыков счета.',
          'Развитие логического мышления и уверенности в математике.',
          'Понимание абстрактных понятий чисел.',
          'Улучшение координации движений и моторики рук.',
          'Подготовка к более сложным математическим задачам в обучении.',
        ],
      },
      subBlock32: {
        mainTitle: 'Мир математики',
        paragraph1:
          'Наши уроки по счету на абакусе — это первый шаг вашего ребенка в увлекательный мир математики. Этот опыт не только подготовит их к школьному курсу, но и создаст основу для развития аналитического мышления и любви к науке.',
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
      subTitle: 'Бережно готовим к школьным высотам: вашему ребенку – яркое будущее!',
      whatStudyTitle: 'Что изучаем?',
      whatStudyParagraph: 'Математику и логику, учимся письму и чтению, развиваем память и внимание.',
      whatTeachTitle: 'Чему научим?',
      whatTeachParagraph:
        'Ребенок к первому классу научиться читать и пересказывать тексты, писать в тетради печатными буквами, а также считать.',
      price: 85,
      numberLessons: 'за 1 месяц',
      time: 60,
      startClasses: 'Два занятия в неделю',
      discount: 'При посещении 2-х и более направлений предоставляем скидку 5%',
    },

    block2: {
      subBlock21: {
        title: 'О направлении',
        paragraph1:
          'Подготовка к школе - это важный этап в жизни ребенка, который поможет ему успешно адаптироваться к новой среде обучения. Это направление включает в себя различные аспекты, начиная от развития когнитивных навыков до социальной адаптации.',
        paragraph2:
          'Одним из ключевых аспектов подготовки к школе является развитие навыков чтения, письма и математики. Ребенок должен быть готов к освоению новых знаний и умений, которые будут необходимы для успешного обучения в школе. Для этого можно использовать специальные образовательные программы и игры, которые помогут развить у ребенка необходимые навыки.',
      },
      subBlock22: {
        mainTitle: 'С чего начинаем обучение?',
        subMainTitle:
          'Подготовка к школе начинается с развития когнитивных навыков, таких как чтение, письмо и математика. Ребенку нужно научиться узнавать буквы, цифры, различать цвета и формы, а также развивать мелкую моторику рук.',
        subTitle1: 'Результат',
        paragraph1: 'Мы используем только те приёмы обучения чтению и математике, которые дают высокий результат.',
        subTitle2: 'Целеустремленность',
        paragraph2:
          'Каждое занятие включает специальную систему развития внимания и запоминания, чтобы ребёнок хорошо усваивал информацию и научился доводить начатое до конца.',
      },
      subBlock23: {
        title: 'Применяемые методики',
        paragraphs: [
          'Подготовку к школе необходимо начинать заблаговременно и проводить постепенно. Так ребенок лучше усвоит материал в удобном для него темпе. Основная цель наших занятий: формирование у детей желания учиться, развитие внимания, памяти и мышления, чувства ответственности. ',
          'В ходе занятий, дети осваивают искусство грамотной речи и конструирования фраз, учатся чтению и интерпретации прочитанного, а также развивают навыки работы с числами.',
          'Мы стимулируем творческий потенциал и развиваем уникальные способности каждого ребенка. Подготовка к школьному обучению осуществляется под руководством опытных педагогов, при необходимости к процессу привлекаются специалисты-психолог и логопед.',
        ],
      },
    },

    block3: {
      subBlock31: {
        title: 'Что даст вашему ребенку подготовка к школе?',
        paragraphs: [
          'Читать и писать все буквы алфавита',
          'Выполнить звуковой анализ слова',
          'Определить различия в парах звуков',
          'Читать слова и небольшие предложения',
          'Определять местоположение звука в слове, первый/последний звук',
        ],
      },
      subBlock32: {
        mainTitle: 'Методы, которые использует педагог',
        paragraph1:
          'Педагог использует индивидуальный подход, разнообразные материалы и сотрудничество с родителями для подготовки детей к школе.',
      },
    },
  },

  // {
  //   // ПОМОЩЬ ПЕРВОКЛАССНИКУ
  //   id: 'firstgradestudent',

  //   block1: {
  //     // mainImage: <Firstgradestudent />,
  //     mainImage: (
  //       <Image
  //         src="/DirectionsPages/Firstgradestudent.svg"
  //         alt="Умный ребёнок"
  //         width={0}
  //         height={0}
  //         sizes="100vw"
  //         className="w-full h-auto"
  //       />
  //     ),
  //     mainTitle: 'Помощь первокласснику',
  //     subTitle: 'Помощь первокласснику!!!',
  //     whatStudyTitle: 'Что изучаем?',
  //     whatStudyParagraph:
  //       'Включает изучение математики, основ программирования, графики, простых алгоритмов через визуальное програмиирование.',
  //     whatTeachTitle: 'Чему научим?',
  //     whatTeachParagraph:
  //       'Ребенок научится создавать интересные игры и мультфильмы с любимыми героями и захватыващим сюжетом.',
  //     price: 60,
  //     numberLessons: '1 месяц',
  //     time: 60,
  //     startClasses: '01.08.2023',
  //     discount: 'При разовом посещении стоимость одного занятия составляет 15 рублей',
  //   },

  //   block2: {
  //     subBlock21: {
  //       title: 'О направлении',
  //       paragraph1:
  //         'Программирование для самых маленьких – это занимательный способ познакомить детей с изучением компьютерной науки и техники. Это простой способ привить детям любовь к учёбе, изучению и познанию нового.',
  //       paragraph2:
  //         'Заниматься программированием в детстве очень важно, потому что изучение программирования помогает развитию всех направлений мышления. Это помогает детям развиваться быстрее, делает их более уверенными в себе и помогает им понимать мир, в котором они живут.',
  //     },
  //     subBlock22: {
  //       mainTitle: 'С чего начинаем обучение?',
  //       subMainTitle: 'Мы начинаем обучение со знакомства с компьютером и простых и понятных программ:',
  //       subTitle1: 'Scratch',
  //       paragraph1:
  //         'В этой программе дети научаться создавать простые алгоритмы, по средствам создания анимации и мультиков, ведь изучать программирование играя гораздо проще и веселее.',
  //       subTitle2: 'Minecraft',
  //       paragraph2:
  //         'В Minecraft есть возможность учиться программировать как на языке Lua, так и с помощью визуальных блоков. Так, через игру в Minecraft ребёнок сможет изучить основы программирования.',
  //     },
  //     subBlock23: {
  //       title: 'Как проходит обучение',
  //       paragraphs: [
  //         'В нашем образовательном центре обучение программированию проходит небольшими группами. Мы уделяем внимание каждому ребёнку и следим, чтобы каждый усвоил материал, полученный на уроке.',
  //         'Мы преподносим информацию доступным и понятным языком, у нас работают профессионалы, имеющие не только образование в сфере информационных технологий, но и педагогическое образование.',
  //         'Мы используем обучающую платформу с большим количеством заданий и подсказок, выполняя которые ребёнок будет развиваться как программист, ведь начнёт с изучения простых алгоритмов, продолжит изучение языка Pascal и постепенно начнёт изучать язык программирования Python.',
  //       ],
  //     },
  //   },

  //   block3: {
  //     subBlock31: {
  //       title: 'Что даст вашему ребенку изучение программирования в детстве?',
  //       paragraphs: [
  //         'Развитие креативности и умения решать задачи',
  //         'Повышение концентрации и самодисциплины',
  //         'Увлекательное и полезное времяпрепровождение',
  //         'Поддержка в развитии математического мышления',
  //         'Подготовка к карьере в области технологии',
  //       ],
  //     },
  //     subBlock32: {
  //       mainTitle: 'Участие в соревнованиях',
  //       paragraph1:
  //         'Так же дети, которые занимаются у нас, принимают участие в различных соревнованиях и олимпиадах по программированию, это стимулирует изучать программирование и развиваться дальше.',
  //     },
  //   },
  // },

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
        'Основные техники рисования, такие как перспектива, тени и композиция, также дети будут изучать основы графического дизайна.',
      whatTeachTitle: 'Чему научим?',
      whatTeachParagraph:
        'Использовать на практике знания о композиции, цвете, свете и ритме. Создавать векторную графику.',
      price: 85,
      numberLessons: 'за 1 месяц',
      time: 60,
      startClasses: 'Два занятия в неделю',
      discount: 'При посещении 2-х и более направлений предоставляем скидку 5%',
    },

    block2: {
      subBlock21: {
        title: 'О направлении',
        paragraph1:
          'В рамках программы обучения, дети изучают основы рисования, включая техники, перспективу и композицию. Они также погружаются в мир графического дизайна. ',
        paragraph2:
          'При изучении основ графического дизайна дети также учатся работать с цветом, светом, тенью, композицией, шрифтами и стилями. Они узнают, как подбирать цветовые гаммы, создавать контраст, баланс и ритм, выбирать подходящие шрифты и сочетать их, а также придавать своим работам индивидуальность и выразительность.',
      },
      subBlock22: {
        mainTitle: 'С чего начинаем обучение?',
        subMainTitle: 'Обучение рисованию, мы начинаем с основных концепций:',
        subTitle1: 'Рисование',
        paragraph1:
          'Знакомство с материалами и инструментами, основы форм и линий, цветовые навыки. Экспериментирование и творчество, постепенное усложнение.',
        subTitle2: 'Основы граф. дизайна',
        paragraph2: 'Основы форм линий, цветовой теории, композиции, шрифтов и стилей. Изучение векторнои графики.',
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
          'Наши юные художники не только рисуют, но и посещают разнообразные мастер-классы по изобразительному искусству, что способствует их творческому росту.',
      },
    },
  },
];
