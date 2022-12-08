/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg_image': "url('../assets/images/pain_bg.jpg')",
        'bg_pain': "url('../assets/images/pain_bg2.jpg')",
        'bg_gateau': "url('../assets/images/gateau_bg.jpg')",
        'bg_viennoiserie': "url('../assets/images/croissant.jpg')",
        'bg_patisserie': "url('../assets/images/bg_patisserie.jpg')",
      }
    },
  },
  plugins: [],
}