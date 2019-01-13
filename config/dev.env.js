var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxy: {
    '/api': {
      target: 'https://monoame.com/api',
      ws: true,
      changeOrigin: true
    }
  }
})
