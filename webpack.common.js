const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { index: "./src/index.js" },
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
    publicPath: "/",
    chunkFilename: "chunk-[name].[contenthash].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "Book Swap",
      template: "./index.html",
      favicon: "./img/bookSwapFavIcon.png",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: { outputPath: "img" },
      },
      {
        test: /\.(svg)$/,
        loader: "file-loader",
        options: { outputPath: "svg" },
      },
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { url: false } },
        ],
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.csv$/,
        loader: "csv-loader",
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true,
        },
      },
    ],
  },
};
