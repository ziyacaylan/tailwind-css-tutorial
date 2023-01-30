/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      colors: {
        "light-red": "#ef4444",
        "dark-orange": "#ea580c",
        "light-yellow": "#fde68a",
        "light-green": "#65a30d",
        "dark-cyan": "#0891b2",
      },
    },
  },
  plugins: [],
};
