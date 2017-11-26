/*
 * @Author: Sellenite 
 * @Date: 2017-11-25 14:35:27 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-25 16:12:09
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
    }
}

module.exports = _product