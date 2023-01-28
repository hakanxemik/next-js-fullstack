/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      white: '#fff',
      black: '#1a1a1a',
      primary: "#03045E",
      primaryLight: "#0077B6",
      primarySanity: "#00B4D8",
      secondary: "#7B0063",
      tertiary: "#C12358"
    },
  },
  plugins: [],
}
