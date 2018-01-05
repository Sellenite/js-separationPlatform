webpackJsonp([5],[
/* 0 */,
/* 1 */
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
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
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
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * @Author: Sellenite 
 * @Date: 2017-11-27 18:47:29 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-01 22:59:15
 */

/**
 * 使用方法：
 * var pagination = new Pagination() / var pagination = $.pagination()
 * paginaiton.init({
       container: $element,
       pageNum: 1,
       pages: 10,
       pageRange: 3,
       hasPreviousPage: true,
       hasNextPage: true,
       onSelectChange: function
 * })
 */

(function () {
    function Pagination() {
        var _this = this
        this.defaultOption = {
            container: null,
            pageNum: 1,
            pages: 10,
            pageRange: 3,
            hasPreviousPage: true,
            hasNextPage: true,
            onSelectChange: null
        }
        $(document).on('click', '.page-item', function () {
            var $this = $(this)
            if ($this.hasClass('disabled')) {
                return
            }
            if ($this.hasClass('active')) {
                return
            }
            typeof _this.option.onSelectChange === 'function' ?
                _this.option.onSelectChange($this.data('page'), _this.option.pages) : ''
        })
    }

    Pagination.prototype.init = function (option) {
        this.option = $.extend({}, this.defaultOption, option)
        this.option.pageNum === 1 ?
            this.option.hasPreviousPage = false :
            this.option.pageNum === this.option.pages ?
            this.option.hasNextPage = false : ''
        this.option.pageNum === 1 && this.option.pages === 1 ?
            this.option.hasNextPage = false : ''
        var pageArray = this.setArray()
        var html = this.render(pageArray)
        this.option.container.html(html)
    }

    Pagination.prototype.setArray = function () {
        var pageArray = []
        var start = this.option.pageNum - this.option.pageRange
        start > 1 ? '' : start = 1
        var end = this.option.pageNum + this.option.pageRange
        end > this.option.pages ? end = this.option.pages : ''
        pageArray.push({
            name: '上一页',
            value: this.option.pageNum - 1,
            isEnable: this.option.hasPreviousPage
        })
        if (start !== 1) {
            pageArray.push({
                name: '...',
                value: start - 1,
                isEnable: true
            })
        }
        for (var i = start; i <= end; i++) {
            pageArray.push({
                name: i,
                value: i,
                isEnable: true,
                isActive: i === this.option.pageNum
            })
        }
        if (end !== this.option.pages) {
            pageArray.push({
                name: '...',
                value: end + 1,
                isEnable: true
            })
        }
        pageArray.push({
            name: '下一页',
            value: this.option.pageNum + 1,
            isEnable: this.option.hasNextPage
        })
        return pageArray
    }

    Pagination.prototype.render = function (pageArray) {
        var html = ''
        html += '<ul>'
        if (this.option.hasPreviousPage) {
            html += '<li class="page-item" data-page="1">首页</li>'
        } else {
            html += '<li class="page-item notshow" data-page="1">首页</li>'
        }
        for (var i = 0, length = pageArray.length; i < pageArray.length; i++) {
            var item = pageArray[i]
            if (item.isEnable === false) {
                html += '<li class="page-item disabled" data-page="' + item.value + '">' + item.name + '</li>'
            } else {
                if (item.isActive === true) {
                    html += '<li class="page-item active" data-page="' + item.value + '">' + item.name + '</li>'
                } else {
                    html += '<li class="page-item" data-page="' + item.value + '">' + item.name + '</li>'
                }
            }
        }
        if (this.option.hasNextPage) {
            html += '<li class="page-item" data-page="' + this.option.pages + '">末页</li>'
        } else {
            html += '<li class="page-item notshow" data-page="' + this.option.pages + '">末页</li>'
        }
        html += '</ul>'
        return html
    }

    // window or nodejs
    _globals = (function () {
        return this || (0, eval)("this");
    }())

    // 输出构造函数，分别为commonJS，amd, browser
    if (typeof module !== "undefined" && module.exports) {
        module.exports = Pagination
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return Pagination
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    } else {
        _globals.Pagination = Pagination
    }

    // jquery插件方式
    $.extend({
        pagination: function () {
            return new Pagination()
        }
    })

    // 输出方法参考doT.js
}())

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-25 14:28:33 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2018-01-01 12:48:49
 */
__webpack_require__(40)
__webpack_require__(3)
__webpack_require__(5)
var util = __webpack_require__(0)
var _product = __webpack_require__(13)
var template = __webpack_require__(41)
/* 使用自己开发的pagination */
__webpack_require__(14)
var Pagination = __webpack_require__(15)

var page = {
    data: {
        // 请求后台使用的对象
        listParam: {
            keyword: util.getUrlParam('keyword') || '',
            categoryId: util.getUrlParam('categoryId') || '',
            orderBy: util.getUrlParam('orderBy') || 'default',
            pageNum: util.getUrlParam('pageNum') || 1,
            pageSize: util.getUrlParam('pageSize') || 10
        },
        // pagination使用的属性
        pageNum: 1,
        pages: 1,
        pageRange: 3
    },
    init: function () {
        this.onLoad()
        this.bindEvent()
    },
    onLoad: function () {
        this.loadList()
    },
    bindEvent: function () {
        var _this = this
        $('.sort-item').on('click', function () {
            var $this = $(this)
            _this.data.listParam.pageNum = 1
            if ($this.data('type') === 'default') {
                if ($this.hasClass('active')) {
                    return
                } else {
                    $this
                        .addClass('active')
                        .siblings('.sort-item').removeClass('active desc asc')
                    _this.data.listParam.orderBy = 'default'
                }
            } else {
                $this.addClass('active').siblings('.sort-item').removeClass('active')
                if (!$this.hasClass('asc')) {
                    $this.addClass('asc').removeClass('desc')
                    _this.data.listParam.orderBy = 'price_asc'
                } else {
                    $this.addClass('desc').removeClass('asc')
                    _this.data.listParam.orderBy = 'price_desc'
                }
            }
            _this.loadList()
        })
    },
    loadList: function () {
        var _this = this
        var listHtml = ''
        var listParam = this.data.listParam
        var loading = '<div class="loading"></div>'
        var $listContent = $('.p-list-con')
        $listContent.html(loading)
        listParam.categoryId ? (delete listParam.keyword) : (delete listParam.categoryId)
        _product.getProductList(listParam, function (data, msg) {
            _this.data.pageNum = data.pageNum
            _this.data.pages = data.pages
            listHtml = util.renderHtml(template, {
                list: data.list
            })
            $listContent.html(listHtml)
            _this.loadPagination({
                pageNum: _this.data.pageNum,
                pages: _this.data.pages,
                pageRange: _this.data.pageRange
            })
        }, function (err) {
            util.errorTips(err)
        })
    },
    loadPagination: function (pageInfo) {
        var _this = this
        this.pagination ? '' : (this.pagination = new Pagination())
        this.pagination.init($.extend({}, pageInfo, {
            container: $('.pagination'),
            onSelectChange: function (pageNum, pages) {
                _this.data.listParam.pageNum = pageNum
                _this.data.pageNum = pageNum
                _this.data.pages = pages
                _this.loadList()
            }
        }))
    }
}

$(function () {
    page.init()
})

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "{{#list}}\r\n    <li class=\"p-item\">\r\n        <div class=\"p-img-con\">\r\n            <a class=\"link\" href=\"./detail.html?productId={{id}}\" target=\"_blank\">\r\n                <img class=\"p-img\" src=\"{{imageHost}}{{mainImage}}\" alt=\"{{name}}\" />\r\n            </a>\r\n        </div>\r\n        <div class=\"p-price-con\">\r\n            <span class=\"p-price\">￥{{price}}</span>\r\n        </div>\r\n        <div class=\"p-name-con\">\r\n            <a class=\"p-name\" href=\"./detail.html?productId={{id}}\" target=\"_blank\">{{name}}</a>\r\n        </div>\r\n    </li>\r\n{{/list}}\r\n{{^list}}\r\n    <p class=\"err-tip\">很抱歉，实在找不到您要的商品。</p>\r\n{{/list}}";

/***/ })
],[38]);