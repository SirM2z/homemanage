'use strict'

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');
config.entry.main.unshift('webpack-dev-server/client?http://pstonetest.cn', 'webpack/hot/dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());

var app = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	compress: true
});
app.listen(80, function () {
	console.log('start server：http://pstonetest.cn')
});