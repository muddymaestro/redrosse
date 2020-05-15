module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
	lintOnSave: process.env.NODE_ENV !== 'production',
	transpileDependencies: [
		'vuetify'
	],
	devServer: {
		port: 8080,
		proxy: 'https://localhost/redrosse/api/public/api'
	}
}
