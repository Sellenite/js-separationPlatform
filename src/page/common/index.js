/*
 * @Author: Sellenite 
 * @Date: 2017-11-07 19:54:27 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-01 22:53:31
 */
require('./layout.css')
require('./footer/index.css')
// font-amesome比较特殊，他需要引入特定的文件
require('node_modules/font-awesome/css/font-awesome.min.css')

/* sticky footer */
$(function () {
    $('.client-wrapper').children().last().css('padding-bottom', 90)
})