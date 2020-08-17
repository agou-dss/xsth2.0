module.exports = {
    
    publicPath: '/',
    devServer: {
      port: 8989,
      proxy: {
        '/api': {
          target: 'http://9.ujinbi.com/html5/index.php/home/',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        },
        '/test': { //测试
            target: 'http://9test.ujinbi.com/html5/index.php/home/'
        },
      }
    },
}