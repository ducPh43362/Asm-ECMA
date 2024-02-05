/** @type {import('tailwindcss').Config} */
export default {
  content: ["../index.html", "./src/components/*.{html,jsx}",
   "./src/components/layouts/*.{html,jsx}",
  "./src/pages/*.{html,jsx}", "./src/pages/*.{html,jsx}"],
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  plugins: [],
}

