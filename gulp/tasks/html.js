import { srcFolder } from "../config/path.js"

export function html () {
    app.plugins.panini.refresh()
    return app.gulp.src(app.path.src.html, { base: srcFolder})
        .pipe(app.plugins.plumber())
        .pipe(app.plugins.panini({
            root: srcFolder,
            layouts: `${srcFolder}/tpl/layouts/`,
            partials: `${srcFolder}/tpl/partials/`,
            data: `${srcFolder}/tpl/data/`
        }))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.reload({stream:true}))
}