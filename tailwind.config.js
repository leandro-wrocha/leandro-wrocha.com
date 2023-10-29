/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        list: 'repeat(2, minmax(0, 280px))',
      },
    },
  },
  plugins: [],
}
