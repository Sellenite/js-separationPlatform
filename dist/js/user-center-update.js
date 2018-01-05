webpackJsonp([6],{

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

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-16 20:39:27 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-16 23:00:04
 */
__webpack_require__(92);
__webpack_require__(3);
__webpack_require__(5);
var navSide = __webpack_require__(7);
var util = __webpack_require__(0);
var _user = __webpack_require__(1);
var template = __webpack_require__(93)

var formError = {
    show: function (err) {
        $('.error-item').show().find('.err-msg').text(err)
    },
    hide: function () {
        $('.error-item').hide().find('.err-msg').text('')
    }
}

var page = {
    init: function () {
        this.onLoad()
        this.bindEvent()
    },
    onLoad: function () {
        navSide.init({
            name: 'user-center'
        })
        this.loadUserInfo()
    },
    bindEvent: function () {
        var _this = this
        // 由于绑定的是动态生成的html，所以需要用事件冒泡委托
        $('.panel-body').on('click', '.btn-submit', function () {
            _this.submit()
        })
        // 实时提醒，提高用户体验
        $('.panel-body').on('blur', 'input', function () {
            var formData = _this.getFormData()
            validateResult = _this.formValidate(formData)
            if (validateResult.status) {
                formError.hide()
            } else {
                formError.show(validateResult.msg)
            }
        })
    },
    submit: function () {
        var formData = this.getFormData()
        validateResult = this.formValidate(formData)
        if (validateResult.status) {
            _user.updateUserInfo(formData, function (data, msg) {
                util.successTips(msg)
                window.location.href = './user-center.html'
            }, function (err) {
                formError.show(err)
            })
        } else {
            formError.show(validateResult.msg)
        }
    },
    getFormData: function () {
        var data = {
            phone: $.trim($('#phone').val()),
            email: $.trim($('#email').val()),
            question: $.trim($('#question').val()),
            answer: $.trim($('#answer').val()),
        }
        return data
    },
    loadUserInfo: function () {
        var userHtml = ''
        _user.getUserInfo(function (data, msg) {
            userHtml = util.renderHtml(template, data)
            $('.panel-body').html(userHtml)
        }, function (err) {
            util.errorTips(err)
        })
    },
    formValidate: function (formData) {
        var result = {
            status: false,
            msg: ''
        }
        if (!util.validate(formData.phone, 'phone')) {
            result.msg = '手机号格式不正确'
            return result
        }
        if (!util.validate(formData.email, 'email')) {
            result.msg = '邮箱格式不正确'
            return result
        }
        if (!util.validate(formData.question, 'require')) {
            result.msg = '密码提示问题不能为空'
            return result
        }
        if (!util.validate(formData.answer, 'require')) {
            result.msg = '密码提示问题答案不能为空'
            return result
        }
        result.status = true
        result.msg = '验证成功'
        return result
    }
}

$(function () {
    page.init()
})

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info\">\r\n    <div class=\"error-item\">\r\n        <i class=\"fa fa-minus-circle error-icon\"></i>\r\n        <p class=\"err-msg\">Error</p>\r\n    </div>\r\n    <div class=\"form-line\">\r\n        <span class=\"label\">用户名：</span>\r\n        <span class=\"text\">{{username}}</span>\r\n    </div>\r\n    <div class=\"form-line\">\r\n        <span class=\"label\">电 话：</span>\r\n        <input class=\"input\" id=\"phone\" autocomplete=\"off\" value=\"{{phone}}\" />\r\n    </div>\r\n    <div class=\"form-line\">\r\n        <span class=\"label\">邮 箱：</span>\r\n        <input class=\"input\" id=\"email\" autocomplete=\"off\" value=\"{{email}}\" />\r\n    </div>\r\n    <div class=\"form-line\">\r\n        <span class=\"label\">问 题：</span>\r\n        <input class=\"input\" id=\"question\" autocomplete=\"off\" value=\"{{question}}\" />\r\n    </div>\r\n    <div class=\"form-line\">\r\n        <span class=\"label\">答 案：</span>\r\n        <input class=\"input\" id=\"answer\" autocomplete=\"off\" value=\"{{answer}}\" />\r\n    </div>\r\n    <span class=\"btn btn-submit\">提交</span>\r\n</div>";

/***/ })

},[90]);