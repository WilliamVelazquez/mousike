/**
 * @author William Velazquez <info@williamvelazquez.com>
 */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      //@behagoras
      // 'babel-loader',
      //@behagoras
      // {
      //   loader: 'babel-loader',
      // },
      //@behagoras
      {
        loader: MiniCssExtractPlugin.loader,
      },
      //@behagoras html-loader
      {
        loader: 'html-loader',
      },
    ],
    //@behagoras
    exclude: /node_modules/,
  })
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  });

  config.module.rules.push({
    test: /\.html$/,
    use: [
      {
        loader: 'html-loader',
      },
    ],
  })

  config.module.rules.push({
    test: /\.(s*)css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      'css-loader',
      'sass-loader',
    ],
  });

  // config.entry='./src/index.js';
  config.output= {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  };
  config.resolve= {
    extensions: ['.js', '.jsx'],
  };
  // config.devServer= {
  //   historyApiFallback: true,
  // };
  config.plugins= [
    // new HtmlWebPackPlugin({
    //   template: './public/index.html',
    //   filename: './index.html',
    // }),
    // new MiniCssExtractPlugin({
    //   filename: 'assets/[name].css',
    // }),
  ];

  // config.entry.push('./src/index.js'); 
  // config.devServer.push({
  //   historyApiFallback: true,
  // });

  return config;
};