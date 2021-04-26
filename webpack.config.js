const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const globalContent = require("./src/globalContent.json");

module.exports = (options) => {
  const dist = path.resolve(__dirname, "../public");

  let webpackConfig = {
    devtool: options.devtool,
    entry: {
      frontend: ["./src/assets/scripts/frontend.js"],
      backend: ["./src/assets/scripts/backend.js"],
    },
    output: {
      path: dist,
      filename: !options.isProduction
        ? "./assets/scripts/[name].js"
        : "./assets/scripts/[name].[hash].js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        {
          test: /\.hbs$/,
          loader: "handlebars-loader",
        },
        {
          test: /\.scss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {},
            },
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !options.isProduction,
                reloadAll: true,
              },
            },
            "css-loader",
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          exclude: path.join(__dirname, "src", "assets/images"),
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "./assets/fonts",
              },
            },
          ],
        },
        {
          test: /\.(gif|jpg|png|svg)$/,
          exclude: path.join(__dirname, "src", "assets/fonts"),
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "./assets/images",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".ts", ".js"],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "./src/assets/images", to: "./assets/images" },
          { from: "./src/assets/fonts", to: "./assets/fonts" },
        ],
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: !options.isProduction
          ? "./assets/styles/[name].css"
          : "./assets/styles/[name].[hash].css",
      }),
      new HandlebarsPlugin({
        entry: path.join(process.cwd(), "src", "pages", "*", "*.hbs"),
        output: path.join(dist, "[name].html"),
        data: { global: globalContent },
        partials: [path.join(process.cwd(), "src", "components", "*", "*.hbs")],
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, dist),
      watchContentBase: true,
      hot: true,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {},
      },
    },
  };

  return webpackConfig;
};
