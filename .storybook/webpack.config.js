/**
 * @author William Velazquez <info@williamvelazquez.com>
 */
module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });
  return config;
};