const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.legacy.base.config.js");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const glob = require("glob");
const path = require("path");
module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "source-map",
  // entry: glob.sync(path.join(process.cwd(), "${entryPath}/javascript/mocks/apis/*.mock.js")),
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: "all",
      minSize: 10000,
      minRemainingSize: 0,
      // maxSize: 100000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: "~",
      enforceSizeThreshold: 50000,
      name: "main",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          reuseExistingChunk: true,
        },
        common: {
          test: /[\\/]src[\\/]client[\\/]components[\\/]/,
          name: "common",
          chunks: "all",
          minSize: 0,
        },
      },
    },
  },
  plugins: [
    // new webpack.SourceMapDevToolPlugin({
    //   filename: '[file].map',
    // }),
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled",
      //analyzerMode: 'static',
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
});
