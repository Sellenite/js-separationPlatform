/*
 * @Author: Sellenite 
 * @Date: 2017-12-10 19:56:08 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2018-01-01 20:10:47
 */
var util = require('util/util.js');

var _payment = {
    // 获取支付信息，订单支付页面使用
    getPaymentInfo: function (orderNumber, resolve, reject) {
        util.request({
            url: util.getServerUrl('/order/pay.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        })
    },
    // 查询支付状态，订单支付页面使用
    getPaymentStatus: function (orderNumber, resolve, reject) {
        util.request({
            url: util.getServerUrl('/order/query_order_pay_status.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        })
    }
}

module.exports = _payment;