const {src,dest,series,parallel,watch} = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
sourcemaps = require('gulp-sourcemaps'),
plumber = require('gulp-plumber'),
pug = require('gulp-pug'),
del = require('del'),
cssmin = require('gulp-clean-css'),
sass = require('gulp-sass')(require('sass')),
uglify = require('gulp-uglify'),
babel = require('gulp-babel'),
htmlmin = require('gulp-htmlmin'),
imagemin = require('gulp-imagemin'),
rename = require("gulp-rename"),
webp = require("gulp-webp"),
svgstore = require("gulp-svgstore"),
sync = require('browser-sync').create(),
ttf2woff = require('gulp-ttf2woff'),
ttf2woff2 = require('gulp-ttf2woff2'),
notify = require('gulp-notify'),
qgcmq = require('gulp-group-css-media-queries'),
concat = require('gulp-concat');

function copyFonts() {
  return src(['source/fonts/*.ttf'])
  .pipe(dest('production/fonts/'))
}

function fontW() {
  return src(['source/fonts/*.ttf'])
    .pipe(ttf2woff())
    .pipe(dest('production/fonts/'));
};

function fontW2() {
  return src(['source/fonts/*.ttf'])
    .pipe(ttf2woff2())
    .pipe(dest('production/fonts/'));

};

function clean() {
  return del('production');
}

function pug2html() {
  return src('source/pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(plumber.stop())
    .pipe(dest('production/'))
    .pipe(sync.stream())
}

function html() {
  return src("production/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("production/"))
    .pipe(sync.stream())
}

function scss2css() {
  return src('source/sass/styles.scss')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(qgcmq())
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(rename('style.min.css'))
    .pipe(dest('production/css/'))
    .pipe(sync.stream())
}

function script() {
  return src(["source/js/**/*.js","!source/js/libs/**/*.js", "!source/js/components/react/**/*.js"])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: [['@babel/env', {"modules": false}]]
    }))
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(rename('main.min.js'))
    .pipe(dest('production/js/'))
    .pipe(sync.stream());
}


function scriptReact() {
  return src("source/js/components/react/login-profile/profile.js")
    .pipe(dest('production/js/'))
    .pipe(sync.stream())
}

function copyJquery() {
  return src(['source/js/libs/Jquery/jquery-3.6.0.min.js'])
  .pipe(dest('production/js/libs/Jquery'))
}

function imageMin () {
  return src("source/image/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({progressive: true}),
      imagemin.optipng({optimizationLevel: 6}),
      imagemin.svgo()
    ]))
    .pipe(dest("production/image"))
    .pipe(sync.stream())
}

function copyImages() {
  return src("source/image/**/*.{png,jpg,svg}")
    .pipe(dest("production/image"))
    .pipe(sync.stream())

}

function copy (done){
  return src([
    "source/fonts/*.{woff2,woff}",
    "source/*.ico",
    "source/image/**/*.svg",
    "!source/image/icons/*.svg",
    ], {
      base: "source"
    })
    .pipe(dest("production"))
    .pipe(sync.stream())
    done()
}

function createWebp() {
  return src("source/image/**/*.{jpg,png}")
    .pipe(webp({quality: 85}))
    .pipe(dest("production/image"))
    .pipe(sync.stream())
  }

function sprite() {
  return src(["source/image/**/*.svg"])
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(dest("production/image/"))
    .pipe(sync.stream())
}

function server(done){
  sync.init({
    server: {
      baseDir: "production"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

function reload (done){
  sync.reload()
  done();
}

function watcher(){
  watch("source/pug/**/*.pug", series(pug2html, reload));
  watch("source/sass/**/*.scss", series(scss2css, reload));
  watch("source/js/**/*.js", "!source/js/components/react/**/*.js", series(script, reload));
  watch("source/js/components/react/login-profile/profile.js", series(scriptReact, reload));
  watch("source/*.html", series(html, reload));
  watch("source/image/**/*.{jpg,png,svg,ico}", series(copyImages, reload));
}

exports.default = series(
  clean,
  copy,
  copyImages,
  fontW,
  fontW2,
  copyFonts,
  copyJquery,
  scriptReact,

  parallel(
    pug2html,
    html,
    scss2css,
    script,
    sprite,
    createWebp
  ),

  series(
    server,
    watcher
  )
);

exports.build = series(
  clean,
  copy,
  copyImages,
  imageMin,
  fontW,
  fontW2,
  copyFonts,
  copyJquery,

  parallel(
    pug2html,
    html,
    scss2css,
    script,
    sprite,
    createWebp
  ),
  series(
    server,
    watcher
  )
);
