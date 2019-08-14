const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const workboxPlugin = require("workbox-webpack-plugin");

const htmlConfig = {
  title: "Setup",
  template: "./src/index.ejs",
  appMountId: "root"
  // favicon: ""
};

module.exports = {
  resolve: {
    alias: {
      images: path.resolve("./assets/images"),
      fonts: path.resolve("./assets/fonts"),
      layout: path.resolve("./src/layout"),
      components: path.resolve("./src/partial_views"),
      js: path.resolve("./src/js"),
      reducers: path.resolve("./src/reducers"),
      sagas: path.resolve("./src/sagas"),
      utils: path.resolve("./src/utils"),
      styles: path.resolve("./assets/styles")
    }
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve("./dist/"),
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin(htmlConfig),
    new HtmlWebpackPlugin(
      Object.assign({}, htmlConfig, {
        filename: "200.html"
      })
    )
  ],
  module: {
    rules: [{
        test: /\.scss/,
        use: ["style-loader", "css-loader", ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              javascriptEnabled: true
            }
          },
          {
            loader: "less-loader"
          }
        ]
      }, {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader?name=images/[name].[ext]"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=assets/fonts/[name].[ext]"]
      }
    ]
  }
};