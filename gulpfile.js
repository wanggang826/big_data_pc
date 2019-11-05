//
// 引入插件
// --------------------------------------------------
var gulp = require("gulp");
var watch = require("gulp-watch");

var uglify = require("gulp-uglify"); // 压缩JavaScript
var concat = require("gulp-concat"); // 文件合并
var jshint = require("gulp-jshint"); // JavaScript语法校验
var jscs = require("gulp-jscs"); // 检查JavaScript代码风格
var jshintStylish = require("jshint-stylish"); // jshint样式

var postcss = require("gulp-postcss");
var sass = require("gulp-sass"); // sass编译
var sassLint = require("gulp-sass-lint"); // sass 语法校验
var autoprefixer = require("gulp-autoprefixer"); // 加前缀
var cleanCSS = require("gulp-clean-css"); // 压缩样式
var concatCSS = require("gulp-concat-css"); // 合并样式
var csslint = require("gulp-csslint"); // 样式语法校验
var csslintStylish = require("csslint-stylish"); // csslint样式

var fileInclude = require("gulp-file-include"); // 文件模板引入
var htmlmin = require("gulp-htmlmin"); // 压缩HTML
var htmlhint = require("gulp-htmlhint"); // HTML语法校验
var htmlhintStylish = require("htmlhint-stylish"); // htmlhint样式
var prettify = require("gulp-html-prettify");

var imagemin = require("gulp-imagemin"); // Minify PNG, JPEG, GIF and SVG
var pngquant = require("imagemin-pngquant"); // png图片优化

var browserSync = require("browser-sync");
var reload = browserSync.reload;

var sourcemaps = require("gulp-sourcemaps");

var changed = require("gulp-changed"); // 只编译修改过的文件
var changedInPlace = require('gulp-changed-in-place');
var cache = require("gulp-cached"); // 只传递更改过的文件
var order = require("gulp-order"); // 按顺序打包

var useref = require("gulp-useref"); // 根据"注释"解析和合并 HTML 文件中未经优化的脚本和样式表
var htmlreplace = require("gulp-html-replace");
var rev = require("gulp-rev"); // 生成带 hash 版本的资源文件，生成 manifest 文件
var revReplace = require("gulp-rev-replace"); // 被 gulp-rev 重命名，重写文件名
var revCSSURL = require("gulp-rev-css-url"); // 被 gulp-rev 重命名，重写文件中的文件引用
var revDeleteOriginal = require("gulp-rev-delete-original");
var rename = require("gulp-rename"); // 重命名文件
var del = require("del"); // 删除文件和目录
var header = require("gulp-header"); // JS、CSS文件中添加头部注释
var footer = require("gulp-footer"); // JS、CSS文件中添加尾部注释
var taskListing = require("gulp-task-listing"); // 列出所有 task
var notify = require("gulp-notify"); // 控制台输出信息

var plumber = require("gulp-plumber"); // 自动处理全部错误信息防止因为错误而导致 watch 不正常工作
var remember = require("gulp-remember"); // 把所有的文件放回 stream
var merge = require("merge-stream"); // 相同的处理 stream 合成一个任务返回
var filter = require("gulp-filter"); // 将stream里的文件根据一定的规则进行筛选过滤
var runSequence = require("run-sequence"); // 按顺序执行 task
var bytediff = require("gulp-bytediff"); // 统计文件大小变化


//
// 路径配置
// --------------------------------------------------
var path = {
    build: {
        html: "dist/",
        js: "dist/js/",
        css: "dist/css/",
        img: "dist/image/",
        font: "dist/font/",
        lib: "dist/lib/"
    },
    src: {
        pages: "src/pages/*.html",
        tpl: "src/tpl/*.html",
        js: "src/js/**/*.js",
        css: "src/css/**/*.css",
        scss: "src/scss/**/*.scss",
        img: "src/image/**/*.*",
        font: "src/font/**/*.*",
        html: "src/*.html",
        lib:"src/lib/**/*.*"
    },
    watch: {
        html: "src/**/*.html",
        js: "src/js/**/*.js",
        scss: "src/scss/**/*.scss",
        img: "src/image/**/*.*",
        font: "src/font/**/*.*"
    },
    dir: {
        root: "./",
        src: "./src/",
        build: "./dist/"
    }
};

