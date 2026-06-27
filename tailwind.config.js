/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1B3FD8',
          dark:    '#1230A8',
          lt:      '#3A5EF0',
          pale:    '#EEF2FF',
          mid:     '#DBEAFE',
        },
        pink:   '#E91B8C',
        orange: '#FF6320',
        gold:   '#F5C800',
        green: {
          DEFAULT: '#3BB54A',
          dark:    '#2D7A3A',
        },
        sky:    '#29B4F6',
        purple: '#7C1FA2',
        'c-bg':     '#FFFFFF',
        'c-subtle': '#F7F8FC',
        'c-muted':  '#EFF1F9',
        'c-border': '#D8DCF0',
        'txt-primary':   '#0F1A3D',
        'txt-secondary': '#3A4570',
        'txt-muted':     '#6B7599',
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body:    ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
