module.exports = {
  enabled: true,
  purge: [
    "./src/*.jsx",
    "./src/*.js",
    "./src/pages/**/*.jsx",
    "./src/pages/**/*.js",
    "./src/pages/**/**/*.jsx",
    "./src/pages/**/**/*.js",
    "./public/**/*.html",
    "./src/components/**/**/*.jsx",
    "./script/dist/*.js",
    "./script/dist/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      display: ['group-hover']
    }
  },
  plugins: [],
}
