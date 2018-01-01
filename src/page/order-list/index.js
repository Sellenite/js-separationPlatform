/*
 * @Author: Sellenite 
 * @Date: 2017-12-31 23:44:11 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2018-01-01 15:55:52
 */

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var util = require('util/util.js');
var _order = require('service/order-service.js');
/* 使用自己开发的pagination */
require('util/pagination-another/index.css')
var Pagination = require('util/pagination-another/pagination.js')
var template = require('./index.string');

// page 逻辑部分
var page = {
    data: {
        // 请求后台使用的对象
        listParam: {
            keyword: util.getUrlParam('keyword') || '',
            categoryId: util.getUrlParam('categoryId') || '',
            orderBy: util.getUrlParam('orderBy') || 'default',
            pageNum: util.getUrlParam('pageNum') || 1,
            pageSize: util.getUrlParam('pageSize') || 10
        },
        // pagination使用的属性
        pageNum: 1,
        pages: 1,
        pageRange: 3
    },
    init: function () {
        this.onLoad();
    },
    onLoad: function () {
        this.loadOrderList()
        navSide.init({
            name: 'order-list'
        })
    },
    loadOrderList: function () {
        var _this = this
        var orderListHtml = ''
        var $listCon = $('.order-list-con')
        $listCon.html('<div class="loading"></div>')
        _order.getOrderList(this.data.listParam, function (data, msg) {
            _this.data.pageNum = data.pageNum
            _this.data.pages = data.pages
            orderListHtml = util.renderHtml(template, data)
            $listCon.html(orderListHtml)
            _this.loadPagination({
                pageNum: _this.data.pageNum,
                pages: _this.data.pages,
                pageRange: _this.data.pageRange
            })
        }, function (err) {
            $listCon.html('<p class="err-tip">加载订单失败，请刷新后重试</p>')
        })
    },
    loadPagination: function (pageInfo) {
        var _this = this
        this.pagination ? '' : (this.pagination = new Pagination())
        this.pagination.init($.extend({}, pageInfo, {
            container: $('.pagination'),
            onSelectChange: function (pageNum, pages) {
                _this.data.listParam.pageNum = pageNum
                _this.data.pageNum = pageNum
                _this.data.pages = pages
                _this.loadOrderList()
            }
        }))
    }
};
$(function () {
    page.init();
});