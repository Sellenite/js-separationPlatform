/*
 * @Author: Sellenite 
 * @Date: 2017-11-09 22:18:59 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-09 23:04:28
 */
require('./index.css')
var util = require('util/util.js')
var template = require('./index.string')

var navSide = {
    option: {
        name: '',
        navList: [{
                name: 'user-center',
                desc: '个人中心',
                href: './user-center.html'
            },
            {
                name: 'order-list',
                desc: '我的订单',
                href: './order-list.html'
            },
            {
                name: 'pass-update',
                desc: '修改密码',
                href: './pass-update.html'
            },
            {
                name: 'about',
                desc: '关于MMall',
                href: './about.html'
            }
        ]
    },
    init: function (option) {
        this.option = $.extend({}, this.option, option)
        this.renderNav()
    },
    renderNav: function () {
        // 标记激活位置
        for (var i = 0, length = this.option.navList.length; i < length; i++) {
            if (this.option.navList[i].name === this.option.name) {
                this.option.navList[i].isActive = true
            }
        }
        // 渲染函数
        var navHtml = util.renderHtml(template, {
            navList: this.option.navList
        })
        $('.nav-side').html(navHtml)
    }
}

module.exports = navSide