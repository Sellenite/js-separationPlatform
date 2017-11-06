/*
 * @Author: Sellenite 
 * @Date: 2017-11-06 18:54:31 
 * @Last Modified by:   Sellenite 
 * @Last Modified time: 2017-11-06 18:54:31 
 */
var conf = {
    serverHost: ''
}

var Hogan = require('hogan.js')

var util = {
    request: function (param) {
        var _this = this
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            data: param.data || '',
            success: function (res) {
                // 请求成功
                if (res.status === 0) {
                    typeof param.success === 'function' && param.success(res.data, res.msg)
                }
                // 没有登录状态，需要强制登陆，后台会判断有没有登录并返回状态码
                else if (res.status === 10) {
                    _this.doLogin()
                }
                // 请求数据错误
                else if (res.status === 1) {
                    typeof param.success === 'function' && param.error(res.msg)
                }
            },
            error: function (err) {
                typeof param.success === 'function' && param.error(res.statusText)
            }
        })
    },
    // 获取服务器地址
    getServerUrl: function (path) {
        return conf.serverHost + path
    },
    // 获取url参数
    getUrlParam: function (name) {
        var regex = new RegExp('(^|&)(' + name + ')=' + '([^&]*)(&|$)')
        var result = window.location.search.substr(1).match(regex)
        // 3为代表匹配([^&]*)
        return result ? decodeURIComponent(result[3]) : null
    },
    // 渲染html模板，基于hogan.js
    renderHtml: function (template, data) {
        var html = Hogan.compile(template)
        var result = html.render(data)
        return result
    },
    doLogin: function () {
        // 带参数，可以根据参数跳回上次请求的页面
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href)
    }
}

module.exports = util