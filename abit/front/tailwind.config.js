/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderOpacity: '1',
    extend: {
      colors: {
        primary: '#4f679b',
        black: '#000',
        gray: '#cfcfcf',
        disabled: '#E4E4E4',
        white: '#fff',
        green: '#8fbb33',
        orange: '#ff7800',
        yellow: '#D87E2E',
        red: '#ff4d4f',
        bg: '#f1f4f9',
        content: '#fff',
        stroke: '#8b8b8b',
        gr: '#4f679b',
      },
    },
    screens: {
      md: { max: '1024px' },
      sm: { max: '768px' },
      xs: { max: '568px' },
      lg: { max: '1162px' },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
