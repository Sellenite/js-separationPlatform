/*
 * @Author: Sellenite 
 * @Date: 2017-11-25 14:28:33 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-02 23:54:44
 */
require('./index.css')
require('page/common/nav/index.js')
require('page/common/header/index.js')
var util = require('util/util.js')
var _product = require('service/product-service.js')
var template = require('./index.string')
/* 使用自己开发的pagination */
require('util/pagination-another/index.css')
var Pagination = require('util/pagination-another/pagination.js')

var page = {
    data: {
        listParam: {
            keyword: util.getUrlParam('keyword') || '',
            categoryId: util.getUrlParam('categoryId') || '',
            orderBy: util.getUrlParam('orderBy') || 'default',
            pageNum: util.getUrlParam('pageNum') || 1,
            pageSize: util.getUrlParam('pageSize') || 10
        },
        pageNum: 1,
        pages: 1,
        pageRange: 3
    },
    init: function () {
        this.onLoad()
        this.bindEvent()
    },
    onLoad: function () {
        this.loadList()
    },
    bindEvent: function () {
        var _this = this
        $('.sort-item').on('click', function () {
            var $this = $(this)
            _this.data.listParam.pageNum = 1
            if ($this.data('type') === 'default') {
                if ($this.hasClass('active')) {
                    return
                } else {
                    $this
                        .addClass('active')
                        .siblings('.sort-item').removeClass('active desc asc')
                    _this.data.listParam.orderBy = 'default'
                }
            } else {
                $this.addClass('active').siblings('.sort-item').removeClass('active')
                if (!$this.hasClass('asc')) {
                    $this.addClass('asc').removeClass('desc')
                    _this.data.listParam.orderBy = 'price_asc'
                } else {
                    $this.addClass('desc').removeClass('asc')
                    _this.data.listParam.orderBy = 'price_desc'
                }
            }
            _this.loadList()
        })
    },
    loadList: function () {
        var _this = this
        var listHtml = ''
        var listParam = this.data.listParam
        var loading = '<div class="loading"></div>'
        var $listContent = $('.p-list-con')
        $listContent.html(loading)
        listParam.categoryId ? (delete listParam.keyword) : (delete listParam.categoryId)
        _product.getProductList(listParam, function (data, msg) {
            _this.data.pageNum = data.pageNum
            _this.data.pages = data.pages
            listHtml = util.renderHtml(template, {
                list: data.list
            })
            $listContent.html(listHtml)
            _this.loadPagination({
                pageNum: _this.data.pageNum,
                pages: _this.data.pages,
                pageRange: _this.data.pageRange
            })
        }, function (err) {
            uril.errorTips(err)
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
                _this.loadList()
            }
        }))
    }
}

$(function () {
    page.init()
})