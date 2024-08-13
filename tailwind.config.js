const aspectRatio = require("@tailwindcss/aspect-ratio");
const animated = require("tailwindcss-animated");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      sans: [
        'Urbanist Variable',
        'var(--font-inter)',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    lineHeight: {
      tight: '1', // Change this value to your desired line height
      xl: '1.5rem', // Add this line to set the line height for text-xl
    },
    extend: {
      fontSize: {
        'xl': ['1.25rem', { lineHeight: '1.5rem' }] // This will set the line height for text-xl to 1.75rem
      }
    }
  },
  plugins: [
    aspectRatio,
    animated
  ]
};