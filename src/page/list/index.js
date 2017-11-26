/*
 * @Author: Sellenite 
 * @Date: 2017-11-25 14:28:33 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-26 13:07:13
 */
require('./index.css')
require('page/common/nav/index.js')
require('page/common/header/index.js')
var util = require('util/util.js')
var _product = require('service/product-service.js')
var template = require('./index.string')
var Pagination = require('util/pagination/index.js')

var page = {
    data: {
        listParam: {
            keyword: util.getUrlParam('keyword') || '',
            categoryId: util.getUrlParam('categoryId') || '',
            orderBy: util.getUrlParam('orderBy') || 'default',
            pageNum: util.getUrlParam('pageNum') || 1,
            pageSize: util.getUrlParam('pageSize') || 2
        }
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
            listHtml = util.renderHtml(template, {
                list: data.list
            })
            $listContent.html(listHtml)
            _this.loadPagination({
                hasPreviousPage: data.hasPreviousPage,
                prePage: data.prePage,
                hasNextPage: data.hasNextPage,
                nextPage: data.nextPage,
                pageNum: data.pageNum,
                pages: data.pages
            })
        }, function (err) {
            uril.errorTips(err)
        })
    },
    loadPagination: function (pageInfo) {
        var _this = this
        this.pagination ? '' : (this.pagination = new Pagination())
        this.pagination.render($.extend({}, pageInfo, {
            container: $('.pagination'),
            onSelectChange: function (pageNum) {
                _this.data.listParam.pageNum = pageNum
                _this.loadList()
            }
        }))
    }
}

$(function () {
    page.init()
})