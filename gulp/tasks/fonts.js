import { srcFolder } from "../config/path.js"

export function fonts () {
    return app.gulp.src(app.path.src.fonts, { base: srcFolder})
        .pipe(app.plugins.browserSync.reload({stream:true}))
}