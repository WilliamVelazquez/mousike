
/**
 * @author William Velazquez <info@williamvelazquez.com>
 */
console.log('Cargando el webpack para storybook...');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

 module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
          'babel-loader',
        ],
  });
  // config.plugins.push(new HtmlWebPackPlugin({
  //   template: './public/index.html',
  //   filename: './index.html',
  // }));
  // config.plugins.push(new MiniCssExtractPlugin({
  //   filename: 'assets/[name].css',
  // }));
  return config;
};

