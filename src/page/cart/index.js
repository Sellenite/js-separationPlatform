/*
 * @Author: Sellenite 
 * @Date: 2017-12-06 23:09:21 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-10 18:58:08
 */
require('./index.css')
require('page/common/header/index.js')
var nav = require('page/common/nav/index.js')
var util = require('util/util.js')
var _cart = require('service/cart-service.js')
var template = require('./index.string')

var page = {
    data: {

    },
    init: function () {
        this.onLoad()
        this.bindEvent()
    },
    onLoad: function () {
        this.loadCart()
    },
    bindEvent: function () {
        var _this = this
        // 监听商品单选
        $(document).on('change', '.cart-select', function () {
            var $this = $(this)
            var productId = $this.parents('.cart-table').data('product-id')
            // 这里是点击后的状态
            // 选中一个商品
            if (this.checked) {
                _cart.selectProduct(productId, function (data, msg) {
                    _this.renderCart(data)
                }, function (err) {
                    _this.showCartError()
                })
            } else {
                // 取消选中一个商品
                _cart.unSelectProduct(productId, function (data, msg) {
                    _this.renderCart(data)
                }, function (err) {
                    _this.showCartError()
                })
            }
        })
        // 监听商品全选
        $(document).on('change', '.cart-select-all', function () {
            var $this = $(this)
            // 这里是点击后的状态
            // 全选
            if (this.checked) {
                _cart.selectAllProduct(function (data, msg) {
                    _this.renderCart(data)
                }, function (err) {
                    _this.showCartError()
                })
            } else {
                // 取消全选
                _cart.unSelectAllProduct(function (data, msg) {
                    _this.renderCart(data)
                }, function (err) {
                    _this.showCartError()
                })
            }
        })
        // 监听商品数量变化
        $(document).on('click', '.count-btn', function () {
            var $this = $(this),
                $pCount = $this.siblings('.count-input'),
                currCount = parseInt($pCount.val()),
                type = $this.hasClass('plus') ? 'plus' : 'minus',
                productId = $this.parents('.cart-table').data('product-id'),
                minCount = 1,
                maxCount = parseInt($pCount.data('max')),
                newCount = 0
            if (type === 'plus') {
                if (currCount >= maxCount) {
                    util.errorTips('该商品数量已达到上限')
                    return
                } else {
                    newCount = currCount + 1
                }
            } else {
                if (currCount <= minCount) {
                    return
                } else {
                    newCount = currCount - 1
                }
            }
            _cart.updateProduct({
                productId: productId,
                count: newCount
            }, function (data, msg) {
                _this.renderCart(data)
            }, function (err) {
                _this.showCartError()
            })
        })
        // 监听商品删除
        $(document).on('click', '.cart-delete', function () {
            if (window.confirm('确认要删除该商品？')) {
                var productId = $(this).parents('.cart-table').data('product-id')
                _this.deleteCartProduct(productId)
            }
        })
        // 监听选中商品删除
        $(document).on('click', '.delete-selected', function () {
            if (window.confirm('确认要删除所选商品？')) {
                var productIds = []
                var $selectItem = $('.cart-select:checked')
                for (var i = 0; i < $selectItem.length; i++) {
                    var itemId = $($selectItem[i]).parents('.cart-table').data('product-id')
                    productIds.push(itemId)
                }
                if (productIds.length) {
                    _this.deleteCartProduct(productIds)
                } else {
                    util.errorTips('请选中要删除的商品')
                }
            }
        })
        // 提交购物车
        $(document).on('click', '.btn-submit', function () {
            if (_this.data.cartInfo && _this.data.cartInfo.cartTotalPrice > 0) {
                window.location.href = './order-confirm.html'
            } else {
                util.errorTips('请选中商品后再提交')
            }
        })
    },
    loadCart: function () {
        var _this = this
        _cart.getCartList(function (data, msg) {
            _this.renderCart(data)
        }, function (err) {
            _this.showCartError()
        })
    },
    renderCart: function (data) {
        this.filter(data)
        this.data.cartInfo = data
        var cartHtml = util.renderHtml(template, data)
        $('.page-wrap').html(cartHtml)
        // 联动nav购物车数量
        nav.loadCartCount()
    },
    filter: function (data) {
        // 添加过滤字段，renderCart时的逻辑用到
        data.notEmpty = !!data.cartProductVoList.length
    },
    showCartError: function () {
        $('.page-wrap').html('<p class="err-tip">数据获取错误，请刷新</p>')
    },
    // 删除商品，支持批量操作，使用逗号分隔
    deleteCartProduct: function () {
        var _this = this
        var productIds = Array.prototype.slice.apply(arguments)
        _cart.deleteProduct(productIds.join(','), function (data, msg) {
            _this.renderCart(data)
        }, function (err) {
            $('.page-wrap').html('<p class="err-tip">数据获取错误，请刷新</p>')
        })
    }
}

$(function () {
    page.init()
})