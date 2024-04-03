module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx', // Include JSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
