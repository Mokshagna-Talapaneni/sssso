const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const pdfjsDistPath = path.dirname(require.resolve("pdfjs-dist/package.json"))
const cMapsDir = path.join(pdfjsDistPath, "cmaps")
import CopyWebpackPlugin from "copy-webpack-plugin"

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@/*": path.resolve("./src"),
      "@shared/*": path.resolve("./src/shared/*"),
      "@assets/*": path.resolve("./src/shared/assets/*"),
      "@components/*": path.resolve("./src/shared/components/*"),
      "@container/*": path.resolve("./src/shared/container/*"),
      "@constants/*": path.resolve("./src/shared/constants/*"),
      "@types/*": path.resolve("./src/shared/types/*"),
      "@utils/*": path.resolve("./src/shared/utils/*"),
      "@theme/*": path.resolve("./src/shared/theme/*"),
      "@config/*": path.resolve("./src/shared/config/*"),
      "@views/*": path.resolve("./src/views/*"),
      "@routes/*": path.resolve("./src/routes/*"),
      "@providers/*": path.resolve("./src/providers/*")
    }
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"]
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|csv|pdf)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: "asset/inline"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[name][hash][ext]"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html")
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: cMapsDir,
          to: "cmaps/"
        }
      ]
    })
  ],
  devServer: {
    historyApiFallback: true // Ensures React Router works on manual refresh
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  stats: "errors-only"
}
