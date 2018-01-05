webpackJsonp([15],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11)

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-10 21:23:10 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2018-01-01 20:23:53
 */
__webpack_require__(96)
__webpack_require__(10)
var util = __webpack_require__(0)

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

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[94]);