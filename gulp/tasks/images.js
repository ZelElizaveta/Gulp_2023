import { srcFolder } from "../config/path.js";

export function images () {
    return app.gulp.src(app.path.src.images, { base: `${srcFolder}/assets/images/`})
        .pipe(app.plugins.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 5
        }))
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(app.plugins.webp())
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.reload({stream:true}))
}