var config = {
    server: {
        baseDir: "./dist"
    },
    // tunnel: true,
    // logPrefix: "Frontend",
    host: "localhost",
    port: 8000
};

//
// 静态 HTML 处理：根据页面(pages)中模块(tpl)生成HTML
// --------------------------------------------------
gulp.task("html:dev", function () {
    return gulp.src(path.src.pages)
        .pipe(plumber())
        .pipe(changed(path.build.html + "*.html"))
        .pipe(fileInclude({
            prefix: "@@",
            basepath: path.dir.src // @root, @file, basepath
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({
            stream: true
        }))
        .pipe(plumber.stop())
        .pipe(notify("++++++ pages、tpl 合并完成 : <%= file.relative %>"));
});

gulp.task("html:build", function () {
    return gulp.src(path.src.pages)
        .pipe(plumber())
        .pipe(fileInclude({
            prefix: "@@",
            basepath: path.dir.src
        }))
        // .pipe(useref())
        .pipe(htmlreplace({
            "css": "css/main.min.css"
        }))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(path.build.html))
        .pipe(notify("++++++ pages、tpl 合并打包完成 : <%= file.relative %>"));
});
//
// SASS , CSS
// --------------------------------------------------
// outputStyle: nested, expanded, compact, compressed
gulp.task("scss:dev", function () {
    return gulp.src(path.src.scss)
        .pipe(changed(path.build.css))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(cache("scss"))
        .pipe(sass.sync({
            outputStyle: "compact"
        }).on("error", sass.logError))
        .pipe(autoprefixer({
            browsers: ["last 5 versions"],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(plumber.stop())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({
            stream: true
        }))
        .pipe(notify("++++++ SCSS 处理完成 : <%= file.relative %>"));
});

gulp.task("scss:build", function () {
    gulp.src(path.src.scss)
        .pipe(plumber())
        // .pipe(sourcemaps.init())
        .pipe(sass.sync({
            outputStyle: "expanded"
        }).on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(concatCSS("main.css"))
        .pipe(gulp.dest(path.build.css))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(cleanCSS())
        // .pipe(sourcemaps.write())
        .pipe(plumber.stop())
        .pipe(gulp.dest(path.build.css))
        .pipe(notify("++++++ SCSS 打包完成 : <%= file.relative %>"));
});

//
// 拷贝图片和字体
// --------------------------------------------------
gulp.task("image", function () {
    gulp.src(path.src.img)
        .pipe(plumber())
        // .pipe(changedInPlace())
        // .pipe(imagemin({
        //     progressive: true,
        //     svgoPlugins: [{
        //         removeViewBox: false
        //     }],
        //     use: [pngquant()],
        //     interlaced: true
        // }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({
            stream: true
        }))
        .pipe(plumber.stop())
        .pipe(notify("++++++ 图片文件处理完成"));
});

gulp.task("font", function () {
    gulp.src(path.src.font)
        .pipe(gulp.dest(path.build.font))
        .pipe(reload({
            stream: true
        }))
        .pipe(notify("++++++ 字体文件处理完成"));
});
gulp.task("lib", function () {
    gulp.src(path.src.lib)
        .pipe(gulp.dest(path.build.lib))
        .pipe(reload({
            stream: true
        }))
        .pipe(notify("++++++ 依赖库处理完成"));
});
gulp.task("js:dev", function () {
    gulp.src(path.src.js)
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({
            stream: true
        }))
        .pipe(notify("++++++ js文件处理完成"));
});
// gulp.task("js:build", function () {
//     gulp.src(path.src.js)
//         // .pipe(HeaderTpl())
//         .pipe(gulp.dest(path.build.js))
//         // .pipe(uglify())
//         .pipe(reload({
//             stream: true
//         }))
//         .pipe(notify("++++++ js文件处理完成"));
// });
gulp.task("js:build", function () {
    return gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(cache("js:build"))
        // .pipe(sourcemaps.init())
        .pipe(HeaderTpl())
        .pipe(uglify())
        // .pipe(sourcemaps.write("maps"))
        .pipe(plumber.stop())
        .pipe(gulp.dest(path.build.js))
        .pipe(notify("++++++ JavaScript 打包完成 : <%= file.relative %>"));
});
//
// 删除目录 谨慎配置，不要误删除 src 目录及父层目录
// --------------------------------------------------
gulp.task("clean", function () {
    return del(path.dir.build).then(paths => {
        console.log("删除:\n", paths.join("\n"));
    });
});

