const { colors } = require('./config.json');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...colors,
    },
    extend: {
      colors: {
        'theme-bg': 'var(--bg-color)',
        'theme-fg': 'var(--fg-color)',
        'theme-yellow': 'var(--yellow-color)',
        'theme-green': 'var(--green-color)',
        'theme-gray': 'var(--gray-color)',
        'theme-blue': 'var(--blue-color)',
        'theme-red': 'var(--red-color)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
