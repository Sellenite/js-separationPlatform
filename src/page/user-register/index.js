/*
 * @Author: Sellenite 
 * @Date: 2017-11-12 15:05:41 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-12 17:39:47
 */
require('./index.css')
require('page/common/nav-simple/index.js')
var _user = require('service/user-service.js')
var util = require('util/util.js')

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
        $('#username').on('blur', function () {
            var username = $.trim($(this).val())
            if (!username) {
                return
            }
            _user.checkUsername(username, function (data, msg) {
                formError.hide()
            }, function (err) {
                formError.show(err)
            })
        })
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
            password: $.trim($('#password').val()),
            passwordConfirm: $.trim($('#password-confirm').val()),
            phone: $.trim($('#phone').val()),
            email: $.trim($('#email').val()),
            question: $.trim($('#question').val()),
            answer: $.trim($('#answer').val()),
        }
        var validateResult = this.formValidate(formData)
        if (validateResult.status) {
            _user.register(formData, function (data, msg) {
                window.location.href = './result.html?type=register'
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
        if (formData.password.length < 6) {
            result.msg = '密码长度不能少于6位'
            return result
        }
        if (formData.password !== formData.passwordConfirm) {
            result.msg = '两次输入的密码不一致'
            return result
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