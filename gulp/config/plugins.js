import autoPrefixer from "gulp-autoprefixer";
import gulpCssbeautify from "gulp-cssbeautify";
import rename from "gulp-rename";
import gulpRigger from "gulp-rigger";
import gulpCssnano from "gulp-cssnano";
import GulpUglify from "gulp-uglify";
import gulpPlumber from "gulp-plumber";
import panini from "panini";
import imagemin from "gulp-imagemin";
import browserSync from "browser-sync";
import del from "del";
import removeComments from "gulp-strip-css-comments";
import imagewebp from "gulp-webp";
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import newer from "gulp-newer";
import webp from "gulp-webp";
import notify from "gulp-notify";

const sass = gulpSass(dartSass);


export const plugins = {
    autoprefixer: autoPrefixer,
    cssbeautify: gulpCssbeautify,
    removeComments: removeComments,
    rename: rename,
    rigger: gulpRigger,
    sass: sass,
    cssnano: gulpCssnano,
    uglify: GulpUglify,
    plumber: gulpPlumber,
    panini: panini,
    imagemin: imagemin,
    del: del,
    notify: notify,
    imagewebp: imagewebp,
    browserSync: browserSync,
    newer: newer,
    webp: webp
}