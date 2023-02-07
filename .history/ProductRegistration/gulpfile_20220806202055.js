const gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const inject = require("gulp-inject");
const pug = require("gulp-pug");
const browserSync = require("browser-sync");
const reload = browserSync.reload;
const clean = require("gulp-clean");
const cleanCSS = require("gulp-clean-css");
const svgmin = require("gulp-svgmin");
const svgstore = require("gulp-svgstore");
const cheerio = require("gulp-cheerio");
const path = require("path");
var releaseMode = require("gulp-mode")({
    modes: ["production", "development"],
    default: "development",
    verbose: false,
});

const webpack = require("webpack");
const gutil = require("gulp-util");
const webpackConfigDevBE = require("./webpack.dev.be.config.js");
const webpackLegacyConfigProdBE = require("./webpack.legacy.prod.be.config.js");
const webpackConfigProdBE = require("./webpack.prod.be.config.js");
const webpackConfigDevFE = require("./webpack.dev.fe.config.js");
const webpackCopy = require("./webpack.copy.config.js");

const {outRoot, outTheme, outTemplates, templatesPath, cssPath, assetsPath} = require("./front.end.env.js");
gulp.task("test", (done) => {
    console.log("hello from gulp");
    console.log(`!${cssPath}/main.scss`);
    console.log(`${brandName}`);
    console.log(`${masterLayout}`);
    done();
});

gulp.task("clean-all", () =>
    gulp
    .src(`${outRoot}/**/*.*`, {
        read: false,
    })
    .pipe(clean({ force: true }))
);

gulp.task("build-js-dev-be", (done) => {
    webpack(webpackConfigDevBE, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        } else {
            gutil.log("[webpack]", stats.toString());
        }
        done();
    });
});
gulp.task("build-js-prod-be-legacy", (done) => {
    webpack(webpackLegacyConfigProdBE, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        } else {
            gutil.log("[webpack]", stats.toString());
        }
        done();
    });
});
gulp.task("build-js-prod-be", (done) => {
    webpack(webpackConfigProdBE, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        } else {
            gutil.log("[webpack]", stats.toString());
        }
        done();
    });
});

gulp.task("build-js-dev-fe", (done) => {
    webpack(webpackConfigDevFE, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        } else {
            gutil.log("[webpack]", stats.toString());
        }
        done();
    });
});
gulp.task("copy-assets", (done) => {
    webpack(webpackCopy, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        } else {
            gutil.log("[webpack]", stats.toString());
        }
        done();
    });
});
gulp.task("sass", () =>
    gulp
    .src([`${cssPath}/**/*.scss`])
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    // .pipe(
    //     releaseMode.production(
    //         rename(function (path) {
    //             path.basename += "-min";
    //         })
    //     )
    // )
    .pipe(releaseMode.production(cleanCSS()))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest(`${outTheme}/css`))
    .pipe(
        reload({
            stream: true,
        })
    )
);
gulp.task("pug", () =>
    gulp
    .src([`${templatesPath}/**/*.pug`, `!${templatesPath}/mixin/**/*.pug`])
    .pipe(
        pug({
            doctype: "html",
            pretty: true,
        })
    )
    .pipe(gulp.dest(`${outTemplates}`))
    .pipe(
        reload({
            stream: true,
        })
    )
);

gulp.task("inject-html", () =>
    gulp
    .src(`${outTemplates}/pages/*.html`)
    .pipe(
        inject(
            gulp.src([`${outTheme}/css/pages/*.css`, `${outTheme}/css/modules/*.css`, `${outTheme}/css/critical/*.css`], {
                read: false,
            }), {
                ignorePath: `${outTheme}`,
                addRootSlash: false,
                relative: true,
                name: "inject-style-modules",
                transform: function(filepath, file, index, length, targetFile) {
                    //console.log("filePath = " + filepath);
                    const d = new Date();
                    let time = d.getTime();
                    const content = targetFile.contents.toString("utf8");

                    const match = content.match(/<!--cssfiles:.+-->/);
                    let cssFiles = match[0];
                    cssFiles = cssFiles.replace("<!--cssfiles:", "").replace("-->", "");
                    const cssFileArr = cssFiles.split(",");
                    //console.log("cssFileArr = " + cssFileArr);
                    const filename = filepath.replace(/^.*[\\\/]/, "");
                    //console.log("filename = " + filename);
                    if (cssFileArr.includes(filename)) {
                        return `<link rel="stylesheet" href="${filepath}?v=${time}"></link>`;
                    }
                },
            }
        )
    )
    .pipe(
        inject(
            gulp.src([`${outTheme}/css/main*.css`], {
                read: false,
            }), {
                ignorePath: `${outTheme}`,
                addRootSlash: false,
                relative: true,
                name: "inject-style-main",
            }
        )
    )
    .pipe(
        inject(
            gulp.src([`${outRoot}/scripts/main.bundle*.js`, `${outRoot}/scripts/vendors.bundle*.js`], {
                read: false,
            }), {
                ignorePath: `${outRoot}`,
                addRootSlash: false,
                relative: true,
                name: "inject-script",
                transform: function(filepath) {
                    //console.log("filePath = " + filepath);
                    return `<script src="${filepath}" async ></script>`;
                },
            }
        )
    )
    .pipe(gulp.dest(`${outTemplates}/pages`))
);
gulp.task("svg-critical", function() {
    // ONLY build for SP and inject directly inline to default.html fe,_Master.cshtml be
    var svgs = gulp
        .src(`${assetsPath}/icons/inline/*.svg`)
        .pipe(
            svgmin(function(file) {
                var prefix = path.basename(file.relative, path.extname(file.relative));
                return {
                    plugins: [{
                        cleanupIDs: {
                            prefix: prefix + "-",
                            minify: true,
                        },
                    }, ],
                };
            })
        )
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(
            cheerio(function($) {
                // We need to add style for svg block to not break the layout
                $("svg").attr("style", "display:none;");
            })
        );

    function fileToString(filePath, file) {
        return file.contents.toString();
    }
    // Inject directly to the master file
    return gulp
        .src(`${outTemplates}/pages/*.html`)
        .pipe(inject(svgs, { transform: fileToString }))
        .pipe(gulp.dest(`${outTemplates}/pages`));
});

gulp.task("preprocessing", gulp.series("clean-all"));
gulp.task("build-theme", gulp.series("sass", "copy-assets"));
gulp.task("build-script", gulp.series("build-js-prod-be-legacy", "build-js-prod-be"));
gulp.task("build-theme:dev", gulp.series("pug", "sass", "copy-assets"));
gulp.task("build-script:dev", gulp.series("build-js-prod-be-legacy", "build-js-dev-be", "inject-html", "svg-critical"));
gulp.task("fe:dev", gulp.series("clean-all", "pug", "sass", "build-js-dev-fe", "inject-html", "svg-critical"));
gulp.task("be:dev", gulp.series("clean-all", "pug", "sass", "build-js-prod-be-legacy", "build-js-dev-be", "inject-html", "svg-critical"));
gulp.task("be:prod", gulp.series("clean-all", "sass", "build-js-prod-be-legacy", "build-js-prod-be"));