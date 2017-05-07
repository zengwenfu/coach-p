var browserSync = require("browser-sync")
browserSync({
    server: 'src',
    files: ['src/*.html', 'src/css/*.css', 'src/js/*.js']
});