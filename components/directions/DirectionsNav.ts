interface DirectionsNav {
  label: string;
  href: string;
  value: string;
}

export const DirectionsNav: DirectionsNav[] = [
  { label: 'Программирование', href: '/directions/programming', value: 'programming' },
  { label: 'Робототехника', href: '/directions/robotics', value: 'robotics' },
  { label: 'Рисование', href: '/directions/painting', value: 'painting' },
  { label: 'Подготовка к школе', href: '/directions/preparingforschool', value: 'preparingforschool' },
  // { label: 'Помощь первокласснику', href: '/directions/firstgradestudent', value: 'firstgradestudent' },
  // { label: 'Английский язык', href: '/directions/english', value: 'english' },
];
