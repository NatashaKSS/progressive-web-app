const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRCDIR = 'src';
const PUBLICDIR = 'public';

module.exports = {
  entry: path.resolve(__dirname, SRCDIR, 'app.js'),
  output: {
    path: path.resolve(__dirname, PUBLICDIR),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, PUBLICDIR, 'index.html')
    }),
    new DashboardPlugin(),
    new ExtractTextPlugin("styles.css")
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /.css$/,
        loader: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]",camelCase'])
      }
    ]
  }
};