gulp.task("clean:css", function () {
    return del(path.build.css).then(paths => {
        console.log("删除:", paths.join("\n"));
    });
});

gulp.task("clean:js", function () {
    return del(path.build.js).then(paths => {
        console.log("删除:", paths.join("\n"));
    });
});

gulp.task("clean:image", function () {
    return del(path.build.img).then(paths => {
        console.log("删除:", paths.join("\n"));
    });
});

gulp.task("clean:font", function () {
    return del(path.build.font).then(paths => {
        console.log("删除:", paths.join("\n"));
    });
});


//
// 静态文件版本
// --------------------------------------------------

// 文件名生成 hash 编码
gulp.task("rev", function () {
    return gulp.src([path.build.css + "**/*.css", path.build.js + "**/*.js"], {
            base: path.dir.build
        })
        .pipe(plumber())
        .pipe(rev())
        .pipe(revCSSURL())
        .pipe(revDeleteOriginal())
        .pipe(gulp.dest(path.dir.build))
        .pipe(rev.manifest())
        .pipe(plumber.stop())
        .pipe(gulp.dest(path.dir.build))
        .pipe(notify("++++++ 文件名生成 hash 编码 : <%= file.relative %>"));
});

// 根据rev-manifest.json对照映射重写文件引用
gulp.task("rep", function () {
    var MANIFEST = gulp.src(path.dir.build + "rev-manifest.json");

    return gulp.src(path.build.html + "*.html")
        // .pipe(plumber())
        .pipe(revReplace({
            manifest: MANIFEST
        }))
        // .pipe(plumber.stop())
        .pipe(gulp.dest(path.build.html))
        .pipe(notify("++++++ rev-manifest.json映射重写文件引用 : <%= file.relative %>"));
});



//
// 监听任务
// THML tpl 的修改，需要更新引用的 pages 文件才可生效；
// SCSS variable、 mixin等带 "_"的文件的修改，需要更新引用文件才可生效。
// --------------------------------------------------

//
// BrowSerSync & Watch
// --------------------------------------------------
gulp.task("serve", function () {
    browserSync(config);
});

gulp.task("watch", function () {
    watch([path.watch.html], function (event, cb) {
        gulp.start("html:dev");
    });
    watch([path.watch.scss], function (event, cb) {
        gulp.start("scss:dev");
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start("js:dev");
    });
    watch([path.watch.img], function (event, cb) {
        gulp.start("image");
    });
    watch([path.watch.font], function (event, cb) {
        gulp.start("font");
    });
});

gulp.task("dev", function () {
    runSequence(
        "clean",
        ["html:dev", "scss:dev", "js:dev", "image", "font", "lib"],
        "watch",
        "serve"
    );
});

gulp.task("build", function () {
    runSequence(
        "clean",
        ["html:build", "scss:build", "js:build", "image", "font", "lib"]
    );
});
//
// 列出所有 gulp 任务
// --------------------------------------------------
gulp.task("help", taskListing);
gulp.task("default", ["dev"]);

//
// 注释模板
// --------------------------------------------------

function HeaderTpl() {
    var pkg = require("./package.json");
    var template = ["/**",
        " * <%= pkg.name %> - <%= pkg.description %>",
        " * @version v<%= pkg.version %>",
        " * @license <%= pkg.license %>",
        " */",
        ""
    ].join("\n");
    return header(template, {
        pkg: pkg
    });
}
/*
cnpm install -g gulp-cli node-sass jshint
cnpm install --save-dev browser-sync csslint-stylish del gulp gulp-autoprefixer gulp-bytediff gulp-cached gulp-changed gulp-changed-in-place gulp-clean-css gulp-concat gulp-concat-css gulp-csslint gulp-file-include gulp-filter gulp-footer gulp-header gulp-html-prettify gulp-html-replace gulp-htmlhint gulp-htmlmin gulp-imagemin gulp-jscs gulp-jshint gulp-notify gulp-order gulp-plumber gulp-remember gulp-rename gulp-rev gulp-rev-css-url gulp-rev-delete-original gulp-rev-replace gulp-rigger gulp-sass gulp-sass-lint gulp-sourcemaps gulp-task-listing gulp-uglify gulp-useref gulp-watch htmlhint-stylish imagemin-pngquant jshint-stylish merge-stream postcss postcss-cssnext run-sequence
 */