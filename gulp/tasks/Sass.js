import { srcFolder } from "../config/path.js";

export function Sass () {
    return app.gulp.src(app.path.src.css, { base: `${srcFolder}/assets/scss/`})
        .pipe(app.plugins.plumber(
            {
                errorHandler: function(err) {
                    app.plugins.notify.onError({
                        title: "Ошибка в CSS",
                        message: "<%= error.message %>"
                    })(err);
                }
            }
        ))
        .pipe(app.plugins.sass())
        .pipe(app.plugins.autoprefixer())
        .pipe(app.plugins.cssbeautify())
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(app.plugins.removeComments())
        .pipe(app.plugins.rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.reload({stream:true}))
}