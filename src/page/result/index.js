/*
 * @Author: Sellenite 
 * @Date: 2017-11-10 21:23:10 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2018-01-01 20:23:53
 */
require('./index.css')
require('page/common/nav-simple/index.js')
var util = require('util/util.js')

$(function () {
    var type = util.getUrlParam('type') || 'default'
    var $element = $('.' + type + '-success')
    // 对支付成功页面做适配
    if (type === 'payment') {
        var orderNumber = util.getUrlParam('orderNumber')
        var $orderNumber = $element.find('.order-number')
        $orderNumber.attr('href', $orderNumber.attr('href') + orderNumber)
    }
    $element.show()
})