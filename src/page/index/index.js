/*
 * @Author: Sellenite 
 * @Date: 2017-11-03 20:10:08 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-21 23:04:39
 */
require('./index.css')
require('page/common/nav/index.js')
require('page/common/header/index.js')
require('util/slider/index.js')
/* require('util/slider/index.js') */
var navSide = require('page/common/nav-side/index.js')
var templateBanner = require('./banner.string')
var util = require('util/util.js')

$(function () {
    navSide.init({
        name: 'user-center'
    })

    // 渲染轮播内容
    var bannerHtml = util.renderHtml(templateBanner)
    $('.banner-con').html(bannerHtml)
    // 初始化轮播插件并绑定按键
    var $slider = $('.banner').unslider().data('unslider')
    $('.banner-arrow').on('click', function (e) {
        if ($(this).hasClass('prev')) {
            $slider.prev()
        } else {
            $slider.next()
        }
    })
})