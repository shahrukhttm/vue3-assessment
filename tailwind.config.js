/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ['Inter', 'sans-serif'],
      },
      fontSize: {
        base: ['14px', '140%'],
        'display-sm': ['22px', '32px'],
      },
      colors: {
        'dark-50': '#F8F8F8',
        'dark-100': '#F4F4F4',
        'dark-400': '#c7c7c7',
        'dark-800': '#141414',
        'dark-950': '#070707',
        'blue': '#007AFF',
        'blue-100': '#007aff30',
        'blue-hover': '#0075F5',
        'success': '#14AE5C',
        'success-hover': '#009951',
        'grey-600': '#8C929C',
        'red': '#F9261A',
        'red-100': '#f9261a29',
      },
      boxShadow: {
        '400': '0px 16px 32px -4px rgba(12, 12, 13, 0.1), 0px 4px 4px -4px rgba(12, 12, 13, 0.05)',
      },
    },
  },
  plugins: [],
}
