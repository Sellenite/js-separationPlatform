/*
 * @Author: Sellenite 
 * @Date: 2017-11-08 23:36:50 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-08 23:38:19
 */
var util = require('util/util.js')

var _cart = {
    getCartCount: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/get_cart_product.do'),
            success: resolve,
            error: reject
        })
    }
}

module.exports = _cart