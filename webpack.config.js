
var webpack = require('webpack');
var path = require('path');
var WEBPACK_DEV = process.env.NODE_ENV||'dev'
var config = {
  context: path.join(__dirname),  
  entry: {
    common:["./src/root.js"]
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs'], //添加组件的插件配置
        }
      },
      //下面是使用 ant-design 的配置文件
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  },
}

if('dev'===WEBPACK_DEV){
  config.entry.common.push('webpack-dev-server/client?http://localhost:8088/')
}

module.exports = config