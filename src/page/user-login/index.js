/*
 * @Author: Sellenite 
 * @Date: 2017-11-03 19:54:09 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-12 14:35:41
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