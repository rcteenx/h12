/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        base: ["var(--font-base)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#8c8c8c",
        },
        indigo: {
          DEFAULT: "#333366",
          light: {
            1: "#444477",
            2: "#555588",
            3: "#666699",
            4: "#7777AA",
            5: "#8888BB",
          },
          dark: {
            1: "#2A2A5C",
            2: "#1F1F50",
            3: "#141446",
            4: "#0A0A3B",
            5: "#000031",
          },
        },
        accent: {
          DEFAULT: "#FFD700",
        },
        indigo2: "#5b5b84",
        gray40: "#666666",
        "coral-red": "#FF6452",
        "indigo-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
};
