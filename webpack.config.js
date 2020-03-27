const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  // 1
  entry: "./src/sketch.js",
  // 2
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "p5-examples",
      template: "index.html",
      alwaysWriteToDisk: true
    })
  ],
  devServer: {
    contentBase: "./dist"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ["babel-loader"],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
