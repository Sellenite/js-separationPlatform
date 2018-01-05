webpackJsonp([1],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-08 22:11:51 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-17 23:00:18
 */
var util = __webpack_require__(0)

var _user = {
    // 检测登录状态，nav组件使用
    checkLogin: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/get_user_info.do'),
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 注册，注册页面使用
    register: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/register.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 登录，登录页面使用
    login: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/login.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 检测用户名是否存在，注册页面使用
    checkUsername: function (username, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/check_valid.do'),
            data: {
                type: 'username',
                str: username
            },
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 根据用户名获取答案提示，找回密码页面使用
    getQuestion: function (username, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/forget_get_question.do'),
            data: {
                username: username
            },
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 根据提示答案获取token，找回密码页面使用
    checkAnswer: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/forget_check_answer.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 非登录状态下根据token等信息重置密码，找回密码页面使用
    resetPassword: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/forget_reset_password.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 登录状态下修改密码，修改密码页面使用
    updatePassword: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/reset_password.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 获取个人信息，个人中心页面使用，未登录状态下请求会返回不同的状态码
    // 所有需要载入用户信息的页面都要加载这个函数做验证
    getUserInfo: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/get_information.do'),
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 更新个人信息，修改更人信息页面使用
    updateUserInfo: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/update_information.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 退出登录状态，nav组件使用
    logout: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/logout.do'),
            method: 'POST',
            success: resolve,
            error: reject
        })
    }
}

module.exports = _user

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-12-10 18:53:15 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2018-01-01 16:35:57
 */

var util = __webpack_require__(0);

var _order = {
    // 获取商品列表，订单确认页使用
    getProductList: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/order/get_order_cart_product.do'),
            success: resolve,
            error: reject
        })
    },
    // 创建提交订单，订单确认页使用
    createOrder: function (orderInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/order/create.do'),
            data: orderInfo,
            success: resolve,
            error: reject
        })
    },
    // 获取已提交订单，订单列表页使用
    getOrderList: function (listParam, resolve, reject) {
        util.request({
            url: util.getServerUrl('/order/list.do'),
            data: listParam,
            success: resolve,
            error: reject
        })
    },
    // 获取详细订单信息，订单详情页使用
    getOrderDetail: function (orderNumber, resolve, reject) {
        util.request({
            url: util.getServerUrl('/order/detail.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        })
    },
    // 取消订单，订单详情页使用
    cancelOrder: function (orderNumber, resolve, reject) {
        util.request({
            url: util.getServerUrl('/order/cancel.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        })
    }
}

module.exports = _order;

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-12-10 19:56:08 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-31 17:41:02
 */
var util = __webpack_require__(0);

var _address = {
    // 获取地址列表功能，订单确认页使用
    getAddressList: function (addressInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/shipping/list.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        })
    },
    // 保存地址功能，订单确认页使用
    save: function (addressInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/shipping/add.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        })
    },
    // 更新地址功能，订单确认页使用
    update: function (addressInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/shipping/update.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        })
    },
    // 删除地址功能，订单确认页使用
    deleteAddress: function (shippingId, resolve, reject) {
        util.request({
            url: util.getServerUrl('/shipping/del.do'),
            data: {
                shippingId: shippingId
            },
            success: resolve,
            error: reject
        })
    },
    // 编辑更新地址功能，订单确认页使用
    getAddress: function (shippingId, resolve, reject) {
        util.request({
            url: util.getServerUrl('/shipping/select.do'),
            data: {
                shippingId: shippingId
            },
            success: resolve,
            error: reject
        })
    }
}

module.exports = _address;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-08 23:36:50 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-10 14:52:43
 */
var util = __webpack_require__(0)

