const path = require('path');
const _StyleLintPlugin = require('stylelint-webpack-plugin');

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, './Scss'),
  files: '*.Scss',
  failOnError: false,
  quiet: false,
});

module.exports = {
  StyleLintPlugin: StyleLintPlugin
};