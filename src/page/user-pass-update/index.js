/*
 * @Author: Sellenite 
 * @Date: 2017-11-17 21:42:24 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-17 23:09:49
 */
require('./index.css')
require('page/common/nav/index.js')
require('page/common/header/index.js')
var navSide = require('page/common/nav-side/index.js')
var util = require('util/util.js')
var _user = require('service/user-service.js')

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
            name: 'user-pass-update'
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
        $('.input').last().on('blur', function () {
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
            _user.updatePassword({
                passwordOld: formData.password,
                passwordNew: formData.passwordNew
            }, function (data, msg) {
                util.successTips('修改密码成功，返回登录页面')
                _user.logout()
                window.location.href = './user-login.html'
            }, function (err) {
                formError.show(err)
            })
        } else {
            formError.show(validateResult.msg)
        }
    },
    getFormData: function () {
        var data = {
            password: $.trim($('#password').val()),
            passwordNew: $.trim($('#password-new').val()),
            passwordConfirm: $.trim($('#password-confirm').val())
        }
        return data
    },
    loadUserInfo: function () {
        _user.getUserInfo(function (data, msg) {
            // getUserInfo这个函数会判断登录返回status为10，可以强制登录
            // updatePassword的后台接口没登陆会返回status为1，只做错误提醒
        }, function (err) {
            util.errorTips(err)
        })
    },
    formValidate: function (formData) {
        var result = {
            status: false,
            msg: ''
        }
        if (!util.validate(formData.password, 'require')) {
            result.msg = '原密码不能为空'
            return result
        }
        // 防止当数据是undefined或null的时候取length会报错
        // 不过这里取得数据就算没输入默认是空字符串，不会报错
        if (!formData.passwordNew || formData.passwordNew.length < 6) {
            result.msg = '密码长度不能少于6位'
            return result
        }
        if (formData.passwordNew !== formData.passwordConfirm) {
            result.msg = '两次输入的密码不一致'
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