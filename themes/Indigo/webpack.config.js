// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.ts",
  output: {
    filename: isProduction ? "./static/js/[name].min.js" : "./static/js/[name].js",
    path: path.resolve(__dirname, "."),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProduction
        ? "./static/css/[name].min.css"
        : "./static/css/[name].css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${__dirname}/**/*`, { nodir: true }),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        type: "asset/resource",
        generator: {
            filename: "images/[name][ext]",
            // publicPath: "images/",
            outputPath: "static/"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {  //If emitting file, the file path is
          filename: 'fonts/[name][ext]',
          // publicPath: "fonts/",
          outputPath: "static/"
        }
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
