/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // colors: {

      // },
      colors: {
        'text-color-palette-1': '#38C682',
        'text-color-palette-2': '#00796D',
        'bg-color-palette-2': '#0C111F',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
