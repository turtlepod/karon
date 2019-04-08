module.exports = {
	entry: {
		'/blocks/example1/block' : './blocks/example1/block.esnext.js',
		'/blocks/example2/block' : './blocks/example2/block.esnext.js',
		'/blocks/example3/block' : './blocks/example3/block.esnext.js',
	},
	output: {
		path: __dirname,
		filename: '[name].js',
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
