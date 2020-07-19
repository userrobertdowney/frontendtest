// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: in ".browserslistrc" file
    autoprefixer: {},
    "postcss-px2unit": [
      {
        rootValue: 37.5,
        unitPrecision: 5,
        propList: ["*"],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
        excludeFiles: ["src"]
      },
      {
        rootValue: 75,
        unitPrecision: 5,
        propList: ["*"],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
        excludeFiles: ["node_modules"]
      }
    ]
  }
};
