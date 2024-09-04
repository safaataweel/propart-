/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D3557',
        hoverPrimary: '#33527A',
        background: '#f7f7f8',
      },
    },
  },
  plugins: [],
}