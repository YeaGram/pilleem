module.exports = {
  content: ["./pages/**/*.{js,jsx,tsx}", "./components/**/*.{js,jsx,tsx}"],
  theme: {
     extend: {
        fontFamily: {
           openSans: "open sans",
           poppins: "poppins",
           montserrat: "montserrat",
        },
        backgroundImage: {
           Main: "url('/landing.webp')",
           Random:
              "url(https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054)",
           Random2:
              "url(https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-3fde07497ef159f8ba0617dee83d982e_screen.jpg?ts=1636997626)",
        },
        dropShadow: {
           myDrop1: "1px 2px 3px rgba(0,0,0,.6)",
        },
        keyframes: {
           tridiRotate: {
              "0%, 100%": { transform: "rotateY(0deg)" },
              "50%": { transform: "rotateY(90deg)" },
           },
        },
        animation: {
           rotates: "tridiRotate 1s cubic-bezier(.81,0,.33,.99)",
        },
     },
  },
  plugins: [],
};
