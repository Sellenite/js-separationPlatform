/*
 * @Author: Sellenite 
 * @Date: 2017-11-25 14:35:27 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-03 20:04:08
 */
var util = require('util/util.js')

var _product = {
    // 获取商品列表，商品列表页使用
    getProductList: function (listParam, resolve, reject) {
        util.request({
            url: util.getServerUrl('/product/list.do'),
            data: listParam,
            success: resolve,
            error: reject
        })
    },
    // 获取商品详情，商品详情页使用
    getProductDetail: function (productId, resolve, reject) {
        util.request({
            url: util.getServerUrl('/product/detail.do'),
            data: {
                productId: productId
            },
            success: resolve,
            error: reject
        })
    }
}

module.exports = _product