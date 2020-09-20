const { src, dest, series, parallel, watch, } = require('gulp');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();
const origin = 'build';
const destination = 'build';

// function defaultTask(cb) {
//     // place code for your default task here

//     gulp.task('build', ['css', 'js', 'imgs']);

//     cb();
// }

function html(cb) {
    src(`${origin}/index.html`).pipe(dest(destination))
    cb();
}

function css(cb) {
    src(`${origin}/style.css`)
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(destination))
    cb();
}

function js(cb) {
    src(`${origin}/index.js`).pipe(dest(destination))
    cb();
}

function watcher(cb) {
    watch(`${origin}/index.html`).on('change', series(html, browserSync.reload))
    watch(`${origin}/style.css`).on('change', series(css, browserSync.reload))
    watch(`${origin}/index.js`).on('change', series(js, browserSync.reload))
    cb();
}

function server(cb) {
    browserSync.init({
        notify: false,
        open: false,
        server: {
            baseDir: destination
        }
    })
    cb();
}

exports.default = series(parallel(html, css, js), server, watcher);


// gulp.task('autoprefixer', () => {
//     return gulp.src('./*.css')
        // .pipe(sourcemaps.init())
        // .pipe(postcss([autoprefixer()]))
        // .pipe(sourcemaps.write('.'))
// })


// function html(cb) {
//     cb()
// }

// function css(cb) {
//     cb()
// }

// function js(cb) {
//     cb()
// }

// function watcher(cb) {
//     watch(`${origin}**/*.html`).on('change', series(html, browserSync.reload))
//     watch(`${origin}**/*.css`).on('change', series(css, browserSync.reload))
//     watch(`${origin}**/*.js`).on('change', series(js, browserSync.reload))
//     cb()
// }

// function server(cb) {
//     browserSync.init({
//         notify: false,
//         open: false,
//         server: {
//             baseDir: destination
//         }
//     })
//     cb()
// }
// exports.default = series(parallel(html, css, js), server, watcher)
