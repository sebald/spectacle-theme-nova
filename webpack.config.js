const path = require('path');
const webpack = require('webpack');
// Un-webpack-like, but it gets the job done :-x
const CopyWebpackPlugin = require('copy-webpack-plugin');

const resolveFromSource = p => path.join(__dirname, 'src', p);

module.exports = {
  entry: [
    resolveFromSource('index')
  ],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(eot|otf|webp|ttf|woff|woff2)$/,
      loader: 'file',
      query: {
        name: 'fonts/[name].[ext]'
      }
    }]
  },
  target: 'node',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    // Copy PrismJS custom syntax
    new CopyWebpackPlugin([
      { from: resolveFromSource('syntax'), to: 'syntax' }
    ])
  ]
};