var _cart = {
    // 拿到购物车数量，nav组件使用
    getCartCount: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/get_cart_product_count.do'),
            success: resolve,
            error: reject
        })
    },
    // 添加购物车功能，商品详情页使用
    addToCart: function (productInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/add.do'),
            data: productInfo,
            success: resolve,
            error: reject
        })
    },
    // 获取购物车列表，购物车页面使用
    getCartList: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/list.do'),
            success: resolve,
            error: reject
        })
    },
    // 选中一个购物车列表的物件，购物车页面使用
    selectProduct: function (productId, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/select.do'),
            data: {
                productId: productId
            },
            success: resolve,
            error: reject
        })
    },
    // 取消选中一个购物车列表的物件，购物车页面使用
    unSelectProduct: function (productId, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/un_select.do'),
            data: {
                productId: productId
            },
            success: resolve,
            error: reject
        })
    },
    // 全选购物车列表的物件，购物车页面使用
    selectAllProduct: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/select_all.do'),
            success: resolve,
            error: reject
        })
    },
    // 取消全选购物车列表的物件，购物车页面使用
    unSelectAllProduct: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/un_select_all.do'),
            success: resolve,
            error: reject
        })
    },
    // 更新购物车商品数量，购物车页面使用
    updateProduct: function (productInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/update.do'),
            data: productInfo,
            success: resolve,
            error: reject
        })
    },
    // 删除指定商品，购物车页面使用
    deleteProduct: function (productIds, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/delete_product.do'),
            data: {
                productIds: productIds
            },
            success: resolve,
            error: reject
        })
    }
}

module.exports = _cart

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-08 21:43:50 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-25 14:41:29
 */
__webpack_require__(4)
var util = __webpack_require__(0)
var _user = __webpack_require__(1)
var _cart = __webpack_require__(2)

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
            _user.logout(function (data, msg) {
                window.location.reload()
            }, function (err) {
                util.errorTips(err)
            })
        })
    },
    loadUserInfo: function () {
        _user.checkLogin(function (data, msg) {
            $('.user.not-login').hide().siblings('.user.login').show().find('.username').text(data.username)
        }, function (err) {
            util.errorTips(err)
        })
    },
    loadCartCount: function () {
        _cart.getCartCount(function (data, msg) {
            $('.nav .cart-count').text(data || 0)
        }, function (err) {
            $('.nav .cart-count').text(0)
        })
    }
}

module.exports = nav.init()

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-09 19:53:06 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-25 14:45:08
 */
__webpack_require__(6)
var util = __webpack_require__(0)

var header = {
    init: function () {
        this.onLoad()
        this.bindEvent()
    },
    onLoad: function () {
        var keyword = util.getUrlParam('keyword')
        if (keyword) {
            $('#search-input').val(keyword)
        }
    },
    bindEvent: function () {
        var _this = this
        $('#search-btn').on('click', function () {
            _this.searchSubmit()
        })
        $('#search-input').on('keyup', function (e) {
            // 13是回车键的keycode
            if (e.keyCode === 13) {
                _this.searchSubmit()
            }
        })
    },
    // 搜索提交
    searchSubmit: function () {
        var keyword = $.trim($('#search-input').val())
        if (keyword) {
            window.location.href = './list.html?keyword=' + keyword
        } else {
            util.goHome()
        }
    }
}

header.init()

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-12-10 18:54:04 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-31 19:02:32
 */
__webpack_require__(52)
__webpack_require__(5)
__webpack_require__(3)
var util = __webpack_require__(0)
var _order = __webpack_require__(12)
var _address = __webpack_require__(16)
var templateAddress = __webpack_require__(53)
var templateProduct = __webpack_require__(54)
var addressModal = __webpack_require__(55)

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

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

