webpackJsonp([10],{

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

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-12-06 23:09:21 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-10 18:58:08
 */
__webpack_require__(48)
__webpack_require__(5)
var nav = __webpack_require__(3)
var util = __webpack_require__(0)
var _cart = __webpack_require__(2)
var template = __webpack_require__(49)

var page = {
    data: {

    },
    init: function () {
        this.onLoad()
        this.bindEvent()
    },
    onLoad: function () {
        this.loadCart()
    },
    bindEvent: function () {
        var _this = this
        // 监听商品单选
        $(document).on('change', '.cart-select', function () {
            var $this = $(this)
            var productId = $this.parents('.cart-table').data('product-id')
            // 这里是点击后的状态
            // 选中一个商品
            if (this.checked) {
                _cart.selectProduct(productId, function (data, msg) {
                    _this.renderCart(data)
                }, function (err) {
                    _this.showCartError()
                })
            } else {
                // 取消选中一个商品
                _cart.unSelectProduct(productId, function (data, msg) {
                    _this.renderCart(data)
                }, function (err) {
                    _this.showCartError()
                })
            }
        })
        // 监听商品全选
        $(document).on('change', '.cart-select-all', function () {
            var $this = $(this)
            // 这里是点击后的状态
            // 全选
            if (this.checked) {
                _cart.selectAllProduct(function (data, msg) {
                    _this.renderCart(data)
                }, function (err) {
                    _this.showCartError()
                })
            } else {
                // 取消全选
                _cart.unSelectAllProduct(function (data, msg) {
                    _this.renderCart(data)
                }, function (err) {
                    _this.showCartError()
                })
            }
        })
        // 监听商品数量变化
        $(document).on('click', '.count-btn', function () {
            var $this = $(this),
                $pCount = $this.siblings('.count-input'),
                currCount = parseInt($pCount.val()),
                type = $this.hasClass('plus') ? 'plus' : 'minus',
                productId = $this.parents('.cart-table').data('product-id'),
                minCount = 1,
                maxCount = parseInt($pCount.data('max')),
                newCount = 0
            if (type === 'plus') {
                if (currCount >= maxCount) {
                    util.errorTips('该商品数量已达到上限')
                    return
                } else {
                    newCount = currCount + 1
                }
            } else {
                if (currCount <= minCount) {
                    return
                } else {
                    newCount = currCount - 1
                }
            }
            _cart.updateProduct({
                productId: productId,
                count: newCount
            }, function (data, msg) {
                _this.renderCart(data)
            }, function (err) {
                _this.showCartError()
            })
        })
        // 监听商品删除
        $(document).on('click', '.cart-delete', function () {
            if (window.confirm('确认要删除该商品？')) {
                var productId = $(this).parents('.cart-table').data('product-id')
                _this.deleteCartProduct(productId)
            }
        })
        // 监听选中商品删除
        $(document).on('click', '.delete-selected', function () {
            if (window.confirm('确认要删除所选商品？')) {
                var productIds = []
                var $selectItem = $('.cart-select:checked')
                for (var i = 0; i < $selectItem.length; i++) {
                    var itemId = $($selectItem[i]).parents('.cart-table').data('product-id')
                    productIds.push(itemId)
                }
                if (productIds.length) {
                    _this.deleteCartProduct(productIds)
                } else {
                    util.errorTips('请选中要删除的商品')
                }
            }
        })
        // 提交购物车
        $(document).on('click', '.btn-submit', function () {
            if (_this.data.cartInfo && _this.data.cartInfo.cartTotalPrice > 0) {
                window.location.href = './order-confirm.html'
            } else {
                util.errorTips('请选中商品后再提交')
            }
        })
    },
    loadCart: function () {
        var _this = this
        _cart.getCartList(function (data, msg) {
            _this.renderCart(data)
        }, function (err) {
            _this.showCartError()
        })
    },
    renderCart: function (data) {
        this.filter(data)
        this.data.cartInfo = data
        var cartHtml = util.renderHtml(template, data)
        $('.page-wrap').html(cartHtml)
        // 联动nav购物车数量
        nav.loadCartCount()
    },
    filter: function (data) {
        // 添加过滤字段，renderCart时的逻辑用到
        data.notEmpty = !!data.cartProductVoList.length
    },
    showCartError: function () {
        $('.page-wrap').html('<p class="err-tip">数据获取错误，请刷新</p>')
    },
    // 删除商品，支持批量操作，使用逗号分隔
    deleteCartProduct: function () {
        var _this = this
        var productIds = Array.prototype.slice.apply(arguments)
        _cart.deleteProduct(productIds.join(','), function (data, msg) {
            _this.renderCart(data)
        }, function (err) {
            $('.page-wrap').html('<p class="err-tip">数据获取错误，请刷新</p>')
        })
    }
}

$(function () {
    page.init()
})

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = "{{#notEmpty}}\r\n<div class=\"cart-header\">\r\n    <table class=\"cart-table\">\r\n        <tr>\r\n            <th class=\"cart-cell cell-check\">\r\n                <label class=\"cart-label\">\r\n                    {{#allChecked}}\r\n                    <input type=\"checkbox\" class=\"cart-select-all\" checked/>\r\n                    {{/allChecked}}\r\n                    {{^allChecked}}\r\n                    <input type=\"checkbox\" class=\"cart-select-all\" />\r\n                    {{/allChecked}}\r\n                    <span>全选</span>\r\n                </label>\r\n            </th>\r\n            <th class=\"cart-cell cell-info\">商品信息</th>\r\n            <th class=\"cart-cell cell-price\">单价</th>\r\n            <th class=\"cart-cell cell-count\">数量</th>\r\n            <th class=\"cart-cell cell-total\">合计</th>\r\n            <th class=\"cart-cell cell-opera\">操作</th>\r\n        </tr>\r\n    </table>\r\n</div>\r\n<div class=\"cart-list\">\r\n    {{#cartProductVoList}}\r\n    <table class=\"cart-table\" data-product-id=\"{{productId}}\">\r\n        <tr>\r\n            <td class=\"cart-cell cell-check\">\r\n                <label class=\"cart-label\">\r\n                    {{#productChecked}}\r\n                    <input type=\"checkbox\" class=\"cart-select\" checked/>\r\n                    {{/productChecked}}\r\n                    {{^productChecked}}\r\n                    <input type=\"checkbox\" class=\"cart-select\" />\r\n                    {{/productChecked}}\r\n                </label>\r\n            </td>\r\n            <td class=\"cart-cell cell-img\">\r\n                <a class=\"link\" href=\"./detail.html?productId={{productId}}\">\r\n                    <img class=\"p-img\" src=\"{{imageHost}}{{productMainImage}}\" alt=\"{{productName}}\" />\r\n                </a>\r\n            </td>\r\n            <td class=\"cart-cell cell-info\">\r\n                <a class=\"link\" href=\"./detail.html?productId={{productId}}\">{{productName}}</a>\r\n            </td>\r\n            <td class=\"cart-cell cell-price\">￥{{productPrice}}</td>\r\n            <td class=\"cart-cell cell-count\">\r\n                <span class=\"count-btn minus\">-</span>\r\n                <input class=\"count-input\" value=\"{{quantity}}\" data-max=\"{{productStock}}\"/>  \r\n                <span class=\"count-btn plus\">+</span>\r\n            </td>\r\n            <td class=\"cart-cell cell-total\">￥{{productTotalPrice}}</td>\r\n            <td class=\"cart-cell cell-opera\">\r\n                <span class=\"link cart-delete\">删除</span>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    {{/cartProductVoList}}\r\n</div>\r\n<div class=\"cart-footer\">\r\n    <div class=\"select-con\">\r\n        <label>\r\n            {{#allChecked}}\r\n            <input type=\"checkbox\" class=\"cart-select-all\" checked/>\r\n            {{/allChecked}}\r\n            {{^allChecked}}\r\n            <input type=\"checkbox\" class=\"cart-select-all\" />\r\n            {{/allChecked}}\r\n            <span>全选</span>\r\n        </label>\r\n    </div>\r\n    <div class=\"delete-con\">\r\n        <span class=\"link delete-selected\">\r\n            <i class=\"fa fa-trash-o\"></i>\r\n            <span>删除选中</span>\r\n        </span>\r\n    </div>\r\n    <div class=\"submit-con\">\r\n        <span>总价：</span>\r\n        <span class=\"submit-total\">￥{{cartTotalPrice}}</span>\r\n        <span class=\"btn btn-submit\">去结算</span>\r\n    </div>\r\n</div>\r\n{{/notEmpty}}\r\n{{^notEmpty}}\r\n<p class=\"err-tip\">\r\n    <span>您的购物车空空如也，</span>\r\n    <a href=\"./index.html\">立即去购物</a>\r\n</p>\r\n{{/notEmpty}}";

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

},[46]);