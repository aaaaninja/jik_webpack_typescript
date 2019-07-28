module.exports = {
  extends: [
    "eslint:recommended"
  , "plugin:@typescript-eslint/recommended"
  ]
, plugins: [
    "@typescript-eslint"
  ]
, parser: "@typescript-eslint/parser"
, rules: {
    semi: "error"
  }
, env: { browser: true, es6: true, node: true } 
}
