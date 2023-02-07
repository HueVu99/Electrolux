const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const OptimizePlugin = require('optimize-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  entry: glob.sync(path.join(process.cwd(), './src/client/mocks/apis/*.mock.js')),
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      minRemainingSize: 0,
      // maxSize: 50000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      name:'main',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          maxSize: 100000,
          reuseExistingChunk: true,
        },
        common: {
            test: /[\\/]src[\\/]client[\\/]components[\\/]/,
            chunks: "all",
            minSize: 0,
          },
      },
    },
  },
  plugins: [
    new OptimizePlugin({
      minify:true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
