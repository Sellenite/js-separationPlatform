/*
 * @Author: Sellenite 
 * @Date: 2017-11-14 22:55:58 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-15 00:10:51
 */
require('./index.css');
require('page/common/nav-simple/index.js');
var _user = require('service/user-service.js');
var util = require('util/util.js');

var formError = {
    show: function (err) {
        $('.error-item').show().find('.err-msg').text(err)
    },
    hide: function () {
        $('.error-item').hide().find('.err-msg').text('')
    }
}

var page = {
    data: {
        username: '',
        question: '',
        answer: '',
        token: ''
    },
    init: function () {
        this.onload()
        this.bindEvent()
    },
    onload: function () {
        this.loadStepUsername()
    },
    bindEvent: function () {
        var _this = this
        $('#submit-username').on('click', function () {
            var username = $.trim($('#username').val())
            if (username) {
                _user.getQuestion(username, function (data, msg) {
                    _this.data.username = username
                    _this.data.question = data
                    _this.loadStepQuestion()
                }, function (err) {
                    formError.show(err)
                })
            } else {
                formError.show('请输入用户名')
            }
        })
        $('#submit-question').on('click', function () {
            var answer = $.trim($('#answer').val())
            if (answer) {
                _user.checkAnswer({
                    username: _this.data.username,
                    question: _this.data.question,
                    answer: answer
                }, function (data, msg) {
                    _this.data.answer = answer
                    _this.data.token = data
                    _this.loadStepPassword()
                }, function (err) {
                    formError.show(err)
                })
            } else {
                formError.show('请输入问题答案')
            }
        })
        $('#submit-password').on('click', function () {
            var password = $.trim($('#password').val())
            if (password && password.length >= 6) {
                _user.resetPassword({
                    username: _this.data.username,
                    passwordNew: password,
                    forgetToken: _this.data.token
                }, function (data, msg) {
                    window.location.href = './result.html?type=pass-reset'
                }, function (err) {
                    formError.show(err)
                })
            } else {
                formError.show('请输入不少于6位的新密码')
            }
        })
    },
    loadStepUsername: function () {
        $('.step-username').show()
    },
    loadStepQuestion: function () {
        formError.hide()
        $('.step-username').hide()
            .siblings('.step-question').show()
            .find('.question').text(this.data.question)
    },
    loadStepPassword: function () {
        formError.hide()
        $('.step-question').hide()
            .siblings('.step-password').show()
    }
}

$(function () {
    page.init()
})