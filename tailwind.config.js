/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['var(--font-gilroy)'],
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
        fourteen: ['14px', '19,6px'],
        sexteen: ['16px', '145%'],
        eighteen: ['18px', '120%'],
        twenty: ['20px', '24px'],
        thirtyfour: ['34px', '40,8px'],
        fifty: ['50px', '120%'],
      },
      colors: {
        'local-gray-b': '#F6F5F5',
        'local-gray-b-2': '#F8F8F8',
        'local-gray-t': '#7F807E',
        'local-gray-t-2': '#EBE7E4',
        'local-gray-act': '#F3F3F3',
        'local-gray-act-2': '#E6E6E6',
        'local-gray-act-3': '#7F817E',
        'local-grey-act-t': '#515151',
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
};
