/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    themes: ["light", "dark", "cupcake"],
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

