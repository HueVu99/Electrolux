const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { outTheme, assetsPath, outRoot } = require("./front.end.env");
module.exports = {
  mode: "production",
  devtool: false,
  entry: {},
  output: {
    path: path.join(process.cwd(), `${outRoot}`),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, `${assetsPath}`),
          to: path.resolve(__dirname, `${outTheme}/assets`),
          force: true, //overwrite
          globOptions: {
            ignore: ["**/inline/**"],
          },
        },
      ],
    }),
  ],
};
