#项目的安装初始化
# npm install

#开发模式
# npm run dev 

#webpack.config.js配置说明
#全局安装webpack@3.10.0版本
#cnpm install webpack@3.10.0 -g
#项目安装
#cnpm install webpack@3.10.0 --save-dev

#webpack-dev-server 配置
#cnpm install webpack-dev-server@1.15.0 -g  说明3.x版本有点问题
#项目配置
#cnpm install webpack-dev-server@1.15.0 --save-dev

#脚本命令的配置和热更新
#在webpack.config.js配置
#var OpenBrowserPlugin = require('open-browser-webpack-plugin');
#var WebpackDevServer  = require('webpack-dev-server');
#plugins:[
#   new webpack.HotModuleReplacementPlugin(),
#    new OpenBrowserPlugin(
#      { 
#         url: 'http://localhost:8080' 
#     }
#    ),
#    new webpack.LoaderOptionsPlugin({ 
#      //自启浏览器配置     
#      options: {
#        denServer:{
#          historyApiFallback:true,
#          hot:true,
#          inline:true
#        },
#      }
#    })

#在package.json scripts配置
# "dev": "webpack-dev-server --hot --inline"

