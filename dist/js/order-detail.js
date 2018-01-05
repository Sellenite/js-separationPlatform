webpackJsonp([4],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-08 22:11:51 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-17 23:00:18
 */
var util = __webpack_require__(0)

var _user = {
    // 检测登录状态，nav组件使用
    checkLogin: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/get_user_info.do'),
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 注册，注册页面使用
    register: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/register.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 登录，登录页面使用
    login: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/login.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 检测用户名是否存在，注册页面使用
    checkUsername: function (username, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/check_valid.do'),
            data: {
                type: 'username',
                str: username
            },
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 根据用户名获取答案提示，找回密码页面使用
    getQuestion: function (username, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/forget_get_question.do'),
            data: {
                username: username
            },
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 根据提示答案获取token，找回密码页面使用
    checkAnswer: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/forget_check_answer.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 非登录状态下根据token等信息重置密码，找回密码页面使用
    resetPassword: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/forget_reset_password.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 登录状态下修改密码，修改密码页面使用
    updatePassword: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/reset_password.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 获取个人信息，个人中心页面使用，未登录状态下请求会返回不同的状态码
    // 所有需要载入用户信息的页面都要加载这个函数做验证
    getUserInfo: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/get_information.do'),
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 更新个人信息，修改更人信息页面使用
    updateUserInfo: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/update_information.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 退出登录状态，nav组件使用
    logout: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/logout.do'),
            method: 'POST',
            success: resolve,
            error: reject
        })
    }
}

module.exports = _user

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-12-10 18:53:15 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2018-01-01 16:35:57
 */

var util = __webpack_require__(0);

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

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-08 23:36:50 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-10 14:52:43
 */
var util = __webpack_require__(0)

var _cart = {
    // 拿到购物车数量，nav组件使用
    getCartCount: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/get_cart_product_count.do'),
            success: resolve,
            error: reject
        })
    },
    // 添加购物车功能，商品详情页使用
    addToCart: function (productInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/add.do'),
            data: productInfo,
            success: resolve,
            error: reject
        })
    },
    // 获取购物车列表，购物车页面使用
    getCartList: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/list.do'),
            success: resolve,
            error: reject
        })
    },
    // 选中一个购物车列表的物件，购物车页面使用
    selectProduct: function (productId, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/select.do'),
            data: {
                productId: productId
            },
            success: resolve,
            error: reject
        })
    },
    // 取消选中一个购物车列表的物件，购物车页面使用
    unSelectProduct: function (productId, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/un_select.do'),
            data: {
                productId: productId
            },
            success: resolve,
            error: reject
        })
    },
    // 全选购物车列表的物件，购物车页面使用
    selectAllProduct: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/select_all.do'),
            success: resolve,
            error: reject
        })
    },
    // 取消全选购物车列表的物件，购物车页面使用
    unSelectAllProduct: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/un_select_all.do'),
            success: resolve,
            error: reject
        })
    },
    // 更新购物车商品数量，购物车页面使用
    updateProduct: function (productInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/update.do'),
            data: productInfo,
            success: resolve,
            error: reject
        })
    },
    // 删除指定商品，购物车页面使用
    deleteProduct: function (productIds, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/delete_product.do'),
            data: {
                productIds: productIds
            },
            success: resolve,
            error: reject
        })
    }
}

module.exports = _cart

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-08 21:43:50 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-25 14:41:29
 */
__webpack_require__(4)
var util = __webpack_require__(0)
var _user = __webpack_require__(1)
var _cart = __webpack_require__(2)

var nav = {
    init: function () {
        this.bindEvent()
        this.loadUserInfo()
        this.loadCartCount()
        return this
    },
    bindEvent: function () {
        $('.js-login').on('click', function () {
            util.doLogin()
        })
        $('.js-register').on('click', function () {
            util.doRegister()
        })
        $('.js-logout').on('click', function () {
            _user.logout(function (data, msg) {
                window.location.reload()
            }, function (err) {
                util.errorTips(err)
            })
        })
    },
    loadUserInfo: function () {
        _user.checkLogin(function (data, msg) {
            $('.user.not-login').hide().siblings('.user.login').show().find('.username').text(data.username)
        }, function (err) {
            util.errorTips(err)
        })
    },
    loadCartCount: function () {
        _cart.getCartCount(function (data, msg) {
            $('.nav .cart-count').text(data || 0)
        }, function (err) {
            $('.nav .cart-count').text(0)
        })
    }
}

module.exports = nav.init()

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-09 19:53:06 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-25 14:45:08
 */
__webpack_require__(6)
var util = __webpack_require__(0)

var header = {
    init: function () {
        this.onLoad()
        this.bindEvent()
    },
    onLoad: function () {
        var keyword = util.getUrlParam('keyword')
        if (keyword) {
            $('#search-input').val(keyword)
        }
    },
    bindEvent: function () {
        var _this = this
        $('#search-btn').on('click', function () {
            _this.searchSubmit()
        })
        $('#search-input').on('keyup', function (e) {
            // 13是回车键的keycode
            if (e.keyCode === 13) {
                _this.searchSubmit()
            }
        })
    },
    // 搜索提交
    searchSubmit: function () {
        var keyword = $.trim($('#search-input').val())
        if (keyword) {
            window.location.href = './list.html?keyword=' + keyword
        } else {
            util.goHome()
        }
    }
}

