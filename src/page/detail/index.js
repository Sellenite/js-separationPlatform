/*
 * @Author: Sellenite 
 * @Date: 2017-12-03 16:09:59 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-10 14:39:24
 */
require('./index.css')
require('page/common/nav/index.js')
require('page/common/header/index.js')
var util = require('util/util.js')
var _product = require('service/product-service.js')
var _cart = require('service/cart-service.js')
var template = require('./index.string')

var page = {
    data: {
        productId: util.getUrlParam('productId') || ''
    },
    init: function () {
        this.onLoad()
        this.bindEvent()
    },
    onLoad: function () {
        if (!this.data.productId) {
            util.goHome()
        } else {
            this.loadDetail()
        }
    },
    bindEvent: function () {
        var _this = this
        $(document).on('mouseenter', '.p-img-item', function () {
            var imageUrl = $(this).find('.p-img').attr('src')
            $('.main-img').attr('src', imageUrl)
        })
        $(document).on('click', '.p-count-btn', function () {
            var type = $(this).hasClass('plus') ? 'plus' : 'minus'
            var $pCount = $('.p-count')
            var currCount = parseInt($pCount.val())
            // 有库存的时候使用最低数量为1，否则为0
            var minCount = !!_this.data.stock ? 1 : 0
            var maxCount = _this.data.stock
            if (type === 'plus') {
                $pCount.val(currCount < maxCount ? currCount + 1 : maxCount)
            } else {
                $pCount.val(currCount > minCount ? currCount - 1 : minCount)
            }
        })
        $(document).on('click', '.cart-add', function () {
            if (!parseInt($('.p-count').val())) {
                util.errorTips('请至少添加一件商品')
                return
            }
            // 没有登录会请求到status为10，跳转到登录页
            _cart.addToCart({
                productId: _this.data.productId,
                count: $('.p-count').val()
            }, function (data, msg) {
                window.location.href = './result.html?type=cart-add'
            }, function (err) {
                util.errorTips(err)
            })
        })
    },
    loadDetail: function () {
        var html = ''
        var _this = this
        var $pageWrap = $('.page-wrap')
        $pageWrap.html('<div class="loading"></div>')
        _product.getProductDetail(this.data.productId, function (data, msg) {
            _this.data.stock = data.stock
            _this.filter(data)
            html = util.renderHtml(template, data)
            $pageWrap.html(html)
        }, function (err) {
            $pageWrap.html('<p class="err-tip">暂时找不到该商品</p>')
        })
    },
    filter: function (data) {
        // js数据引用类型，将data里的subImages改变了
        data.subImages = data.subImages.split(',')
    }
}

$(function () {
    page.init()
})