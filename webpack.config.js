// Import node path module
var path = require('path');

// Import node filesystem module
var fs = require('fs');

// Import webpack from node nodules
var webpack = require('webpack');

// Import webpack development server
var server = require('webpack-dev-server');

// import webpack typescript loader
var ts = require('awesome-typescript-loader');

// Import chalk color coding console
var chalk = require('chalk');

// Import progress bar for webkit
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

// Import Json server to API
var jsonServer = require('json-server');

// Return current directory path
var cwd = process.cwd();

module.exports = {
  cache: true,
  context: cwd,
  performance: {
    hints: false
  },
  devServer: {
    contentBase: cwd,
    compress: true,
    inline: true,
    hot: true,
    port: 4000,
    publicPath: '/build/',
    quiet: true,
    historyApiFallback: true,
    setup: function (app) {
      app.use('/api', jsonServer.router('db.json'));
    },
    stats: {
      chunks: false,
      chunkModules: false
    }
  },
  devtool: 'sourcemap',
  entry: {
    app: [
      'reflect-metadata',
      'ts-helpers',
      'zone.js',
      'main'
    ]
  },
  output: {
    chunkFilename: '[name].chunk.js',
    filename: '[name].js',
    path: path.resolve(cwd, 'build'),
    publicPath: '/build/',
    sourceMapFilename: '[name].map'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        include: [
          path.resolve(cwd, 'app')
        ]
      },
      {
        test: /\.html/,
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'raw-loader'
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  node: {
    fs: 'empty',
    global: true,
    crypto: 'empty'
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: './',
      manifest: require(path.resolve(cwd, 'vendor/vendor-manifest.json'))
    }),
    new webpack.NamedModulesPlugin(),
    new ProgressBarPlugin({
      format: chalk.magenta.bold('build') + ' [' + chalk.green(':bar')+ '] ' + chalk.green.bold(':percent') + ' ' + chalk.yellow.bold(':elapsed seconds') + ' ' + chalk.white(':msg'),
      clear: false
    }),
    new ts.TsConfigPathsPlugin(),
    new ts.CheckerPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules', cwd]
  }
};
