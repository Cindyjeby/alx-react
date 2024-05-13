## What is Webpack?
- this is a static module bundler for modern javascript applications.
- A dependency graph describes how modules relate to each other using the references (require and import statements) between files

## Core Concepts
### Entry
- An entry point indicates which moduled webpack should use to begin building out its internal dependency graph
- By default its value is ./src/index.js, but you can specify a different (or multiple) entry points by setting an entry property in the webpack configuration.
### output
- this property tells the webpack where to emit the bundles it creates and how to name these files.
- it depaults to ./dixt/main.js for the main output file and to the ./dist folder for any other generated file.
### Loaders
- they allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph
- loders have two properties in your webpack configuration: 
. The test property indentifies which file of files should be transformed.
. the use property identifies which loader should be used to do the transforming
### Plugins
- They can be leveraged to perform a wider range of tasks like bundle optimization, assets management and injectionof environment variables
- to use a plugin you need to require() it and add it to the plugins arrray. Most plugins are customizable through options.
- since you can use a plugin multiple times in a configuration for different purposes, you need to create an instance of it y calling it with the new operator.
eg :
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
- In the example above, the html-webpack-plugin generates an HTML file for your application and automatically injects all your generated bundles into this file.
### Mode
- By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment. The default value is production
eg:
module.exports = {
  mode: 'production',
};