const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    purgecss({
      content: [
        "src/pages/**/*.jsx",
        "src/pages/**/**/*.jsx",
        "src/components/**/*.jsx",
        "script/dict/*.js",
        "script/dict/*.html"
      ],
      css:["src/**/**/*.css","src/**/**/**/*.css","src/*.css"],
      defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
      keyframes: true,
      safelist:['body','html','a',/^_/,/^popupMessage/,/-template$/]
    }),
  ],
};
