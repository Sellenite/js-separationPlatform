/*
 * @Author: Sellenite 
 * @Date: 2017-11-16 20:29:08 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-16 21:29:23
 */
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var util = require('util/util.js');
var _user = require('service/user-service.js');
var template = require('./index.string')

var page = {
    init: function () {
        this.onLoad()
    },
    onLoad: function () {
        navSide.init({
            name: 'user-center'
        })
        this.loadUserInfo()
    },
    loadUserInfo: function () {
        var userHtml = ''
        _user.getUserInfo(function (data, msg) {
            userHtml = util.renderHtml(template, data)
            $('.panel-body').html(userHtml)
        }, function (err) {
            util.errorTips(err)
        })
    }
}

$(function () {
    page.init()
})