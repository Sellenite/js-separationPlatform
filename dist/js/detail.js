webpackJsonp([9],{

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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-25 14:35:27 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-03 20:04:08
 */
var util = __webpack_require__(0)

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

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43);


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-12-03 16:09:59 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-10 14:39:24
 */
__webpack_require__(44)
__webpack_require__(3)
__webpack_require__(5)
var util = __webpack_require__(0)
var _product = __webpack_require__(13)
var _cart = __webpack_require__(2)
var template = __webpack_require__(45)

var page = {
    data: {
        productId: util.getUrlParam('productId') || ''
    },
    init: function () {
        this.onLoad()
        this.bindEvent()
    },
    onLoad: function () {
        if (!this.data.productId) {
            util.goHome()
        } else {
            this.loadDetail()
        }
    },
    bindEvent: function () {
        var _this = this
        $(document).on('mouseenter', '.p-img-item', function () {
            var imageUrl = $(this).find('.p-img').attr('src')
            $('.main-img').attr('src', imageUrl)
        })
        $(document).on('click', '.p-count-btn', function () {
            var type = $(this).hasClass('plus') ? 'plus' : 'minus'
            var $pCount = $('.p-count')
            var currCount = parseInt($pCount.val())
            // 有库存的时候使用最低数量为1，否则为0
            var minCount = !!_this.data.stock ? 1 : 0
            var maxCount = _this.data.stock
            if (type === 'plus') {
                $pCount.val(currCount < maxCount ? currCount + 1 : maxCount)
            } else {
                $pCount.val(currCount > minCount ? currCount - 1 : minCount)
            }
        })
        $(document).on('click', '.cart-add', function () {
            if (!parseInt($('.p-count').val())) {
                util.errorTips('请至少添加一件商品')
                return
            }
            // 没有登录会请求到status为10，跳转到登录页
            _cart.addToCart({
                productId: _this.data.productId,
                count: $('.p-count').val()
            }, function (data, msg) {
                window.location.href = './result.html?type=cart-add'
            }, function (err) {
                util.errorTips(err)
            })
        })
    },
    loadDetail: function () {
        var html = ''
        var _this = this
        var $pageWrap = $('.page-wrap')
        $pageWrap.html('<div class="loading"></div>')
        _product.getProductDetail(this.data.productId, function (data, msg) {
            _this.data.stock = data.stock
            _this.filter(data)
            html = util.renderHtml(template, data)
            $pageWrap.html(html)
        }, function (err) {
            $pageWrap.html('<p class="err-tip">暂时找不到该商品</p>')
        })
    },
    filter: function (data) {
        // js数据引用类型，将data里的subImages改变了
        data.subImages = data.subImages.split(',')
    }
}

$(function () {
    page.init()
})

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = "<div class=\"intro-wrap\">\r\n    <div class=\"p-img-con\">\r\n        <div class=\"main-img-con\">\r\n            <img class=\"main-img\" src=\"{{imageHost}}{{mainImage}}\" alt=\"{{name}}\"/>\r\n        </div>\r\n        <ul class=\"p-img-list\">\r\n            {{#subImages}}\r\n            <li class=\"p-img-item\">\r\n                <img class=\"p-img\" src=\"{{imageHost}}{{.}}\" alt=\"{{name}}\" />\r\n            </li>\r\n            {{/subImages}}\r\n        </ul>\r\n    </div>\r\n    <div class=\"p-info-con\">\r\n        <h1 class=\"p-name\">{{name}}</h1>\r\n        <p class=\"p-subtitle\">{{subtitle}}</p>\r\n        <div class=\"p-info-item p-price-con\">\r\n            <span class=\"label\">价格:</span>\r\n            <span class=\"info\">￥{{price}}</span>\r\n        </div>\r\n        <div class=\"p-info-item\">\r\n            <span class=\"label\">库存:</span>\r\n            <span class=\"info\">{{stock}}</span>\r\n        </div>\r\n        <div class=\"p-info-item p-count-con\">\r\n            <span class=\"label\">数量:</span>\r\n            {{#stock}}\r\n                <input class=\"p-count\" value=\"1\" readonly=\"\"/>\r\n            {{/stock}}\r\n            {{^stock}}\r\n                <input class=\"p-count\" value=\"0\" readonly=\"\"/>\r\n            {{/stock}}\r\n            <span class=\"p-count-btn plus\">+</span>\r\n            <span class=\"p-count-btn minus\">-</span>\r\n        </div>\r\n        <div class=\"p-info-item\">\r\n            <a class=\"btn cart-add\">加入购物车</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"detail-wrap\">\r\n    <div class=\"detail-tab-con\">\r\n        <ul class=\"tab-list\">\r\n            <li class=\"tab-item active\">详细描述</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"detail-con\">\r\n        {{{detail}}}\r\n    </div>\r\n</div>";

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

/***/ })

},[42]);