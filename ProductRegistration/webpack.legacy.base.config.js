const path = require("path");
//const fs = require("fs");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const CopyPlugin = require("copy-webpack-plugin");
const { entryPath, outRoot, outTheme, assetsPath } = require("./front.end.env");

module.exports = {
  target: ["web", "es5"],
  entry: ["babel-polyfill", path.join(process.cwd(), `${entryPath}/javascript/entry/mainLegacy.js`)],
  output: {
    filename: `[name].bundle-legacy.[contenthash].js`,
    chunkFilename: `[name].bundle-legacy.[contenthash].js`,
    path: path.join(process.cwd(), `${outRoot}/scripts/legacy`),
    //publicPath: `${publicPath}/scripts/`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties" /*'transform-class-properties'*/],
          },
        },
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ["vue-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },

  plugins: [
    new VueLoaderPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, `${assetsPath}`),
    //       to: path.resolve(__dirname, `${outTheme}/assets`),
    //       force: true, //overwrite
    //       globOptions: {
    //         ignore: ["**/inline/**"],
    //       },
    //     },
    //   ],
    // }),
  ],
};
