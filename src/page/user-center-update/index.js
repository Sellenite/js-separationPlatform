/*
 * @Author: Sellenite 
 * @Date: 2017-11-16 20:39:27 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-16 23:00:04
 */
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var util = require('util/util.js');
var _user = require('service/user-service.js');
var template = require('./index.string')

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