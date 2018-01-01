/*
 * @Author: Sellenite 
 * @Date: 2017-12-10 19:56:08 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-31 17:41:02
 */
var util = require('util/util.js');

var _address = {
    // 获取地址列表功能，订单确认页使用
    getAddressList: function (addressInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/shipping/list.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        })
    },
    // 保存地址功能，订单确认页使用
    save: function (addressInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/shipping/add.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        })
    },
    // 更新地址功能，订单确认页使用
    update: function (addressInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/shipping/update.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        })
    },
    // 删除地址功能，订单确认页使用
    deleteAddress: function (shippingId, resolve, reject) {
        util.request({
            url: util.getServerUrl('/shipping/del.do'),
            data: {
                shippingId: shippingId
            },
            success: resolve,
            error: reject
        })
    },
    // 编辑更新地址功能，订单确认页使用
    getAddress: function (shippingId, resolve, reject) {
        util.request({
            url: util.getServerUrl('/shipping/select.do'),
            data: {
                shippingId: shippingId
            },
            success: resolve,
            error: reject
        })
    }
}

module.exports = _address;