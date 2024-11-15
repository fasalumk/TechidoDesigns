/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'grey': '#2E2E2E',
        'techido-blue': '#043C67',
      },
    },
    fontFamily: {
      'sans': ['Inter',],
      'serif': ['nunito'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
    margin:{
      '700px' : '700px',
    },
 },
 

  plugins: [
    require('daisyui'),
  ],
}

