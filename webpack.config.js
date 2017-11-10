/*
 * @Author: Sellenite 
 * @Date: 2017-11-03 19:41:26 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-10 21:23:51
 */
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

console.log(__dirname)
// F:\Workspace\js-separationPlatform
var testPath = path.resolve(__dirname, 'dist')
console.log(testPath)
// F:\Workspace\js-separationPlatform\dist

// 环境变量 dev | build
// 启动时候加参数定义，启动命令mac和window不太一样
// process是node的
// win: set WEBPACK_ENV=dev && webpack-dev-server --inline --port 8080
// mac: WEBPACK_ENV=dev webpack-dev-server --inline --port 8080  
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev'

function getHtmlConfig(name, title) {
    return {
        template: './src/view/' + name + '.html',
        filename: 'view/' + name + '.html',
        title: title,
        // js文件插入到body最后
        inject: true,
        hash: true,
        // 定义js
        chunks: ['common', name]
    }
}

var config = {
    // 采用多页面写法
    entry: {
        'common': ['./src/page/common/index.js'],
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js'],
        'result': ['./src/page/result/index.js']
    },
    output: {
        // __dirname：    获得当前执行文件所在目录的完整目录名，可以理解为当前项目根目录
        // __filename：   获得当前执行文件的带有完整绝对路径的文件名
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/dist/'
    },
    externals: {
        'jquery': 'window.jQuery'
    },
    plugins: [
        // 提取公共模块，当有两个以上require就会自动提取到base，
        // 并于common里面的index.js合并成同一个base.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        // 多个css单独打包插件
        new ExtractTextPlugin("css/[name].css"),
        // html模板处理，他会自动将link和script读取
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
        new HtmlWebpackPlugin(getHtmlConfig('login', '用户登录')),
        new HtmlWebpackPlugin(getHtmlConfig('result', '操作结果'))
    ],
    module: {
        loaders: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css-loader", "style-loader")
            },
            {
                // 防止一些hash结尾的图片
                test: /\.(gif|png|jpg)\??.*$/,
                loader: 'url-loader',
                options: {
                    // 单位是byte
                    limit: 8192,
                    name: 'resource/images/[name].[ext]'
                }
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'resource/fonts/[name].[ext]'
                }
            },
            {
                test: /\.string$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        // 配置别名
        alias: {
            // __dirname：    获得当前执行文件所在目录的完整目录名，可以理解为当前项目根目录
            node_modules: __dirname + '/node_modules',
            util: __dirname + '/src/util',
            page: __dirname + '/src/page',
            service: __dirname + '/src/service',
            image: __dirname + '/src/image'
        }
    },
    devServer: {
        // 默认就是true，设为false可以变为iframe模式，编译不发生页面刷新
        inline: true,
        // 端口，默认8080
        port: 8080
    }
};

// 执行 set WEBPACK_ENV=dev && webpack-dev-server会通过的条件
if ('dev' === WEBPACK_ENV) {
    // 旧版本使用inline方式需要以下语句，这版本默认inline，可以不写
    // inline的client，目的是使url地址发生变化，新版不用配置
    // config.entry.common.push('webpack-dev-server/client?http://localhost:8080/')
}

module.exports = config