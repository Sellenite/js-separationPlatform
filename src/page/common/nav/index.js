/*
 * @Author: Sellenite 
 * @Date: 2017-11-08 21:43:50 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-08 23:36:16
 */
require('./index.css')
var util = require('util/util.js')
var _user = require('service/user-service.js')
var _cart = require('service/cart-service.js')

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
            _user.logout(function (res) {
                window.location.reload()
            }, function (err) {
                util.errorTips(err)
            })
        })
    },
    loadUserInfo: function () {
        _user.checkLogin(function (res) {
            $('.user.not-login').hide().siblings('.user.login').show().find('.username').text(res.username)
        }, function (err) {
            util.errorTips(err)
        })
    },
    loadCartCount: function () {
        _cart.getCartCount(function (res) {
            $('.nav .cart-count').text(res || 0)
        }, function (err) {
            $('.nav .cart-count').text(0)
        })
    }
}

module.exports = nav.init()