const mix = require('laravel-mix')

mix.disableNotifications()

mix.js('./src/assets/js/app.js', './dist/assets/js').extract()

mix.sass('./src/assets/scss/app.scss', './dist/assets/css')

mix.copy('./src/index.html', './dist')

mix.browserSync({
    proxy: false,
    server: './dist',
    watch: true,
})
