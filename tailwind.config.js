/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baskervville: ['"Baskervville SC"', "serif"],
      },
      keyframes: {
        slideInFromBottom: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideInRightCurved: {
          "0%": {
            borderRadius: "50% 0 0 50%",
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            borderRadius: "0",
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideOutRightCurved: {
          "0%": {
            borderRadius: "0",
            transform: "translateX(0)",
            opacity: 1,
          },
          "100%": {
            borderRadius: "50% 0 0 50%",
            transform: "translateX(100%)",
            opacity: 0,
          },
        },
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-120%)" },
        },

        drawLine: {
          to: {
            strokeDashoffset: 0,
          },
        },
      },
      animation: {
        slideInFromBottom: "slideInFromBottom 1s ease-out forwards",
        slideInRightCurved: "slideInRightCurved 0.5s ease-out forwards",
        slideOutRightCurved: "slideOutRightCurved 0.5s ease-in forwards",
        slideInRightDelayed1: "slideInRightCurved 0.5s 0.3s ease-out forwards",
        slideInRightDelayed2: "slideInRightCurved 0.5s 0.5s ease-out forwards",
        slideInRightDelayed3: "slideInRightCurved 0.5s 0.7s ease-out forwards",
        scroll: "scroll 15s linear infinite", // Add the moveText animation
      },
    },
  },
  plugins: [],
};
