import {
    setInterval
} from 'timers';

/*
 * @Author: Sellenite 
 * @Date: 2018-01-01 18:36:55 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2018-01-01 20:14:18
 */


'use strict';

require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var util = require('util/util.js');
var _payment = require('service/payment-service.js');
var template = require('./index.string');

// page 逻辑部分
var page = {
    data: {
        orderNumber: util.getUrlParam('orderNumber')
    },
    init: function () {
        this.onLoad();
    },
    onLoad: function () {
        // 加载detail数据
        this.loadPaymentInfo();
    },
    // 加载订单列表
    loadPaymentInfo: function () {
        var _this = this
        var paymentHtml = ''
        var $pageWrap = $('.page-wrap')
        $pageWrap.html('<div ckass="loading"></div>')
        _payment.getPaymentInfo(this.data.orderNumber, function (data, msg) {
            paymentHtml = util.renderHtml(template, data)
            $pageWrap.html(paymentHtml)
            _this.listenOrderStatus()
        }, function (err) {
            $pageWrap.html('<p class="err-tip">' + err + '</p>')
        })
    },
    // 轮询订单状态
    listenOrderStatus: function () {
        var _this = this
        this.paymentTimer = setInterval(function () {
            _payment.getPaymentStatus(_this.data.orderNumber, function (data, msg) {
                if (data === true) {
                    window.location.href = './result.html?type=payment&orderNumber=' + _this.data.orderNumber
                }
            }, function (err) {
                util.errorTips(err)
            })
        }, 5e3)
    }
}

$(function () {
    page.init();
});