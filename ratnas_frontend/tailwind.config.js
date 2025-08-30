/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgLight: "#F6F1E9",
        yellowAccent: "#FFD93D",
        orangeAccent: "#FF9A00",
        darkBrown: "#4F200D",
      },
      backgroundImage: {
        "pink-gradient":
          "linear-gradient(90deg, hsla(359, 75%, 85%, 1) 0%, hsla(359, 63%, 68%, 1) 100%)",
        "orange-gradient":
          "linear-gradient(90deg, hsla(14, 100%, 97%, 1) 0%, hsla(14, 38%, 85%, 1) 100%)",
        "dark-orange-gradient":
          "linear-gradient(180deg, hsla(17, 72%, 18%, 1) 0%, hsla(36, 100%, 50%, 1) 100%)",
        "yellow-orange-gradient":
          "linear-gradient(0deg, hsla(48, 100%, 62%, 1) 0%, hsla(36, 100%, 50%, 1) 100%)",
        "yellow-orange-gradient-r":
          "linear-gradient(180deg, hsla(48, 100%, 62%, 1) 0%, hsla(36, 100%, 50%, 1) 100%)",
        "yellow-light-gradient":
          "linear-gradient(180deg, hsla(48, 100%, 62%, 1) 0%, hsla(37, 42%, 94%, 1) 100%)",
        "yellow-light-gradient-r":
          "linear-gradient(0deg, hsla(48, 100%, 62%, 1) 0%, hsla(37, 42%, 94%, 1) 100%)",
        "dark-orange-gradient-r":
          "linear-gradient(0deg, hsla(17, 72%, 18%, 1) 0%, hsla(36, 100%, 50%, 1) 100%)",
        "grey-light-gradient":
          "linear-gradient(0deg, hsla(45, 3%, 47%, 1) 0%, hsla(37, 42%, 94%, 1) 100%)",
        "dark-orange-270-gradient":
          "linear-gradient(270deg, hsla(17, 72%, 18%, 1) 0%, hsla(36, 100%, 50%, 1) 100%)",
        "brand-gradient":
          "linear-gradient(180deg, hsla(17,72%,18%,1) 0%, hsla(36,100%,50%,1) 17%, hsla(48,100%,62%,1) 33%, hsla(37,42%,94%,1) 49%, hsla(48,100%,62%,1) 74%, hsla(36,100%,50%,1) 99%)",
      },
    },
  },
  plugins: [],
};
