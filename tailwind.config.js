/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  prefix: "",
  purge: {
    content: ["./src/*/.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
};
