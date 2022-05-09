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
  /**
   * 自定义 markdown 渲染
   * @see https://remix.run/docs/en/v1/guides/mdx
   */
  async mdx(/*filename*/) {
    const [rehypeHighlight, remarkToc] = await Promise.all([
      import('rehype-highlight').then(mod => mod.default),
      import('remark-toc').then(mod => mod.default)
    ])
    return {
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeHighlight]
    }
  },
  cacheDirectory: './node_modules/.cache/remix',
  ignoredRouteFiles: ['.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}']
}
