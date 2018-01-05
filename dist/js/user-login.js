webpackJsonp([14],{

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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11)

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-03 19:54:09 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-12 14:35:41
 */
__webpack_require__(77)
__webpack_require__(10)
var _user = __webpack_require__(1)
var util = __webpack_require__(0)

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
        this.bindEvent()
    },
    bindEvent: function () {
        var _this = this
        $('#submit').on('click', function () {
            _this.submit()
        })
        $('.user-content').on('keyup', function (e) {
            if (e.keyCode === 13) {
                _this.submit()
            }
        })
    },
    submit: function () {
        var formData = {
            username: $.trim($('#username').val()),
            password: $.trim($('#password').val())
        }
        var validateResult = this.formValidate(formData)
        if (validateResult.status) {
            _user.login(formData, function (data, msg) {
                window.location.href = util.getUrlParam('redirect') || './index.html'
            }, function (err) {
                formError.show(err)
            })
        } else {
            formError.show(validateResult.msg)
        }
    },
    formValidate: function (formData) {
        var result = {
            status: false,
            msg: ''
        }
        if (!util.validate(formData.username, 'require')) {
            result.msg = '用户名不能为空'
            return result
        }
        if (!util.validate(formData.password, 'require')) {
            result.msg = '密码不能为空'
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

/***/ 77:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[75]);