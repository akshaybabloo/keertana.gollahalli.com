const {src, dest, parallel, series} = require('gulp');
const del = require('del');

// Following are the default paths that the files will be moved to
const cssFolderPath = './themes/Indigo/static/css/';
const jsFolderPath = './themes/Indigo/static/js/';
const fontPath = './themes/Indigo/static/font';

// Following are the files that will be moved to their locations
const cssFilesToMove = ['./node_modules/bootstrap/dist/css/bootstrap.min.css'];
const jsFilesToMove = [
    './node_modules/instantsearch.js/dist/instantsearch.development.js',
    './node_modules/algoliasearch/dist/algoliasearch.umd.js',
    './node_modules/instantsearch.js/dist/instantsearch.production.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    './node_modules/@fortawesome/fontawesome-free/js/brands.min.js',
    './node_modules/@fortawesome/fontawesome-free/js/solid.min.js',
    './node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js'
];
const fontFilesToMove = [
    './node_modules/firacode/distr/woff/FiraCode-Regular.woff',
    './node_modules/firacode/distr/woff2/FiraCode-Regular.woff2'
];

function cleanAssets() {
    return del(['themes/Indigo/static'])
}

// Moves CSS files to their appropriate location
function moveCss() {
    return src(cssFilesToMove).pipe(dest(cssFolderPath));
}

// Moves JS files to their appropriate location
function moveJs() {
    return src(jsFilesToMove).pipe(dest(jsFolderPath));
}

// Moves JS files to their appropriate location
function moveFont() {
    return src(fontFilesToMove).pipe(dest(fontPath));
}

// Run both functions in parallel
exports.default = series(cleanAssets, parallel(moveCss, moveJs, moveFont));
