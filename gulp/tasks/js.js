import { srcFolder } from "../config/path.js";

export function js () {
    return app.gulp.src(app.path.src.js, { base: `${srcFolder}/assets/js/`})
        .pipe(app.plugins.plumber(
            {
                errorHandler: function(err) {
                    app.plugins.notify.onError({
                        title: "Ошибка в JS",
                        message: "<%= error.message %>"
                    })(err);
                }
            }
        ))
        .pipe(app.plugins.rigger())
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.uglify())
        .pipe(app.plugins.rename({
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.reload({stream:true}))
}