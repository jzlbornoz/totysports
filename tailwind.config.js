/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      colors: {
        'original': '#9BFD5C',
        'primary': '#006b04',
        'secondary': '#909090',
        'third': '#080808',
        'success': '#00a216',
        'danger': '#dc3545',
        'warning': '#ffc107',
        'pink': '#F17EA6'
      },
    }
  },
}