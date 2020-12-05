module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        common: 'rgb(255, 255, 255)',
        uncommon: 'rgb(0, 255, 102)',
        legendary: 'rgb(255, 0, 51)',
        boss: 'rgb(255, 255, 0)',
        lunar: 'rgb(0, 102, 255)',
        equipment: 'rgb(255, 102, 51)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
