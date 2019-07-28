module.exports = {
  mode: "production",
  entry: `${__dirname}/src/index.ts`,
  output: {
    filename: "bundle.js",
    path: `${__dirname}/dist`
  },
  module: {
    rules: [
      { test: /\.ts$/, use: [ "ts-loader" ] },
      { enforce: "pre", test: /\.ts$/, exclude: /node_modules/, loader: "eslint-loader" }
    ]
  }
};
