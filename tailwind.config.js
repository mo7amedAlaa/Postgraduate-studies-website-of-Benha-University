/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        container: '1440px',
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        titleFont: 'Roboto',
        bodyFont: 'Poppins',
      },
      colors: {
        main: '#22668D',
        second: '#8ECDDD',
        yellow: '#F0F2F2',
        yellow2: '#FFFADD',
        whiteText: '#ffffff',
        lightText: '#ccc',
      },
    },
  },
  plugins: [],
};
