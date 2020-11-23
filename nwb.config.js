const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  type: "react-component",
  webpack: {
  //   rules: {
  //     test: /\.(css|less)?$/,
  //     use: [
  //       MiniCssExtractPlugin.loader,
  //       "css-loader",
  //       {
  //         loader: "less-loader",
  //       }
  //     ]
  //   },
    extractCSS: {
      MiniCssExtractPlugin: true,
      filename:
        process.env.NODE_ENV === "production"
          ? `[name].[contenthash:8].css`
          : "[name].css"
    }
  },
  npm: {
    esModules: true,
    umd: {
      global: "ReactCYEditor",
      externals: {
        react: "React"
      }
    }
  }
};
