/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#0d47a1"
        },
        gray: {
          100: "#E6E6E6",
          200: "#CCCCCC",
          800: "#333333",
          900: "#141414"
        }
      }
    }
  },
  plugins: []
};
