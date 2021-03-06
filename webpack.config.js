var path = require('path');
module.exports = {
	entry: './client/index.js',
	output: {
		path: path.join(__dirname, 'client'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
				  presets: ["env", "react", "stage-2"]
				}
			}
		]
	}
};
