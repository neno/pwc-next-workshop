/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        danger: '#ef4444',
        secondary: '#9ca3af',
        disabled: '#9ca3af',
        disabledBg: '#e5e7eb',
      },
    },
  },
  plugins: [],
};
