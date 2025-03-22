/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      textShadow: {
        title:
          "0 0 10px rgba(255, 192, 203, 0.8), 0 0 20px rgba(255, 192, 203, 0.5)",
        quote:
          "0 0 8px rgba(216, 191, 216, 0.7), 0 0 15px rgba(216, 191, 216, 0.4)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        dancingscript: ["Dancing Script", "cursive"],
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
