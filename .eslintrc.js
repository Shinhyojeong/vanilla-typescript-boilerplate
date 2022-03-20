module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "standard-with-typescript",
    "prettier",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    project: "./tsconfig.json"
  },
  rules: {
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/space-before-function-paren": "off"
  }
}
