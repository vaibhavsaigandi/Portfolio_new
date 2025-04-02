// tailwind.config.js - ES Module version
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px", // Custom additional breakpoint
      },
    },
  },
};
