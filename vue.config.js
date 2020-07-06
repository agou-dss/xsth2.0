module.exports = {
    publicPath: '/',

    devServer: {
      port: 8989,
      proxy: {
        '/api': {
          target: 'http://www.zswl.com/index.php/home',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }