var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var WebpackDevServer  = require('webpack-dev-server');
var webpack           = require('webpack');
var path              = require('path');
var WEBPACK_DEV       = process.env.NODE_ENV||'dev'

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
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin(
      { 
          url: 'http://localhost:8080' 
      }
    ),
    new webpack.LoaderOptionsPlugin({ 
      //自启浏览器配置     
      options: {
        denServer:{
          historyApiFallback:true,
          hot:true,
          inline:true
        },
      }
    })

  ]
}

// if('dev'===WEBPACK_DEV){
//   config.entry.common.push('webpack-dev-server/client?http://localhost:8088/')
// }
// package.json配的启动脚本命令
// "start": "set WEBPACK_DEV=dev && webpack-dev-server --inline --port 8088",
module.exports = config