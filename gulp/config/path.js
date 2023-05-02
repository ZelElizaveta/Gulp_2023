import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
export const srcFolder = `./src`;

export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/assets/css/`,
        js: `${buildFolder}/assets/js/`,
        images: `${buildFolder}/assets/img/`,
        fonts: `${buildFolder}/assets/fonts/`
    },
    src: {
        html:`${srcFolder}/*.html`,
        css: `${srcFolder}/assets/scss/*.scss`,
        js: `${srcFolder}/assets/js/*.js`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp,webmanifest,xml,json}`,
        fonts: `${srcFolder}/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}`
    },
    watch: {
        html:`${srcFolder}/**/*.html`,
        css: `${srcFolder}/assets/scss/**/*.scss`,
        js: `${srcFolder}/assets/js/**/*js`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp,webmanifest,xml,json}`,
        fonts: `${srcFolder}/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}