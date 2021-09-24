module.exports = {
  mode: "jit", // just-in-time compiler only compiles classes that are used
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px"
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
