const path = require('path');
const ZipWebpackPlugin = require("zip-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port:9000
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.css' ]
  },
  plugins : [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template : 'index.html'
        }),
        new ZipWebpackPlugin({
            path: 'package',
            filename: 'app.zip'
        }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};