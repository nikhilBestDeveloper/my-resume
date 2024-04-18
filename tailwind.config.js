module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx', // Include JSX files
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "0%, 50%, 100%": {
            borderColor: "transparent",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(50) , blink .7s",
        typingInfinite: "typing 1s steps(50) infinite, blink .7s infinite",
        scroll: "scroll 10s linear infinite",
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
