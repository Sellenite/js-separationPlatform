/*
 * @Author: Sellenite 
 * @Date: 2018-01-01 16:13:09 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2018-01-01 16:37:34
 */


'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var util = require('util/util.js');
var _order = require('service/order-service.js');
var template = require('./index.string');

var page = {
    data: {
        orderNumber: util.getUrlParam('orderNumber')
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        // 初始化左侧菜单
        navSide.init({
            name: 'order-list'
        })
        this.loadOrderDetail()
    },
    bindEvent: function () {
        var _this = this
        $(document).on('click', '.order-cancel', function () {
            if (window.confirm('确认取消该订单？')) {
                _order.cancelOrder(_this.data.orderNumber, function (data, msg) {
                    util.successTips('该订单取消成功！')
                    _this.loadOrderDetail()
                }, function (err) {
                    util.errorTips(err)
                })
            }
        })
    },
    loadOrderDetail: function () {
        var _this = this
        var orderDetailHtml = ''
        var $content = $('.content')
        $('.content').html('<div class="loading"></div>')
        _order.getOrderDetail(this.data.orderNumber, function (data, msg) {
            _this.dataFilter(data)
            orderDetailHtml = util.renderHtml(template, data)
            $content.html(orderDetailHtml)
        }, function (err) {
            $content.html('<p class="err-tip">' + err + '</p>')
        })
    },
    // 数据处理
    dataFilter: function (data) {
        data.needPay = data.status === 10
        data.isCancelable = data.status === 10
    }
};

$(function () {
    page.init();
});