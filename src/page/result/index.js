/*
 * @Author: Sellenite 
 * @Date: 2017-11-10 21:23:10 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-10 21:38:57
 */
require('./index.css')
require('page/common/nav-simple/index.js')
var util = require('util/util.js')

$(function () {
    var type = util.getUrlParam('type') || 'default'
    var $element = $('.' + type + '-success')
    $element.show()
})