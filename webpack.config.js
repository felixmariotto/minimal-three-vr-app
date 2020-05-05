const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: path.resolve(__dirname, 'src'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }, 

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "three.js VR starter app",
      template: path.resolve(__dirname, 'src/template.html')
    })
  ],

  devtool: 'eval-source-map'

}