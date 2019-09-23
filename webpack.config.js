const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;
const path = require('path');
const merge = require('webpack-merge');
const dirs = require('./webpack/dirs.js');
const commonConfig = require('./webpack/common.config.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const loaderInclude = [path.resolve(__dirname, 'src'), dirs.include];

module.exports = (env = {}, argv) => {
	const buildMode = argv.mode;
	const isDev = buildMode === 'development';
	const isAnalyze = env.ANALYZE || false;

	return [
		merge(commonConfig, {
			entry: './src/index.tsx',
			output: {
				path: dirs.build,
				filename: `Karaoke.${
					isDev ? 'development' : 'production.min'
				}.js`,
			},
			devServer: {
				contentBase: [dirs.build, dirs.static],
				compress: true,
				https: true,
				port: 9002,
				open: 'Google Chrome',
			},
			devtool: 'source-map',
			module: {
				rules: [
					{
						test: /\.css?$/,
						include: loaderInclude,
						use: [
							{
								loader: MiniCssExtractPlugin.loader,
							},
							{
								loader: 'css-loader',
								options: {
									modules: {
										localIdentName:
											argv.mode === 'production'
												? '[hash:10]'
												: '[name]__[local]_[hash:5]',
									},
									localsConvention: 'camelCase',
								},
							},
							{
								loader: 'postcss-loader',
								options: {
									config: {
										path: path.resolve(
											'./postcss.config.js'
										),
									},
								},
							},
						],
					},
				],
			},
			plugins: [
				new webpack.DefinePlugin({
					process: {
						env: {
							NODE_ENV: JSON.stringify(buildMode),
						},
					},
					isDev,
				}),
				new CopyWebpackPlugin([{ from: dirs.static, to: dirs.build }]),
				new HtmlWebpackPlugin({
					template: 'src/assets/static/index.html',
				}),
			].concat(isAnalyze ? new BundleAnalyzerPlugin() : []),
		}),
	];
};
