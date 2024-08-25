/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        inter: "inter",
        playfair: "Playfair Display"
      },

      keyframes: {
        glow: {
          "0%": {
            transform: "scale(1)"
          },
          "33%": {
            transform: "scale(0.8)"
          },
          "66%": {
            transform: "scale(1.2)"
          },
          "100%": {
            transform: "scale(1)"
          }
        },

        slide: {
          from: {
            transform: "translateX(0)"
          },
          to: {
            transform: "translateX(-100%)"
          }
        }
      },

      animation: {
        glow: "glow 10s infinite",
        slide: "slide 20s linear infinite"
      }
    },
  },
  plugins: [],
}

