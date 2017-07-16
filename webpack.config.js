const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const SRCDIR = 'src';
const PUBLICDIR = 'public';

module.exports = {
  entry: path.resolve(__dirname, SRCDIR, 'app.js'),
  output: {
    path: path.resolve(__dirname, PUBLICDIR),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, PUBLICDIR, 'index.html')
    }),
    new DashboardPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015']
      }
    }]
  }
};