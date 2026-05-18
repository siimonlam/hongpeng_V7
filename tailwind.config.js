/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#6e8ca0',
          500: '#486581',
          600: '#334e68',
          700: '#243b53',
          800: '#1a2e44',
          900: '#102a43',
          950: '#0a1929',
        },
      },
    },
  },
  plugins: [],
};
