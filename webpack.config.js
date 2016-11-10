const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'lib/index.js'),
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      },
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(eot|otf|webp|ttf|woff|woff2)$/,
      loader: 'url'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })
  ]
};