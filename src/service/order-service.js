/*
 * @Author: Sellenite 
 * @Date: 2017-12-10 18:53:15 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2018-01-01 16:35:57
 */

var util = require('util/util.js');

var _order = {
    // 获取商品列表，订单确认页使用
    getProductList: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/order/get_order_cart_product.do'),
            success: resolve,
            error: reject
        })
    },
    // 创建提交订单，订单确认页使用
    createOrder: function (orderInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/order/create.do'),
            data: orderInfo,
            success: resolve,
            error: reject
        })
    },
    // 获取已提交订单，订单列表页使用
    getOrderList: function (listParam, resolve, reject) {
        util.request({
            url: util.getServerUrl('/order/list.do'),
            data: listParam,
            success: resolve,
            error: reject
        })
    },
    // 获取详细订单信息，订单详情页使用
    getOrderDetail: function (orderNumber, resolve, reject) {
        util.request({
            url: util.getServerUrl('/order/detail.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        })
    },
    // 取消订单，订单详情页使用
    cancelOrder: function (orderNumber, resolve, reject) {
        util.request({
            url: util.getServerUrl('/order/cancel.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        })
    }
}

module.exports = _order;