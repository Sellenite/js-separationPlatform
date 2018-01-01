/*
 * @Author: Sellenite 
 * @Date: 2017-12-10 18:54:04 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-31 19:02:32
 */
require('./index.css')
require('page/common/header/index.js')
require('page/common/nav/index.js')
var util = require('util/util.js')
var _order = require('service/order-service.js')
var _address = require('service/address-service.js')
var templateAddress = require('./address-list.string')
var templateProduct = require('./product-list.string')
var addressModal = require('./address-modal.js')

var page = {
    data: {
        selectedAddressId: null
    },
    init: function () {
        this.onLoad()
        this.bindEvent()
    },
    onLoad: function () {
        this.loadAddressList()
        this.loadProductList()
    },
    bindEvent: function () {
        var _this = this
        // 地址选择
        $(document).on('click', '.address-item', function () {
            $(this).addClass('active').siblings('.address-item').removeClass('active')
            _this.data.selectedAddressId = $(this).data('id')
        })
        // 订单提交
        $(document).on('click', '.order-submit', function () {
            var shippingId = _this.data.selectedAddressId
            if (shippingId) {
                _order.createOrder({
                    shippingId: shippingId
                }, function (data, msg) {
                    window.location.href = './payment.html?orderNumber=' + data.orderNo
                }, function (err) {
                    util.errorTips(err)
                })
            } else {
                util.errorTips('请选择地址后再提交')
            }
        })
        // 地址添加
        $(document).on('click', '.address-add', function () {
            addressModal.show({
                isUpdate: false,
                onSuccess: function (data) {
                    _this.loadAddressList()
                }
            })
        })
        // 地址编辑
        $(document).on('click', '.address-update', function (e) {
            e.stopPropagation()
            var shippingId = $(this).parents('.address-item').data('id')
            _address.getAddress(shippingId, function (data, msg) {
                addressModal.show({
                    isUpdate: true,
                    data: data,
                    onSuccess: function (data) {
                        _this.loadAddressList()
                    }
                })
            }, function (err) {
                util.errorTips(err)
            })
        })
        // 地址删除
        $(document).on('click', '.address-delete', function (e) {
            e.stopPropagation()
            var id = $(this).parents('.address-item').data('id')
            if (window.confirm('确认要删除该地址吗')) {
                _address.deleteAddress(id, function (data, msg) {
                    _this.loadAddressList()
                }, function (err) {
                    util.errorTips(err)
                })
            }
        })
    },
    // 这个加载收货地址后台没有默认地址字段，需要前台手动实现
    loadAddressList: function () {
        var _this = this
        _address.getAddressList({
            pageSize: 50
        }, function (data, msg) {
            if (data.list.length > 0) {
                _this.loadActiveStatus(data.list)
            }
            var addressListHtml = util.renderHtml(templateAddress, data)
            $('.address-con').html(addressListHtml)
        }, function (err) {
            $('.address-con').html('<p class="err-tip">地址加载失败，请刷新重试</p>')
        })
    },
    loadActiveStatus: function (list) {
        var _this = this
        if (this.data.selectedAddressId) {
            list.forEach(function (item, index) {
                if (item.id === _this.data.selectedAddressId) {
                    item.isActive = true
                }
            })
        } else {
            this.data.selectedAddressId = list[0].id
            list[0].isActive = true
            console.log(this.data.selectedAddressId)
        }
    },
    loadProductList: function () {
        $('.product-con').html('<div class="loading"></div>')
        _order.getProductList(function (data, msg) {
            var productListHtml = util.renderHtml(templateProduct, data)
            $('.product-con').html(productListHtml)
        }, function (err) {
            $('.product-con').html('<p class="err-tip">商品信息加载失败，请刷新重试</p>')
        })
    }
}

$(function () {
    page.init()
})