import scrollbar from 'tailwind-scrollbar';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bohme: ['bohme', 'sans-serif'],
      },
      screens: {
        '3xl': '1720px',     // de ex. 3xl începe de la 1920px
      },
    },
  },
  plugins: [scrollbar],
};
