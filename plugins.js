const path = require('path');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const _VueLoaderPlugin = require('vue-loader/lib/plugin')

const VueLoaderPlugin = new _VueLoaderPlugin();

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, './Scss'),
  files: '*.scss',
  failOnError: false,
  quiet: false,
});

module.exports = {
  StyleLintPlugin: StyleLintPlugin,
  VueLoaderPlugin: VueLoaderPlugin
};