module.exports = "{{#list}}\r\n{{#isActive}}\r\n<div class=\"address-item active\" data-id=\"{{id}}\">\r\n{{/isActive}}\r\n{{^isActive}}\r\n<div class=\"address-item\" data-id=\"{{id}}\">\r\n{{/isActive}}\r\n    <div class=\"address-title\">\r\n        {{receiverCity}} {{receiverProvince}} （ {{receiverName}} 收 ）\r\n    </div>\r\n    <div class=\"address-detail\">\r\n        {{receiverAddress}} {{receiverPhone}}\r\n    </div>\r\n    <div class=\"address-opera\">\r\n        <span class=\"link address-update\">编辑</span>\r\n        <span class=\"link address-delete\">删除</span>\r\n    </div>\r\n</div>\r\n{{/list}}\r\n<div class=\"address-add\">\r\n    <div class=\"address-new\">\r\n        <i class=\"fa fa-plus\"></i>\r\n        <div class=\"text\">使用新地址</div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

module.exports = "<table class=\"product-table\">\r\n    <tr>\r\n        <th class=\"cell-img\">&nbsp;</th>\r\n        <th class=\"cell-info\">商品描述</th>\r\n        <th class=\"cell-price\">价格</th>\r\n        <th class=\"cell-count\">数量</th>\r\n        <th class=\"cell-total\">小计</th>\r\n    </tr>\r\n    {{#orderItemVoList}}\r\n    <tr>\r\n        <td class=\"cell-img\">\r\n            <a href=\"./detail.html?productId={{productId}}\" target=\"_blank\">\r\n                <img class=\"p-img\" src=\"{{imageHost}}{{productImage}}\" alt=\"{{productName}}\" />\r\n            </a>\r\n        </td>\r\n        <td class=\"cell-info\">\r\n            <a class=\"link\" href=\"./detail.html?productId={{productId}}\" target=\"_blank\">{{productName}}</a>\r\n        </td>\r\n        <td class=\"cell-price\">￥{{currentUnitPrice}}</td>\r\n        <td class=\"cell-count\">{{quantity}}</td>\r\n        <td class=\"cell-total\">￥{{totalPrice}}</td>\r\n    </tr>\r\n    {{/orderItemVoList}}\r\n</table>\r\n<div class=\"submit-con\">\r\n    <span>订单总价:</span>\r\n    <span class=\"submit-total\">￥{{productTotalPrice}}</span>\r\n    <span class=\"btn order-submit\">提交订单</span>\r\n</div>";

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * @Author: Sellenite 
 * @Date: 2017-12-30 16:44:44 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-31 16:54:55
 */


var util = __webpack_require__(0);
var _cities = __webpack_require__(56);
var _address = __webpack_require__(16);
var template = __webpack_require__(57);

