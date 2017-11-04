/*
 * @Author: Sellenite 
 * @Date: 2017-11-03 19:41:26 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-04 14:55:11
 */
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// 环境变量 dev | build
// 启动时候加参数定义，启动命令mac和window不太一样
// process是node的
// win: set WEBPACK_ENV=dev && webpack-dev-server --inline --port 8080
// mac: WEBPACK_ENV=dev webpack-dev-server --inline --port 8080  
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev'

function getHtmlConfig(name) {
    return {
        template: './src/view/' + name + '.html',
        filename: 'view/' + name + '.html',
        inject: true,
        hash: true,
        chunks: ['common', name]
    }
}

var config = {
    // 采用多页面写法
    entry: {
        // 这里需要打包一个webpack-dev-server的client，这样所有加载了common的都能够用热加载
        'common': ['./src/page/common/index.js'],
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/dist'
    },
    externals: {
        'jquery': 'window.jQuery'
    },
    plugins: [
        // 提取公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        // 多个css单独打包插件
        new ExtractTextPlugin("css/[name].css"),
        // html模板处理
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login'))
    ],
    module: {
        loaders: [
            {
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
            }
        ]
    }
};

if ('dev' === WEBPACK_ENV) {
    // 开发环境下才添加热更新，否则不加，加到都会用到的模块里
    config.entry.common.push('webpack-dev-server/client?http://localhost:8080/')
}

module.exports = config