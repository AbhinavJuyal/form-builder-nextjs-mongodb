/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss,sass}",
    "./hoc/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#1E1E1E",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    prefix: "dui-",
  },
};