var addressModal = {
    show: function (option) {
        // 保存配置
        this.option = option
        // 防止增加新地址时data为空而访问里面属性报错
        this.option.data = option.data || {}
        this.$modalWrap = $('.modal-wrap')
        // 渲染页面
        this.loadModal()
        // 绑定事件
        this.bindEvent()
    },
    hide: function () {
        this.$modalWrap.html('')
    },
    loadModal: function () {
        var addressModalHtml = util.renderHtml(template, this.option)
        this.$modalWrap.html(addressModalHtml)
        // 加载省份
        this.loadProvince()
    },
    loadProvince: function () {
        var provinces = _cities.getProvinces() || []
        var $provinceSelect = this.$modalWrap.find('#receiver-province')
        $provinceSelect.html(this.getSelectOption(provinces))
        if (this.option.isUpdate && this.option.data.receiverProvince) {
            $provinceSelect.val(this.option.data.receiverProvince)
            this.loadCities(this.option.data.receiverProvince)
        }
    },
    loadCities: function (provinceName) {
        var cities = _cities.getCities(provinceName)
        var $citySelect = this.$modalWrap.find('#receiver-city')
        $citySelect.html(this.getSelectOption(cities))
        if (this.option.isUpdate && this.option.data.receiverCity) {
            $citySelect.val(this.option.data.receiverCity)
        }
    },
    // 渲染option数据
    getSelectOption: function (optionArray) {
        var html = '<option value="">请选择</option>'
        for (var i = 0, length = optionArray.length; i < length; i++) {
            html += '<option value="' + optionArray[i] + '">' + optionArray[i] + '</option>'
        }
        return html
    },
    // 获取表单里收件人信息，并做验证
    getReceiverInfo: function () {
        var receiverInfo = {}
        var result = {
            status: false
        }
        if (this.option.isUpdate) {
            receiverInfo.id = this.$modalWrap.find('#receiver-id').val()
        }
        receiverInfo.receiverName = $.trim(this.$modalWrap.find('#receiver-name').val())
        receiverInfo.receiverProvince = this.$modalWrap.find('#receiver-province').val()
        receiverInfo.receiverCity = this.$modalWrap.find('#receiver-city').val()
        receiverInfo.receiverPhone = $.trim(this.$modalWrap.find('#receiver-phone').val())
        receiverInfo.receiverAddress = $.trim(this.$modalWrap.find('#receiver-address').val())
        receiverInfo.receiverZip = $.trim(this.$modalWrap.find('#receiver-zip').val())
        if (!receiverInfo.receiverName) {
            result.errMsg = '请输入收件人姓名'
        } else if (!receiverInfo.receiverProvince) {
            result.errMsg = '请输入收件人所在省份'
        } else if (!receiverInfo.receiverCity) {
            result.errMsg = '请输入收件人所在城市'
        } else if (!receiverInfo.receiverPhone || !this.isNumber(receiverInfo.receiverPhone) || receiverInfo.receiverPhone.length !== 11) {
            result.errMsg = '请输入收件人正确手机号'
        } else if (!receiverInfo.receiverAddress) {
            result.errMsg = '请输入收件人详细地址'
        } else if (!this.isNumber(receiverInfo.receiverZip) || receiverInfo.receiverZip.length !== 6) {
            result.errMsg = '请输入正确的邮政编码'
        } else {
            result.status = true
            result.data = receiverInfo
        }
        return result
    },
    isNumber: function (obj) {
        // +'z'会变成NaN
        obj = +obj
        return typeof obj === 'number' && !isNaN(obj)
    },
    bindEvent: function () {
        var _this = this
        // 点击叉号或蒙板区关闭弹窗
        this.$modalWrap.find('.modal-container').on('click', function (e) {
            e.stopPropagation()
        })
        this.$modalWrap.find('.close').on('click', function (e) {
            _this.hide()
        })
        // 省份选择联动
        this.$modalWrap.find('#receiver-province').change(function () {
            var selectedProvince = $(this).val()
            _this.loadCities(selectedProvince)
        })
        // 提交收货地址
        this.$modalWrap.find('.address-btn').on('click', function () {
            var receiverInfo = _this.getReceiverInfo()
            var isUpdate = _this.option.isUpdate
            // 使用新地址且验证通过
            if (!isUpdate && receiverInfo.status) {
                _address.save(receiverInfo.data, function (data, msg) {
                    util.successTips('地址添加成功')
                    _this.hide()
                    typeof _this.option.onSuccess === 'function' && _this.option.onSuccess(data)
                }, function (err) {
                    util.errorTips(err)
                })
            }
            // 更新收件人，并且验证通过
            else if (isUpdate && receiverInfo.status) {
                _address.update(receiverInfo.data, function (data, msg) {
                    util.successTips('地址修改成功')
                    _this.hide()
                    typeof _this.option.onSuccess === 'function' && _this.option.onSuccess(data)
                }, function (err) {
                    util.errorTips(err)
                })
            } else {
                util.errorTips(receiverInfo.errMsg || '信息错误')
            }
        })
    }
};

module.exports = addressModal;

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * @Author: Sellenite 
 * @Date: 2017-12-30 16:47:47 
 * @Last Modified by:   Sellenite 
 * @Last Modified time: 2017-12-30 16:47:47 
 */




