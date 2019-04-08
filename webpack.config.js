module.exports = {
	entry: {
		'/blocks/example1/block' : './blocks/example1/block.jsx',
	},
	output: {
		path: __dirname,
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: { 
					loader: "babel-loader",
				},
				exclude: /(node_modules|bower_components)/,
			}
		]
	}
};
