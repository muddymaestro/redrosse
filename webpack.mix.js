const mix = require('laravel-mix');

require('vuetifyjs-mix-extension')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vuetify('vuetify-loader')
   .js('resources/js/bootstrap.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .options({
   processCssUrls: false,
});

if (mix.inProduction()) {
   mix.version();
}

mix.babelConfig({
   plugins: ['@babel/plugin-syntax-dynamic-import'],
 });

 mix.webpackConfig({
   output: {
      chunkFilename: 'js/[name].[chunkhash].js',
      publicPath: '/public/'
   }
});