var _cities = {
    cityInfo: {
        '北京': ['北京'],
        '上海': ['上海'],
        '天津': ['天津'],
        '重庆': ['重庆'],
        '河北省': ['石家庄', '张家口', '承德', '秦皇岛', '唐山', '廊坊', '保定', '沧州', '衡水', '邢台', '邯郸'],
        '山西省': ['太原', '大同', '朔州', '阳泉', '长治', '晋城', '忻州', '吕梁', '晋中', '临汾', '运城'],
        '辽宁省': ['沈阳', '朝阳', '阜新', '铁岭', '抚顺', '本溪', '辽阳', '鞍山', '丹东', '大连', '营口', '盘锦', '锦州', '葫芦岛'],
        '吉林省': ['长春', '白城', '松原', '吉林', '四平', '辽源', '通化', '白山', '延边'],
        '黑龙江省': ['哈尔滨', '齐齐哈尔', '黑河', '大庆', '伊春', '鹤岗', '佳木斯', '双鸭山', '七台河', '鸡西', '牡丹江', '绥化', '大兴安'],
        '江苏省': ['南京', '徐州', '连云港', '宿迁', '淮阴', '盐城', '扬州', '泰州', '南通', '镇江', '常州', '无锡', '苏州'],
        '浙江省': ['杭州', '湖州', '嘉兴', '舟山', '宁波', '绍兴', '金华', '台州', '温州', '丽水'],
        '安徽省': ['合肥', '宿州', '淮北', '阜阳', '蚌埠', '淮南', '滁州', '马鞍山', '芜湖', '铜陵', '安庆', '黄山', '六安', '巢湖', '池州', '宣城'],
        '福建省': ['福州', '南平', '三明', '莆田', '泉州', '厦门', '漳州', '龙岩', '宁德'],
        '江西省': ['南昌', '九江', '景德镇', '鹰潭', '新余', '萍乡', '赣州', '上饶', '抚州', '宜春', '吉安'],
        '山东省': ['济南', '聊城', '德州', '东营', '淄博', '潍坊', '烟台', '威海', '青岛', '日照', '临沂', '枣庄', '济宁', '泰安', '莱芜', '滨州', '菏泽'],
        '河南省': ['郑州', '三门峡', '洛阳', '焦作', '新乡', '鹤壁', '安阳', '濮阳', '开封', '商丘', '许昌', '漯河', '平顶山', '南阳', '信阳', '周口', '驻马店'],
        '湖北省': ['武汉', '十堰', '襄攀', '荆门', '孝感', '黄冈', '鄂州', '黄石', '咸宁', '荆州', '宜昌', '恩施', '襄樊'],
        '湖南省': ['长沙', '张家界', '常德', '益阳', '岳阳', '株洲', '湘潭', '衡阳', '郴州', '永州', '邵阳', '怀化', '娄底', '湘西'],
        '广东省': ['广州', '清远', '韶关', '河源', '梅州', '潮州', '汕头', '揭阳', '汕尾', '惠州', '东莞', '深圳', '珠海', '江门', '佛山', '肇庆', '云浮', '阳江', '茂名', '湛江'],
        '海南省': ['海口', '三亚'],
        '四川省': ['成都', '广元', '绵阳', '德阳', '南充', '广安', '遂宁', '内江', '乐山', '自贡', '泸州', '宜宾', '攀枝花', '巴中', '达川', '资阳', '眉山', '雅安', '阿坝', '甘孜', '凉山'],
        '贵州省': ['贵阳', '六盘水', '遵义', '毕节', '铜仁', '安顺', '黔东南', '黔南', '黔西南'],
        '云南省': ['昆明', '曲靖', '玉溪', '丽江', '昭通', '思茅', '临沧', '保山', '德宏', '怒江', '迪庆', '大理', '楚雄', '红河', '文山', '西双版纳'],
        '陕西省': ['西安', '延安', '铜川', '渭南', '咸阳', '宝鸡', '汉中', '榆林', '商洛', '安康'],
        '甘肃省': ['兰州', '嘉峪关', '金昌', '白银', '天水', '酒泉', '张掖', '武威', '庆阳', '平凉', '定西', '陇南', '临夏', '甘南'],
        '青海省': ['西宁', '海东', '西宁', '海北', '海南', '黄南', '果洛', '玉树', '海西'],
        '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '呼伦贝尔盟', '兴安盟', '哲里木盟', '锡林郭勒盟', '乌兰察布盟', '鄂尔多斯', '巴彦淖尔盟', '阿拉善盟'],
        '广西': ['南宁', '桂林', '柳州', '梧州', '贵港', '玉林', '钦州', '北海', '防城港', '南宁', '百色', '河池', '柳州', '贺州'],
        '西藏': ['拉萨', '那曲', '昌都', '林芝', '山南', '日喀则', '阿里'],
        '宁夏': ['银川', '石嘴山', '吴忠', '固原'],
        '新疆': ['乌鲁木齐', '克拉玛依', '喀什', '阿克苏', '和田', '吐鲁番', '哈密', '博尔塔拉', '昌吉', '巴音郭楞', '伊犁', '塔城', '阿勒泰'],
        '香港': ['香港'],
        '澳门': ['澳门'],
        '台湾': ['台北', '台南', '其他']
    },
    // 获取所有的省份
    getProvinces: function () {
        var provinces = [];
        for (var item in this.cityInfo) {
            provinces.push(item);
        }
        return provinces;
    },
    // 获取某省份的所有城市
    getCities: function (provinceName) {
        return this.cityInfo[provinceName] || [];
    }
}

