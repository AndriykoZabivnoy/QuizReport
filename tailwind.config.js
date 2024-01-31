/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        hard: "var(--hard)",
        light: "var(--light)",
        main: "var(--main)",
        "variable-collection-light-red": "var(--variable-collection-light-red)",
      },
    },
  },
  plugins: [],
};
