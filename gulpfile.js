var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');


gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('source/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('source/css')) // Выгружаем результата в папку source/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'source' // Директория для сервера - source
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('scripts', function() {
    return gulp.src(['source/js/common.js', 'source/libs/**/*.js'])
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
    return gulp.src('source/*.html')
    .pipe(browserSync.reload({ stream: true }))
});
gulp.task('watch', function() {
    gulp.watch('source/sass/**/*.scss', gulp.parallel('sass')); // Наблюдение за scss файлами
    gulp.watch('source/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(['source/js/common.js', 'source/libs/**/*.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
}); //ctrl + c - чтобы отключить

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
