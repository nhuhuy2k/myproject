module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 3px 21px 0px rgb(0 0 0 / 20%)",
        reset: "0px 3px 12px 0px #E50913",
        sd_search: "0 4px 6px #ccc"
      },
      screens: {
        sm: "690px",
        mobile: "950px",
      }
    },
    colors: {
      white: "#ffffff",
      red: "#E50913",
      gray: "#eaeaf1",
      black: "#000",
      green: "#46c35f",
      yellow: "#FFC100",
      blue: "#248AFD",
      light_blue: "rgb(165 243 252)",
      dark_green: "#00483d"
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
