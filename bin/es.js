// This is a file for esbuild
// I originally used just the cmd and npm scripts, but wanted glob syntax
// So i settled for this file and using resolve-glob to allow for glob syntax
// As it is not built in to esbuild

const esbuild = require("esbuild")
const glob = require('resolve-glob');


let files = glob.sync(['src/js/*.js']);

// esbuild.build({
//   entryPoints: files,
//   bundle: false,
//   minify: true,
//   treeShaking: true,
//   minifyWhitespace: true,
//   outdir: 'dist/new',
//   color: true
// }).catch(() => process.exit(1))


// const path = require('path')

esbuild.context({
  entryPoints: files,
  bundle: false,
  sourcemap: false,
  outdir: "dist/js",
  plugins: [],
  minify: true,
}).then(context => {
  if (process.argv.includes("--watch")) {
    // Enable watch mode
    context.watch()
    console.log("Watching...")
  } else {
    // Build once and exit if not in watch mode
    context.rebuild().then(result => {
      context.dispose()
    })
  }
}).catch(() => process.exit(1))