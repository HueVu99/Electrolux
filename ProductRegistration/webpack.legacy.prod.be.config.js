const webpack = require("webpack");
const { merge } = require("webpack-merge");
const ReplaceInFileWebpackPlugin = require("replace-in-file-webpack-plugin");
const baseConfig = require("./webpack.legacy.base.config");
const { beLayout } = require("./front.end.env");
const { replaceJsLegacy } = require("./webpack.util.js");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: false,
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
      minSize: 10000,
      minRemainingSize: 0,
      // maxSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: "~",
      enforceSizeThreshold: 50000,
      name: "main",
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        // vendor: {
        //   test: /([\\/]node_modules[\\/])/,
        //   name: "vendors",
        //   chunks: "all",
        //   //filename: "vendors.[contenthash].js",
        //   //maxSize: 20000,
        //   // maxInitialRequests: 2, // create only one vendor file
        //   //minChunks: 3, // count of entries
        //   reuseExistingChunk: true,
        // },
        vendor: {
          test: /(?![\\/]node_modules[\\/](vue2-datepicker|vue-recaptcha|date-format-parse)[\\/])(?![\\/]node_modules[\\/](vue-qrcode-reader)[\\/])(?![\\/]node_modules[\\/](@glidejs)[\\/])(?![\\/]node_modules[\\/](vue)[\\/])([\\/]node_modules[\\/])/,
          name: "vendors",
          enforce: true,
          chunks: "all",
          reuseExistingChunk: true,
        },
        vendor_glide: {
          test: /[\\/]node_modules[\\/](@glidejs)[\\/]/,
          name: "vendors-glide",
          chunks: "all",
          reuseExistingChunk: true,
        },
        vendor_vue: {
          test: /[\\/]node_modules[\\/](vue)[\\/]/,
          name: "vendors-vue",
          chunks: "all",
          reuseExistingChunk: true,
        },
        vendor_form: {
          test: /[\\/]node_modules[\\/](vue2-datepicker|vue-recaptcha|date-format-parse)[\\/]/,
          name: "vendors-form",
          chunks: "all",
          reuseExistingChunk: true,
        },
        vendor_qrcode: {
          test: /[\\/]node_modules[\\/](vue-qrcode-reader)[\\/]/,
          name: "vendors-qrcode",
          chunks: "all",
          reuseExistingChunk: true,
        },

        // common: {
        //   test: /[\\/]javascript[\\/](components)[\\/]/,
        //   name: "common",
        //   chunks: "all",
        //   minSize: 0,
        //   reuseExistingChunk: true,
        // },
      },
    },
  },
  plugins: [
    new ReplaceInFileWebpackPlugin([
      // {
      //   dir: beLayout,
      //   files: ["_SiteStyle.cshtml"],
      //   rules: [replaceCss.main],
      // },
      {
        dir: beLayout,
        files: ["_SiteScript.cshtml", "_Preload.cshtml"],
        rules: [replaceJsLegacy.main, replaceJsLegacy.vendors],
      },
    ]),
    // new BundleAnalyzerPlugin({
    //   //analyzerMode: "disabled",
    //   analyzerMode: "static",
    // }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
});
