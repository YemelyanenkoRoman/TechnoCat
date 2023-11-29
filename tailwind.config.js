/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '320px',
      // => @media (min-width: 320px) { ... }
      s: '375px',
      // => @media (min-width: 375px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        gilroy: ['var(--font-gilroy)'],
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
        twelve: ['12px', '16px'],
        fourteen: ['14px', '140%'],
        sexteen: ['16px', '145%'],
        eighteen: ['18px', '120%'],
        twenty: ['20px', '24px'],
        thirtyfour: ['34px', '120%'],
        twentyfive: ['25px', '130%'],
        forty: ['40px', '120%'],
        fifty: ['50px', '120%'],
      },
      colors: {
        // main
        'fill-blue': '#36568B',
        'text-lightblue': '#EFF6FF',
        'd-blue': ' #4B76BC',
        // preparationschool
        'fill-pink': '#FFD8D2',
        'text-brown': '#B18882',
        'hover-brown': '#99564C',
        'd-brown': '#FFE9E6',
        'button-brown': '#D67768',
        // english
        'fill-yelow': '#FCF1BE',
        'text-yellow': '#B0A36A',
        'hover-yellow': '#C3A411',
        'd-yellow': '#FFF9DE',
        'button-yellow': '#DFC139',
        // robotics
        'fill-cyan': '#D8E9FF',
        'tetx-cyan': '#89898A',
        'hover-cyan': '#36568B',
        'd-cyan': '#EBF4FF',

        // firstgradestudent
        'fill-green': '#DAFFD8',
        'text-green': '#89AD87',
        'hover-green': '#349B46',
        'd-green': '#EBFEEA',
        'button-green': '#4ECE65',
        // programming
        'fill-violet': '#E2CBFF',
        'tetx-violet': '#9783B0',
        'hover-violet': '#724DA1',
        'd-violet': '#ECDDFF',
        'button-violet': '#8F5DCE',
        //painting
        'fill-aqua': '#A0DAEA',
        'tetx-aqua': '#207C91',
        'hover-aqua': '#1C6A77',
        'd-aqua': '#D7EEF9',
        'button-aqua': '#4497AD',

        'fill-medium': '#9CA4B1',
        'blue-dark': '#3D4A56',
        'red-mistake': '#E0474E',
        'gray-text': '#89898A',
        'gray-text-light': '#B2B2B2',

        'local-gray-b': '#F6F5F5',
        'local-gray-b-2': '#F8F8F8',
        'local-gray-t': '#7F807E',
        'local-gray-t-2': '#EBE7E4',
        'local-gray-act': '#F3F3F3',
        'local-gray-act-2': '#E6E6E6',
        'local-gray-act-3': '#7F817E',
        'local-grey-act-t': '#515151',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
