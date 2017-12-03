/*
 * @Author: Sellenite 
 * @Date: 2017-11-16 20:29:08 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-03 20:32:21
 */
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var util = require('util/util.js');
var _user = require('service/user-service.js');
// var template = require('./index.string')
/* 在js里定义模板 */
var template =
    '<div class="user-info">' +
    '<div class="form-line">' +
    '<span class="label">用户名：</span>' +
    '<span class="text">{{username}}</span>' +
    '</div>' +
    '<div class="form-line">' +
    '<span class="label">电 话：</span>' +
    '<span class="text">{{phone}}</span>' +
    '</div>' +
    '<div class="form-line">' +
    '<span class="label">邮 箱：</span>' +
    '<span class="text">{{email}}</span>' +
    '</div>' +
    '<div class="form-line">' +
    '<span class="label">问 题：</span>' +
    '<span class="text">{{question}}</span>' +
    '</div>' +
    '<div class="form-line">' +
    '<span class="label">答 案：</span>' +
    '<span class="text">{{answer}}</span>' +
    '</div>' +
    '<a class="btn btn-submit" href="./user-center-update.html">编辑</a>' +
    '</div>'

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