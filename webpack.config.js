const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: "./client/js/main.js"
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.hbs$/, loader: "handlebars-loader" },
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, use: { loader: 'babel-loader' }}
    ],
    
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "handlebar template", template: "./client/index.hbs" }),    
  ],
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname,"server","public")
  },
}