module.exports = _cities

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal close\">\r\n    <div class=\"modal-container\">\r\n        <div class=\"modal-header\">\r\n            {{#isUpdate}}\r\n            <h1 class=\"modal-title\">更新地址</h1>\r\n            {{/isUpdate}}\r\n            {{^isUpdate}}\r\n            <h1 class=\"modal-title\">使用新地址</h1>\r\n            {{/isUpdate}}\r\n            <i class=\"fa fa-close close\"></i>  \r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"form\">\r\n                <div class=\"form-line\">\r\n                    <label class=\"label\" for=\"receiver-name\">\r\n                        <span class=\"required\">*</span>收件人姓名：\r\n                    </label>\r\n                    <input class=\"form-item\" id=\"receiver-name\" placeholder=\"请输入收件人姓名\" value=\"{{data.receiverName}}\" />\r\n                </div>\r\n                <div class=\"form-line\">\r\n                    <label class=\"label\" for=\"receiver-province\">\r\n                        <span class=\"required\">*</span>\r\n                        所在城市：\r\n                    </label>\r\n                    <select class=\"form-item\" id=\"receiver-province\">\r\n                        <option value=\"\">请选择</option>\r\n                    </select>\r\n                    <select class=\"form-item\" id=\"receiver-city\">\r\n                        <option value=\"\">请选择</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-line\">\r\n                    <label class=\"label\" for=\"receiver-address\">\r\n                        <span class=\"required\">*</span>\r\n                        详细地址：\r\n                    </label>\r\n                    <input class=\"form-item\" id=\"receiver-address\" placeholder=\"请精确到门牌号\" value=\"{{data.receiverAddress}}\"/>\r\n                </div>\r\n                <div class=\"form-line\">\r\n                    <label class=\"label\" for=\"receiver-phone\">\r\n                        <span class=\"required\">*</span>\r\n                        收件人手机：\r\n                    </label>\r\n                    <input class=\"form-item\" id=\"receiver-phone\" placeholder=\"请输入11位手机号\"  value=\"{{data.receiverPhone}}\"/>\r\n                </div>\r\n                <div class=\"form-line\">\r\n                    <label class=\"label\" for=\"receiver-zip\">邮政编码：</label>\r\n                    <input class=\"form-item\" id=\"receiver-zip\" placeholder=\"如：100000\"  value=\"{{data.receiverZip}}\"/>\r\n                </div>\r\n                <div class=\"form-line\">\r\n                    <input type=\"hidden\" id=\"receiver-id\" value=\"{{data.id}}\" />  \r\n                    <a class=\"btn address-btn\">保存收货地址</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[50]);