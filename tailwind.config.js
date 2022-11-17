/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/MainLayout.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
