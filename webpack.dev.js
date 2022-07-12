const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",

  devServer: {
    historyApiFallback: true,
    static: [
      {
        directory: path.join(__dirname, "/"),
        publicPath: "/",
      },
    ],
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080",
    },
  },

  resolve: {
    modules: ["./node_modules", "./src"],
  },
});
