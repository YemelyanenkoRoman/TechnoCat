import localFont from 'next/font/local';

export const gilroy = localFont({
  src: [
    {
      path: './Gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    // {
    //   path: './Gilroy-Bold.woff2',
    //   weight: '700',
    //   style: 'normal',
    // },
    {
      path: './Gilroy-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    // {
    //   path: './Gilroy-Medium.woff2',
    //   weight: '500',
    //   style: 'normal',
    // },
  ],
  display: 'swap',
  variable: '--font-gilroy',
});

export const poppins = localFont({
  src: [
    {
      path: './Poppins-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Poppins-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-poppins',
});
