const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 解决 build 没有less和css https://github.com/insin/nwb/issues/191 
// loader 配置文档写的不咋样，但是提供了 nwb-less.

module.exports = {
  type: "react-component",
  webpack: {
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
