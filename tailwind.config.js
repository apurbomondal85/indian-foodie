
import bannerImg1 from './src/assets/images/banner1.jpg'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner1": "url('../src/assets/images/banner1.jpg')",
        "banner2": "url('../src/assets/images/banner2.jpg')",
        "banner3": "url('../src/assets/images/banner3.jpg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

