/*
 * @Author: Sellenite 
 * @Date: 2017-11-03 19:41:26 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-25 15:17:34
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
        'list': ['./src/page/list/index.js'],
        'user-login': ['./src/page/user-login/index.js'],
        'user-register': ['./src/page/user-register/index.js'],
        'user-pass-reset': ['./src/page/user-pass-reset/index.js'],
        'user-pass-update': ['./src/page/user-pass-update/index.js'],
        'user-center': ['./src/page/user-center/index.js'],
        'user-center-update': ['./src/page/user-center-update/index.js'],
        'result': ['./src/page/result/index.js']
    },
    output: {
        // __dirname：    获得当前config文件的绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        // 用于webpack-dev-server编译存在的内存中，有别于path，编译路径相同
        publicPath: '/assets/'
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
        new HtmlWebpackPlugin(getHtmlConfig('list', '商品列表')),
        new HtmlWebpackPlugin(getHtmlConfig('user-login', '用户登录')),
        new HtmlWebpackPlugin(getHtmlConfig('user-register', '用户注册')),
        new HtmlWebpackPlugin(getHtmlConfig('user-pass-reset', '找回密码')),
        new HtmlWebpackPlugin(getHtmlConfig('user-pass-update', '修改密码')),
        new HtmlWebpackPlugin(getHtmlConfig('user-center', '用户中心')),
        new HtmlWebpackPlugin(getHtmlConfig('user-center-update', '修改个人信息')),
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
                    // 超过这个值的化就保存为图片而不是用base64
                    // html里也可以使用<%= require('../') %>进行图片的加载
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
            // __dirname：    获得当前config文件的绝对路径
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