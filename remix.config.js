/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  /* default config */
  // appDirectory: 'app',
  // assetsBuildDirectory: 'public/build',
  // publicPath: '/build/',
  // routes(defineRoutes) {
  //   return defineRoutes(route => {
  //     route('/somewhere/cool/*', 'catchall.tsx')
  //   })
  // },
  // serverBuildPath: 'build/index.js',
  // serverBuildTarget: 'node-cjs',
  // serverDependenciesToBundle: [
  //   /^rehype.*/,
  //   /^remark.*/,
  //   /^unified.*/,
  //   '@sindresorhus/slugify'
  // ],
  cacheDirectory: './node_modules/.cache/remix',
  ignoredRouteFiles: ['.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}']
}
