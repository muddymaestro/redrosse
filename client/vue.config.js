module.exports = {
	runtimeCompiler: true,
	publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
	lintOnSave: process.env.NODE_ENV !== 'production',
	transpileDependencies: [
		'vuetify'
	],
	devServer: {
		port: 8080
	},
	chainWebpack: config => {
		// Html Loader
		config.module
		  .rule('htmlLoader')
		  .test(/\.html$/)
		  .use('html-loader')
			.loader('html-loader')
			.end()

		config.output 
			.chunkFilename('[name].[hash].js')
			.filename('[name].[hash].js')
			.end()
			
	}
}
