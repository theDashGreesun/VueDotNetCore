const path = require('path')
const plugins = require('./plugins.js');

module.exports = {
	entry: './ClientApp/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
				test: /\.(scss)$/,
				use: [{
						// Adds CSS to the DOM by injecting a `<style>` tag
						loader: 'style-loader'
					}, {
						// Interprets `@import` and `url()` like `import/require()` and will resolve them
						loader: 'css-loader'
					}, {
						// Loader for webpack to process CSS with PostCSS
						loader: 'postcss-loader',
						options: {
							plugins: function () {
								return [
									require('autoprefixer')
								];
							}
						}
					}, {
						// Loads a SASS/SCSS file and compiles it to CSS
						loader: 'sass-loader'
					}
				]
			}, {
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}, {
				test: /\.js$/,
				enforce: 'pre',
				exclude: /node_modules/,
				use: {
					loader: 'eslint-loader',
					options: {
						configFile: __dirname + '/.eslintrc'
					},
				}
			}
		]
	},
	plugins: [
		plugins.StyleLintPlugin,
	]
}
