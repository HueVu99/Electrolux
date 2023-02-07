const path = require("path");
// const fs = require("fs");
//const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
//const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CopyPlugin = require("copy-webpack-plugin");
//var glob = require("glob");
const { entryPath, outRoot } = require("./front.end.env");

module.exports = {
  target: ["web", "es2017"],
  entry: [path.join(process.cwd(), `${entryPath}/javascript/entry/main.js`)],
  output: {
    module: true,
    filename: "[name].bundle.[contenthash].js",
    chunkFilename: `[name].bundle.[contenthash].js`,
    path: path.join(process.cwd(), `${outRoot}/scripts`),
    publicPath: `${publicPath}/scripts/`,
  },
  experiments: {
    executeModule: true,
    outputModule: true,
    syncWebAssembly: true,
    topLevelAwait: true,
    asyncWebAssembly: true,
    layers: true,
    lazyCompilation: true,
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // presets: ["@babel/preset-env"],
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: false,
                  targets: {
                    browsers: ["Chrome >= 60", "Safari >= 10.1", "iOS >= 10.3", "Firefox >= 54", "Edge >= 15"],
                  },
                },
              ],
            ],
            plugins: [
              /*"@babel/plugin-proposal-class-properties"*/
              /*'transform-class-properties'*/
            ],
          },
        },
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ["vue-loader"],
      },
      // Transpile modern dependencies:
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/i,
        include(file) {
          let dir = file.match(/^.*[/\\]node_modules[/\\](@.*?[/\\])?.*?[/\\]/);
          try {
            return dir && !!require(dir[0] + "package.json").exports;
          } catch (e) {}
        },
        use: {
          loader: "babel-loader",
          options: {
            // presets: ["@babel/preset-env"],
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: false,
                  targets: {
                    browsers: ["Chrome >= 61", "Safari >= 10.1", "iOS >= 10.3", "Firefox >= 54", "Edge >= 15"],
                  },
                },
              ],
            ],
            plugins: [
              /*"@babel/plugin-proposal-class-properties"*/
              /*'transform-class-properties'*/
            ],
          },
        },
      },
      // CSS Files
      // {
      //     test: /\.s[ac]ss$/i,
      //     use: [
      //       // fallback to style-loader in development
      //       MiniCssExtractPlugin.loader,
      //         {
      //         loader: "css-loader",
      //             options: {
      //               sourceMap: true,
      //             },
      //         },
      //         {
      //             loader: "sass-loader",
      //             options: {
      //               sourceMap: true,
      //             },
      //         },
      //     ],
      // },
      // {
      //     test: /\.pug$/,
      //     exclude: /node_modules/,
      //     use: ['raw-loader', 'pug-plain-loader'],
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },

  plugins: [
    // new CleanWebpackPlugin({
    //     cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), `${outRoot}/assets`),path.join(process.cwd(), `${outRoot}/scripts`), path.join(process.cwd(), `${outRoot}/css`)],
    //     verbose: true,
    //     dry: false,
    // }),
    new VueLoaderPlugin(),
    // new MiniCssExtractPlugin({
    //     filename: '../css/[name].css',
    //     //chunkFilename: '../css/[name].css',
    //   }),
    // new HtmlWebpackPlugin({
    //     title: 'webpack Boilerplate',
    //     template: path.resolve(__dirname, 'www/templates/home.html'), // template file
    //     filename: 'home.html', // output file
    //     //publicPath:'../src/aeg/dist/',
    //     scriptLoading: 'defer'
    // }),
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
