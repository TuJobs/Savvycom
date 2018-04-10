module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },

  extends:"eslint:recommended",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  rules: {
    indent: ["error", "tab"],
    "linebreak-style": 0,
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};