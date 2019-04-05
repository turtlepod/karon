module.exports = {
	entry: './assets/js/blocks.js',
	output: {
		path: __dirname + '/assets/js/',
		filename: 'blocks.build.js',
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: { 
					loader: "babel-loader",
				},
				exclude: /(node_modules|bower_components)/,
			}
		]
	}
};
