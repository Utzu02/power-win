import scrollbar from 'tailwind-scrollbar';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bohme: ['bohme', 'sans-serif'],
      },
    },
  },
  plugins: [scrollbar],
};