header.init()

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * @Author: Sellenite 
 * @Date: 2018-01-01 16:13:09 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2018-01-01 16:37:34
 */



__webpack_require__(64);
__webpack_require__(3);
__webpack_require__(5);
var navSide = __webpack_require__(7);
var util = __webpack_require__(0);
var _order = __webpack_require__(12);
var template = __webpack_require__(65);

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

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\r\n    <div class=\"panel-title\">订单信息</div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"order-info\">\r\n            <div class=\"text-line\">\r\n                <span class=\"text\">订单号：{{orderNo}}</span>\r\n                <span class=\"text\">创建时间：{{createTime}}</span>\r\n            </div>\r\n            <div class=\"text-line\">\r\n                <span class=\"text\">\r\n                    收件人： \r\n                    {{receiverName}}\r\n                    {{shippingVo.receiverProvince}}\r\n                    {{shippingVo.receiverCity}}\r\n                    {{shippingVo.receiverAddress}}\r\n                    {{shippingVo.receiverMobile}}\r\n                </span>\r\n            </div>\r\n            <div class=\"text-line\">\r\n                <span class=\"text\">订单状态： {{statusDesc}}</span>\r\n            </div>\r\n            <div class=\"text-line\">\r\n                <span class=\"text\">支付方式：{{paymentTypeDesc}}</span>\r\n            </div>\r\n            <div class=\"text-line\">\r\n                {{#needPay}}\r\n                <a class=\"btn\" href=\"./payment.html?orderNumber={{orderNo}}\">去支付</a>\r\n                {{/needPay}}\r\n                {{#isCancelable}}\r\n                <a class=\"btn order-cancel\">取消订单</a>\r\n                {{/isCancelable}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"panel\">\r\n    <div class=\"panel-title\">商品清单</div>\r\n    <div class=\"panel-body\">\r\n        <table class=\"product-table\">\r\n            <tr>\r\n                <th class=\"cell-th cell-img\">&nbsp;</th>\r\n                <th class=\"cell-th cell-info\">商品信息</th>\r\n                <th class=\"cell-th cell-price\">单价</th>\r\n                <th class=\"cell-th cell-count\">数量</th>\r\n                <th class=\"cell-th cell-total\">小计</th>\r\n            </tr>\r\n            {{#orderItemVoList}}\r\n            <tr>\r\n                <td class=\"cell cell-img\">\r\n                    <a href=\"./detail.html?productId={{productId}}\" target=\"_blank\">\r\n                        <img class=\"p-img\" src=\"{{imageHost}}{{productImage}}\" alt=\"{{productName}}\" />\r\n                    </a>\r\n                </td>\r\n                <td class=\"cell cell-info\">\r\n                    <a class=\"link\" href=\"./detail.html?productId={{productId}}\" target=\"_blank\">{{productName}}</a>\r\n                </td>\r\n                <td class=\"cell cell-price\">￥{{currentUnitPrice}}</td>\r\n                <td class=\"cell cell-count\">{{quantity}}</td>\r\n                <td class=\"cell cell-total\">￥{{totalPrice}}</td>\r\n            </tr>\r\n            {{/orderItemVoList}}\r\n        </table>\r\n        <p class=\"total\">\r\n            <span>订单总价：</span>\r\n            <span class=\"total-price\">￥{{payment}}</span>\r\n        </p>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-09 22:18:59 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-17 22:12:59
 */
__webpack_require__(8)
var util = __webpack_require__(0)
var template = __webpack_require__(9)

var navSide = {
    option: {
        name: '',
        navList: [{
                name: 'user-center',
                desc: '个人中心',
                href: './user-center.html'
            },
            {
                name: 'order-list',
                desc: '我的订单',
                href: './order-list.html'
            },
            {
                name: 'user-pass-update',
                desc: '修改密码',
                href: './user-pass-update.html'
            },
            {
                name: 'about',
                desc: '关于MMall',
                href: './about.html'
            }
        ]
    },
    init: function (option) {
        this.option = $.extend({}, this.option, option)
        this.renderNav()
    },
    renderNav: function () {
        // 标记激活位置
        for (var i = 0, length = this.option.navList.length; i < length; i++) {
            if (this.option.navList[i].name === this.option.name) {
                this.option.navList[i].isActive = true
            }
        }
        // 渲染函数
        var navHtml = util.renderHtml(template, {
            navList: this.option.navList
        })
        $('.nav-side').html(navHtml)
    }
}

module.exports = navSide

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = "{{#navList}}\r\n{{#isActive}}\r\n    <li class=\"nav-item active\">\r\n{{/isActive}}\r\n{{^isActive}}\r\n    <li class=\"nav-item\">\r\n{{/isActive}}\r\n        <a class=\"link\" href=\"{{href}}\">{{desc}}</a>\r\n    </li>\r\n{{/navList}}";

/***/ })

},[62]);