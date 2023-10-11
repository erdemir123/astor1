/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'leaflet-div-icon': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      borderColor: {
        'navy': '#000080',
      },
    },
  },
  plugins: [],
}
