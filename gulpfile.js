const {src, dest, parallel, series} = require('gulp');

// Following are the default paths that the files will be moved to
const cssFolderPath = './themes/Indigo/static/css/';
const jsFolderPath = './themes/Indigo/static/js/';
const fontPath = './themes/Indigo/static/fonts';

// Following are the files that will be moved to their locations
const cssFilesToMove = ['./node_modules/bootstrap/dist/css/bootstrap.min.css'];
const jsFilesToMove = [
    './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    './node_modules/@fortawesome/fontawesome-free/js/brands.min.js',
    './node_modules/@fortawesome/fontawesome-free/js/solid.min.js',
    './node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js',
];
const fontFilesToMove = [];

// Moves CSS files to their appropriate location
function moveCss() {
    return src(cssFilesToMove).pipe(dest(cssFolderPath));
}

// Moves JS files to their appropriate location
function moveJs() {
    return src(jsFilesToMove).pipe(dest(jsFolderPath));
}

// // Moves JS files to their appropriate location
// function moveFont() {
//     return src(fontFilesToMove).pipe(dest(fontPath));
// }

// Run both functions in parallel
exports.default = parallel(moveCss, moveJs);
