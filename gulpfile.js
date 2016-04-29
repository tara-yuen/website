var gulp = require('gulp'),
    autoprefix = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    less = require('gulp-less'),
    path = require('path'),
    combiner = require('stream-combiner2'),
    concat = require('gulp-concat'),
    reload = browserSync.reload;

var staticDir = './me/static/'

gulp.task('default', ['browser-sync', 'styles', 'watch']);

gulp.task('styles', function() {
    var cssDst = staticDir + 'dist/styles/';
    var cssSrc = staticDir + 'src/styles/styles.less';
    return combined =  combiner.obj([
        gulp.src(cssSrc)
        ,less({
            paths: [path.join(__dirname, 'less', 'includes')]
        })
        ,autoprefix({
            browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'],
            cascade: false
        })
        ,concat('styles.css')
        ,gulp.dest(cssDst)
        ,reload({stream: true})
    ]);
});

gulp.task('browser-sync', function() {
    browserSync({
        server: { 
            baseDir: "./me/templates/me/",
            index: "main.html",
        },
        port: 8000,
        ui: {
            port: 8080
        }
    });
});
// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch(staticDir + 'src/styles/**', ['styles']);
});

// gulp.task('server', function(){
//     connect.server({
//         port: 8000
//     });
// })

// gulp.task('_open', function(){
//     exec('open http://localhost:8000');
//     exec('subl .');
// });

// gulp.task('dev', ['server', 'default']);
