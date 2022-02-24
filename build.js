const esbuild = require('esbuild');
console.log('esbuild:',esbuild)
async function main(){
  esbuild.build({
    entryPoints: ['./src/index.js'],
    platform: 'browser',
    mainFields: ['browser', 'module','main'],
    bundle: true,
    logLevel: 'verbose',
    outdir: 'dist',
    format: 'esm',
    plugins: [{
      name: 'resolve',
      setup(build){
        build.onLoad({filter: /.*/},args => {
          console.log('args:',args.path)
        })
      }
    }]
  })
}
main();