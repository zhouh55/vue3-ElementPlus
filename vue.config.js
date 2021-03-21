module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 192, // 换算的基数 --- 设计稿的 1/10. amfe-flexible 默认为 192
            // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
            //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。 添加 /* prettier-ignore */
            selectorBlackList: ['ig'],
            propList: ['*'],
            exclude: /node_modules/
          })
        ]
      }
    }
  },

  chainWebpack: config => {
    config.module
      .rule('worker-loader')
      .test(/\.worker\.js$/)
      .use('worker-loader')
      .loader('worker-loader')
      .end();

    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          enforce: true
        },

        elementPlus: {
          name: 'chunk-element-plus',
          test: /[\\/]node_modules[\\/]_?element-plus(.*)/,
          priority: 1, // 权重 优先级
          reuseExistingChunk: true,
          enforce: true
        },

        lodash: {
          name: 'chunk-lodash',
          test: /[\\/]node_modules[\\/]_?lodash(.*)/,
          priority: 1, // 权重 优先级
          reuseExistingChunk: true,
          enforce: true
        },

        highlight: {
          name: 'chunk-highlight',
          test: /[\\/]node_modules[\\/]_?highlight(.*)/,
          priority: 1, // 权重 优先级
          reuseExistingChunk: true,
          enforce: true
        },

        ol: {
          name: 'chunk-ol',
          test: /[\\/]node_modules[\\/]_?ol(.*)/,
          priority: 1, // 权重 优先级
          reuseExistingChunk: true,
          enforce: true
        }
      }
    });
  },

  devServer: {
    open: true,
    historyApiFallback: true
    // proxy: {

    // }
  }
};
