"use strict"

import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

import { html } from "./gulp/tasks/html.js";
import { Sass } from "./gulp/tasks/Sass.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { clean } from "./gulp/tasks/clean.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { server } from "./gulp/tasks/server.js";

function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.css, Sass);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.fonts, fonts);
}


const build = gulp.series(clean, gulp.parallel(html, Sass, js, images, fonts))
const watch = gulp.parallel(build, watcher, server)

export {watch}

gulp.task('default', watch);



