const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin
import webpack from "webpack"
const CopyPlugin = require("copy-webpack-plugin")
const path = require("path")

module.exports = {
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[name][hash][ext]",
    publicPath: "/"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("SSSO-PROD")
    }),
    new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/.htaccess",
          to: ""
        }
      ]
    })
  ]
}
