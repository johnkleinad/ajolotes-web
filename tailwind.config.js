/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Amazon Ember', 'system-ui', 'sans-serif'], 
        mono: ['Amazon Ember Mono', 'monospace'], 
      },
    },
  },
  plugins: [],
}