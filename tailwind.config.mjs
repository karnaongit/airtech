/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./Components/**/*.{js,ts,jsx}",
    "./app/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        headline: ['headline', 'sans-serif'], // Ensure a fallback font is provided
      },
    },
  },
  plugins: [],
};

