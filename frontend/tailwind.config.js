module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        bangers: ["Bangers"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: ["halloween", "fantasy"],
  // },
};
