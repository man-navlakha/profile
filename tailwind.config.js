// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-bg': "url('/ps.png')",
        'desktop-bg': "url('/92cd799f-1c74-4680-bbb3-ceaba6ba219f.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}