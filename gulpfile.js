//Importar los módulos y plugins que se usarán.
//Cada uno se importará con un require('modulo')
var gulp=require('gulp');
var sass= require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
//Crear tarea
/*El (*)refiere que busque a todos los archivos con
la extensión .scss
El metodo pipe conecta una función con otra*/
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
    .pipe(gulp.dest('./css'))
    //Para que se sincronice en tiempo real con los cambios en sass
    .pipe(browserSync.stream());
    
});

//recargar el navegador automaticamente
/*default para que se procese cuando se escribe gulp*/
gulp.task('default', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./scss/components/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
});